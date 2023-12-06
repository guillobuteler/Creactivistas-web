"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Answer, QuestionKeys, QuestionsGroup, AxesKey } from "./mbti.types";
import { AxesDetails, QuestionsMatrix, mbtiScales } from "./mbti.data";

const ActusContext = createContext<ActusContext | null>(null);

export type User = {
  name: string;
  email: string;
};

export const validEmailExpression: RegExp =
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

type ActusContext = {
  user: User;
  startTest: (user: User) => void;
  inProgress: boolean;
  setInProgress: React.Dispatch<React.SetStateAction<boolean>>;
  stepNumber: number;
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
  actusSteps: FormStep[];
  answers: Answer[];
  saveAnswer: (key: number, answer: Answer) => void;
  resetTest: () => void;
  submitTest: () => void;
  calculateAxisTotal: (key: AxesKey) => number;
  resultMBTI: string;
};

type FormStep = {
  number: number;
  questions: QuestionsGroup[];
};

type ActusContextProviderProps = {
  children: React.ReactNode;
};

const initUser = () => ({ name: "", email: "" });

const initAnswers = () => {
  const answers: Answer[] = [];
  Object.values(QuestionKeys).forEach((key) => {
    answers.push({ key, score: 0 });
  });
  return answers;
};

const initForm = () => {
  const formSteps: FormStep[] = [];
  for (let i = 1; i <= 4; i++) {
    const start = (i - 1) * 5;
    const end = 5 * i;
    const formStep: FormStep = {
      number: i,
      questions: QuestionsMatrix.slice(start, end),
    };
    formSteps.push(formStep);
  }
  return formSteps;
};

export default function ActusContextProvider({
  children,
}: ActusContextProviderProps) {
  const [user, setUser] = useState<User>(initUser());
  const [inProgress, setInProgress] = useState<boolean>(false);
  const [stepNumber, setStepNumber] = useState<number>(1);
  const [actusSteps] = useState<FormStep[]>(initForm());
  const [answers, setAnswers] = useState<Answer[]>(initAnswers());
  const [resultMBTI, setResultMBTI] = useState<string>("");

  useEffect(() => {
    // this fixes a SSR error where the window object isn't defined
    if (typeof window !== "undefined") {
      const lsUser = localStorage.getItem("user");
      const lsMBTI = localStorage.getItem("mbti");
      const lsAnswers = localStorage.getItem("answers");
      // placing it within a useEffect prevents a mismatch between the ssr'd HTML output vs client
      if (lsUser) {
        setUser(JSON.parse(lsUser));
        setInProgress(true);
      }
      if (lsMBTI) setResultMBTI(JSON.parse(lsMBTI));
      if (lsAnswers) setAnswers(JSON.parse(lsAnswers));
    }
  }, []);

  const startTest = (user: User) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const saveAnswer = (key: number, answer: Answer) => {
    answers[key] = answer;
    setAnswers([...answers]);
    localStorage.setItem("answers", JSON.stringify(answers));
  };

  const resetTest = () => {
    setStepNumber(1);
    setAnswers(initAnswers());
    setResultMBTI("");
    setInProgress(false);
    localStorage.removeItem("mbti");
    localStorage.removeItem("user");
    localStorage.removeItem("answers");
  };

  const submitTest = () => {
    const result = mbtiScales
      .map(({ axes }) =>
        calculateAxisTotal(axes[0]) > calculateAxisTotal(axes[1])
          ? axes[0]
          : axes[1]
      )
      .join(" ");
    setResultMBTI(result);
    localStorage.setItem("mbti", result);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("answers", JSON.stringify(answers));
  };

  const calculateAxisTotal = (key: AxesKey) =>
    AxesDetails[key].questionKeys.reduce(
      (acc, qKey) => answers.filter(({ key }) => key === qKey)[0].score + acc,
      0
    );

  return (
    <ActusContext.Provider
      value={{
        user,
        startTest,
        inProgress,
        setInProgress,
        stepNumber,
        setStepNumber,
        actusSteps,
        answers,
        saveAnswer,
        resetTest,
        submitTest,
        calculateAxisTotal,
        resultMBTI,
      }}
    >
      {children}
    </ActusContext.Provider>
  );
}

export function useActusContext() {
  const context = useContext(ActusContext);
  if (!context)
    throw new Error("This hook must be used within the ActusContextProvider");

  return context;
}
