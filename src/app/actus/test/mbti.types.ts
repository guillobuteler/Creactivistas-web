enum Axis {
  I = "I",
  E = "E",
  N = "N",
  S = "S",
  T = "T",
  F = "F",
  P = "P",
  J = "J",
}
type AxisKey = keyof typeof Axis;

export enum QuestionKeys {
  "1a" = "1a",
  "1b" = "1b",
  "2a" = "2a",
  "2b" = "2b",
  "3a" = "3a",
  "3b" = "3b",
  "4a" = "4a",
  "4b" = "4b",
  "5a" = "5a",
  "5b" = "5b",
  "6a" = "6a",
  "6b" = "6b",
  "7a" = "7a",
  "7b" = "7b",
  "8a" = "8a",
  "8b" = "8b",
  "9a" = "9a",
  "9b" = "9b",
  "10a" = "10a",
  "10b" = "10b",
  "11a" = "11a",
  "11b" = "11b",
  "12a" = "12a",
  "12b" = "12b",
  "13a" = "13a",
  "13b" = "13b",
  "14a" = "14a",
  "14b" = "14b",
  "15a" = "15a",
  "15b" = "15b",
  "16a" = "16a",
  "16b" = "16b",
  "17a" = "17a",
  "17b" = "17b",
  "18a" = "18a",
  "18b" = "18b",
  "19a" = "19a",
  "19b" = "19b",
  "20a" = "20a",
  "20b" = "20b",
}
export type QuestionKey = keyof typeof QuestionKeys;

export type Question = {
  key: QuestionKey;
  label: string;
};

export type Answer = {
  [key in QuestionKeys]: number;
};

export type AxisDetails = {
  [key in Axis]: {
    title: string;
    questionKeys: QuestionKey[];
  };
};

export type mbtiScale = {
  title: string;
  question: string;
  axis: [AxisKey, AxisKey];
};

export type QuestionsGroup = Question[];
