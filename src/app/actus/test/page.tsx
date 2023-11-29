"use client";

import ActusInstructions from "./actus.instructions";
import ActusForm from "./actus.form";

export default function ActusTest() {
  return (
    <div className="flex flex-col gap-6 pb-16">
      <ActusInstructions />
      <ActusForm />
    </div>
  );
}
