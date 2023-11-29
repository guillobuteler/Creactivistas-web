"use client";

import ActusInstructions from "./components/instructions";
import { useActusContext } from "../actus.context.hook";
import FormHeader from "./components/form.header";
import FormStep from "./components/form.step";
import FormFooter from "./components/form.footer";

export default function ActusTest() {
  const { stepNumber, setStepNumber, actusSteps } = useActusContext();
  const stepQuestions = actusSteps[stepNumber - 1]?.questions;
  // console.log(stepQuestions);
  return (
    <div className="flex flex-col gap-6 pb-16">
      <ActusInstructions />
      <div
        data-testid="test-form"
        className="flex flex-col gap-4 border-0 border-cyan-400 rounded sm:p-4"
      >
        <FormHeader />
  
        <FormStep questions={stepQuestions} />
  
        <FormFooter />
      </div>
    </div>
  );
}
