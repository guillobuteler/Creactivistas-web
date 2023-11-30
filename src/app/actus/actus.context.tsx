import React, { createContext, useContext, useState } from "react";
import { Answer, QuestionKeys, QuestionsGroup } from "./test/mbti.types";
import { QuestionsMatrix } from "./test/mbti.data";

const ActusContext = createContext<ActusContext | null>(null);

type ActusContext = {
  inProgress: boolean;
  setInProgress: React.Dispatch<React.SetStateAction<boolean>>;
  stepNumber: number;
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
  actusSteps: FormStep[];
  answers: Answer[];
  setAnswers: React.Dispatch<React.SetStateAction<Answer[]>>;
  resetTest: () => void;
};

type FormStep = {
  number: number;
  questions: QuestionsGroup[];
};

type ActusContextProviderProps = {
  children: React.ReactNode;
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
  const [inProgress, setInProgress] = useState<boolean>(false);
  const [stepNumber, setStepNumber] = useState<number>(1);
  const [actusSteps] = useState<FormStep[]>(initForm());
  const [answers, setAnswers] = useState<Answer[]>(initAnswers());
  const resetTest = () => {
    setStepNumber(1);
    setAnswers(initAnswers());
    setInProgress(false);
  };
  return (
    <ActusContext.Provider
      value={{
        inProgress,
        setInProgress,
        stepNumber,
        setStepNumber,
        actusSteps,
        answers,
        setAnswers,
        resetTest,
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
