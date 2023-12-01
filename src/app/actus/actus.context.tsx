import React, { createContext, useContext, useState } from "react";
import { Answer, QuestionKeys, QuestionsGroup, AxesKey } from "./mbti.types";
import { AxesDetails, QuestionsMatrix } from "./mbti.data";

const ActusContext = createContext<ActusContext | null>(null);

export type User = {
  name: string;
  email: string;
};

export const validEmailExpression: RegExp =
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

type ActusContext = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  inProgress: boolean;
  setInProgress: React.Dispatch<React.SetStateAction<boolean>>;
  stepNumber: number;
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
  actusSteps: FormStep[];
  answers: Answer[];
  setAnswers: React.Dispatch<React.SetStateAction<Answer[]>>;
  resetTest: () => void;
  submitTest: () => void;
  calculateAxisTotal: (arg: AxesKey) => number;
};

type FormStep = {
  number: number;
  questions: QuestionsGroup[];
};

type ActusContextProviderProps = {
  children: React.ReactNode;
};

const initUser = () => {
  return { name: "", email: "" };
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

const initAnswers = () => {
  const answers: Answer[] = [];
  Object.values(QuestionKeys).forEach((key) => {
    answers.push({ key, score: 0 });
  });
  return answers;
};

export default function ActusContextProvider({
  children,
}: ActusContextProviderProps) {
  const [user, setUser] = useState<User>(initUser());
  const [inProgress, setInProgress] = useState<boolean>(false);
  const [stepNumber, setStepNumber] = useState<number>(1);
  const [actusSteps] = useState<FormStep[]>(initForm());
  const [answers, setAnswers] = useState<Answer[]>(initAnswers());

  const resetTest = () => {
    setStepNumber(1);
    setAnswers(initAnswers());
    setInProgress(false);
  };

  const submitTest = () => {
    // todo: process all
    resetTest();
  };

  const calculateAxisTotal = (key: AxesKey) => AxesDetails[key].questionKeys.reduce(
    (acc, qKey) =>
      answers.filter(({ key }) => key === qKey)[0].score + acc,
    0
  );

  return (
    <ActusContext.Provider
      value={{
        user,
        setUser,
        inProgress,
        setInProgress,
        stepNumber,
        setStepNumber,
        actusSteps,
        answers,
        setAnswers,
        resetTest,
        submitTest,
        calculateAxisTotal,
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
