import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { actusBeforeAll, actusRender, ActusStepOneMock } from "./jest.setup";
import FormQuestion from "./form.question";

beforeAll(actusBeforeAll);

describe("<FormQuestion />", () => {
  beforeEach(() => {
    const questionOne = ActusStepOneMock[0][0];
    actusRender(<FormQuestion questionKey={questionOne.key} label={questionOne.label} />);
  });

  it("should display the question's text", () => {
    expect(screen.getByText("Foo bar question one")).toBeInTheDocument;
  });

  it("should default the score to 0", () => {
    const scoreElements = screen.getAllByTestId("score-container");
    expect(scoreElements[0].className.indexOf("active-score")).toBeGreaterThan(
      -1
    );
  });

  it("lets the user change the score", async () => {
    const user = userEvent.setup();
    const scoreOfThree = screen.getAllByTestId("score-container")[2];
    await user.click(scoreOfThree.children[0]);
    expect(scoreOfThree.className.indexOf("active-score")).toBeGreaterThan(-1);
  });
});
