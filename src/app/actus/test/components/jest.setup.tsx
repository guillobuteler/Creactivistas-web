import ActusContextProvider from "../../actus.context";
import React from "react";

import { QuestionsGroup } from "../../mbti.types";
import { render } from "@testing-library/react";

export const ActusStepOneMock: QuestionsGroup[] = [
  [
    { key: "1a", label: "Foo bar question one" },
    { key: "1b", label: "Foo bar question two" },
  ],
  [
    { key: "2a", label: "Foo bar question three" },
    { key: "2b", label: "Foo bar question four" },
  ],
];

export function actusBeforeAll() {
  const contextMockValue = {
    stepNumber: 1,
    // setStepNumber: React.Dispatch<React.SetStateAction<number>>;
    actusSteps: [ActusStepOneMock],
    answers: [
      { key: "1a", score: 0 },
      { key: "1b", score: 0 },
    ],
    // setAnswers: React.Dispatch<React.SetStateAction<Answer[]>>;
  };

  jest.mock("../../actus.context", () => ({
    __esModule: true,
    default: React.createContext(contextMockValue),
  }));
}

type ui = React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export function actusRender(node: ui) {
  render(<ActusContextProvider>{node}</ActusContextProvider>);
}
