import { screen } from "@testing-library/react";
import React from "react";
import FormStep from "./form.step";
import { actusBeforeAll, actusRender, ActusStepOneMock } from "./jest.setup";

beforeAll(actusBeforeAll);

describe("<FormQuestion />", () => {
  beforeEach(() => {
    actusRender(<FormStep questions={ActusStepOneMock} />);
  });

  it("should display question one's text", () => {
    expect(screen.getByText("Foo bar question one")).toBeInTheDocument;
  });
  it("should display question two's text", () => {
    expect(screen.getByText("Foo bar question two")).toBeInTheDocument;
  });
  it("should display question three's text", () => {
    expect(screen.getByText("Foo bar question three")).toBeInTheDocument;
  });
  it("should display question four's text", () => {
    expect(screen.getByText("Foo bar question four")).toBeInTheDocument;
  });
});
