import { useEffect, useState } from "react";
import ActusFormQuestion from "./actus.form.question";
import { questionsMatrix } from "./mbti.data";

const pointerToStepMap: Record<number, string> = {
  0: "1",
  5: "2",
  10: "3",
  20: "4",
};

export default function ActusForm() {
  const [stepPointer, setStepPointer] = useState(0);
  const currentStep = pointerToStepMap[stepPointer];
  return (
    <div
      data-testid="test-form"
      className="flex flex-col gap-4 border-0 border-cyan-400 rounded sm:p-4"
    >
      <div className="flex gap-1 sm:gap-2 items-center text-xl text-teal-700 font-semibold tracking-wide pb-2">
        <StepBubble step={1} active={currentStep === "1"} />
        <div className="h-1 w-16 bg-blue-200"></div>
        <StepBubble step={2} active={currentStep === "2"} />
        <div className="h-1 w-16 bg-blue-200"></div>
        <StepBubble step={3} active={currentStep === "3"} />
        <div className="h-1 w-16 bg-blue-200"></div>
        <StepBubble step={4} active={currentStep === "4"} />
      </div>
      <div data-testid="step" className="flex flex-col">
        
        <h2 className="flex text-2xl text-teal-700 font-semibold tracking-wide pb-2">
          Prefiero:
        </h2>
        <ActusFormQuestion id="bla" label="Lorem Ipsum doler sit amet" />
        <ActusFormQuestion id="bla2" label="Lorem Ipsum doler sit amet" />
      </div>
      <hr className="border" />
    </div>
  );
}

type StepBubbleProps = {
  step: number;
  active: boolean;
}

const StepBubble = ({step, active}: StepBubbleProps) => {
  return (<div
    data-testid="step-bubble"
    aria-label={`step-${step}`}
    className={`w-12 h-12 bg-creactivistas-${
      active ? "green" : "blue"
    } rounded-full flex items-center justify-center text-white text-xl active`}
  >
    {step}
  </div>);
}