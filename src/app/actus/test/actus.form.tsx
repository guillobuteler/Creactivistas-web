import { useRouter } from "next/navigation";
import { useActusContext } from "../actus.context.hook";
import ActusFormStep from "./actus.form.step";
import Button from "@/components/button";

export default function ActusForm() {
  const router = useRouter();
  const { stepNumber, setStepNumber, actusSteps } = useActusContext();
  return (
    <div
      data-testid="test-form"
      className="flex flex-col gap-4 border-0 border-cyan-400 rounded sm:p-4"
    >
      <div className="flex gap-1 sm:gap-2 items-center text-xl text-teal-700 font-semibold tracking-wide pb-2">
        <StepBubble step={1} active={stepNumber === 1} />
        <div className="h-1 w-16 bg-blue-200"></div>
        <StepBubble step={2} active={stepNumber === 2} />
        <div className="h-1 w-16 bg-blue-200"></div>
        <StepBubble step={3} active={stepNumber === 3} />
        <div className="h-1 w-16 bg-blue-200"></div>
        <StepBubble step={4} active={stepNumber === 4} />
      </div>
      <div data-testid="step" className="flex flex-col">
        <h2 className="flex text-2xl text-teal-700 font-semibold tracking-wide pb-2">
          Prefiero:
        </h2>
        <ActusFormStep questions={actusSteps[stepNumber - 1]?.questions} />
        <section
          data-testid="buttons-container"
          className="flex justify-center gap-4"
        >
          {stepNumber > 1 && (
            <Button
              title="Anterior"
              onClick={() => setStepNumber(stepNumber - 1)}
              dataTestId="prev-step"
            />
          )}
          {stepNumber < 4 && (
            <Button
              title="Siguiente"
              onClick={() => setStepNumber(stepNumber + 1)}
              dataTestId="next-step"
            />
          )}
          {stepNumber === 4 && (
            <Button
              title="Ver Resultados"
              color="secondary"
              onClick={() => router.push("/actus/resultados")}
              dataTestId="end-mbti"
            />
          )}
        </section>
      </div>
    </div>
  );
}

type StepBubbleProps = {
  step: number;
  active: boolean;
};

const StepBubble = ({ step, active }: StepBubbleProps) => {
  console.log(step, active);
  const bgColor = active ? "bg-creactivistas-green-light2" : "bg-creactivistas-blue";
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
