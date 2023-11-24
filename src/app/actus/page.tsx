'use client';

import { useRouter } from "next/navigation";
import Button from "../../components/button";
import ActusDescription from "./actus.description";

export default function ActusTest() {
  const router = useRouter();
  return (
    <section className="flex flex-col gap-6 pb-16" data-testid="actus">
      <ActusDescription />
      <Button title="Empezar test" onClick={()=>router.push('/actus/test')} dataTestId="start-mbti" />
    </section>
  );
}
