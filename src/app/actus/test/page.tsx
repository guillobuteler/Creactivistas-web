"use client";

import { useActusContext } from "../actus.context";
import ActusInstructions from "./components/instructions";
import FormHeader from "./components/form.header";
import FormStep from "./components/form.step";
import FormFooter from "./components/form.footer";
import { useEffect } from "react";

export default function ActusTest() {
  const { inProgress, setInProgress, stepNumber, actusSteps } = useActusContext();
  useEffect(()=>{
    if(!inProgress) setInProgress(true);
  }, [inProgress, setInProgress])
  const stepQuestions = actusSteps[stepNumber - 1]?.questions;
  return (
    <div className="flex flex-col gap-6 pb-16">
      <ActusInstructions />
      <div
        data-testid="test-form"
        className="flex flex-col gap-4 border-solid border-cyan-400 rounded sm:p-4"
      >
        <FormHeader />
        <FormStep questions={stepQuestions} />
        <FormFooter />
      </div>
    </div>
  );
}
