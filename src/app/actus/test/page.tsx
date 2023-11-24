'use client';

import { useRouter } from "next/navigation";
import Button from "../../../components/button";
import ActusInstructions from "./actus.instructions";
import ActusForm from "./actus.form";

export default function ActusTest() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-6 pb-16">
      <ActusInstructions />
      <ActusForm />
      <Button title="Ver Resultados" onClick={()=>router.push('/actus/resultados')} dataTestId="end-mbti" />
    </div>
  );
}
