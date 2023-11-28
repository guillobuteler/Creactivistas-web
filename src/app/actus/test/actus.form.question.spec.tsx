import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ActusFormQuestion from "./actus.form.question";

describe("<ActusFormQuestion />", () => {
  beforeEach(() => {
    render(<ActusFormQuestion id="foo" label="Bar question to be rated" />);
  });

  it("should display the question's text", () => {
    expect(screen.getByText("Bar question to be rated")).toBeInTheDocument;
  });

  it("should default score to 0", () => {
    const scoreElements = screen.getAllByTestId("score-container");
    expect(scoreElements[0].className.indexOf("active-score")).toBeGreaterThan(-1);
  });

  it("lets the user change the score", async () => {
    const user = userEvent.setup();
    const scoreOfThree = screen.getAllByTestId("score-container")[2];
    await user.click(scoreOfThree.children[0]);
    expect(scoreOfThree.className.indexOf("active-score")).toBeGreaterThan(-1);
  });
});
