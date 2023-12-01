import { useRouter } from "next/navigation";
import Button from "@/components/button";
import { useActusContext } from "../../actus.context";

export default function FormFooter() {
  const router = useRouter();
  const { stepNumber, setStepNumber, submitTest } = useActusContext();
  const handleClick = (action: "prev" | "next" | "submit") => {
    window.scrollTo({top:0});
    switch (action) {
      case "prev":
        setStepNumber(stepNumber - 1);
        break;
      case "next":
        setStepNumber(stepNumber + 1);
        break;
      case "submit":
        submitTest();
        router.push("/actus/resultados");
        break;
    }
  };
  return (
    <section
      data-testid="buttons-container"
      className="flex justify-center gap-4 mt-6"
    >
      {stepNumber > 1 && (
        <Button
          title="Anterior"
          onClick={() => handleClick("prev")}
          dataTestId="prev-step"
        />
      )}
      {stepNumber < 4 && (
        <Button
          title="Siguiente"
          onClick={() => handleClick("next")}
          dataTestId="next-step"
        />
      )}
      {stepNumber === 4 && (
        <Button
          title="Ver Resultados"
          color="secondary"
          onClick={() => handleClick("submit")}
          dataTestId="end-mbti"
        />
      )}
    </section>
  );
}
