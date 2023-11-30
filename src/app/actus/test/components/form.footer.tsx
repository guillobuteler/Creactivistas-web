import { useRouter } from "next/navigation";
import Button from "@/components/button";
import { useActusContext } from "../../actus.context";

export default function FormFooter () {
  const router = useRouter();
  const { stepNumber, setStepNumber } = useActusContext();
  return (
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
  );
};