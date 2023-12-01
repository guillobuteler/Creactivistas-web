"use client";

import { useActusContext } from "../actus.context";
import ActusInstructions from "./components/instructions";
import FormHeader from "./components/form.header";
import FormStep from "./components/form.step";
import FormFooter from "./components/form.footer";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ActusTest() {
  const router = useRouter();
  const { inProgress, setInProgress, stepNumber, actusSteps, user } =
    useActusContext();

  useEffect(() => {
    if (!user.name || !user.email) router.push("/actus/");
    else if (!inProgress) setInProgress(true);
  }, [router, user, inProgress, setInProgress]);

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
      <h3 className="text-lg">
        {user.name}
        <span className="pl-3">{`< ${user.email} >`}</span>
      </h3>
    </div>
  );
}
