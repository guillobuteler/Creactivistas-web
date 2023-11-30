"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/button";
import ActusDescription from "./actus.description";
import { useActusContext } from "./actus.context";

export default function ActusTest() {
  const { inProgress, setInProgress, resetTest } = useActusContext();
  const router = useRouter();
  return (
    <section className="flex flex-col gap-6 pb-16" data-testid="actus">
      <ActusDescription />
      {inProgress ? (
        <div className="flex flex-col gap-3 justify-center">
          <Button
            title="Continuar test"
            onClick={() => router.push("/actus/test")}
            dataTestId="start-mbti"
          />
          <Button
            title="Reset test"
            color="tertiary"
            onClick={() => confirm("Cualquier valor registrado hasta el momento se perderá. Continuar?") && resetTest()}
          />
        </div>
      ) : (
        <Button
          title="Empezar test"
          onClick={() => router.push("/actus/test")}
          dataTestId="start-mbti"
        />
      )}
    </section>
  );
}
