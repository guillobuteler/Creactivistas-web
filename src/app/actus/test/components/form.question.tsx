import Rating from "@/components/rating";
import { useState } from "react";

type FormQuestionProps = {
  id: string;
  label: string;
}
export default function FormQuestion({id, label}:FormQuestionProps) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex justify-between">
      <p data-testid="question-text" className="text-left pr-8">{label}</p>
      <Rating selected={selected} setSelected={setSelected} />
    </div>
  );
}
