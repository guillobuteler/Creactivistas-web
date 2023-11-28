import Rating from "@/components/rating";
import { useState } from "react";

type ActusFormQuestionProps = {
  id: string;
  label: string;
}
export default function ActusFormQuestion({id, label}:ActusFormQuestionProps) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex justify-between">
      <p data-testid="question-text">{label}</p>
      <Rating selected={selected} setSelected={setSelected} />
    </div>
  );
}
