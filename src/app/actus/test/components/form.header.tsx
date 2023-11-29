import { useActusContext } from "../../actus.context.hook";

export default function FormHeader() {
  const { stepNumber, setStepNumber } = useActusContext();
  return (
    <div className="flex gap-1 sm:gap-2 items-center text-xl text-teal-700 font-semibold tracking-wide pb-2">
      <StepBubble step={1} active={stepNumber === 1} />
      <div className="h-1 w-16 bg-blue-200"></div>
      <StepBubble step={2} active={stepNumber === 2} />
      <div className="h-1 w-16 bg-blue-200"></div>
      <StepBubble step={3} active={stepNumber === 3} />
      <div className="h-1 w-16 bg-blue-200"></div>
      <StepBubble step={4} active={stepNumber === 4} />
    </div>
  );
}

type StepBubbleProps = {
  step: number;
  active: boolean;
};

const StepBubble = ({ step, active }: StepBubbleProps) => {
  const bgColor = active
    ? "bg-creactivistas-green-light2"
    : "bg-creactivistas-blue";
  return (
    <div
      data-testid="step-bubble"
      aria-label={`step-${step}`}
      className={`w-12 h-12 ${bgColor} rounded-full flex items-center justify-center text-white text-xl active`}
    >
      {step}
    </div>
  );
};
