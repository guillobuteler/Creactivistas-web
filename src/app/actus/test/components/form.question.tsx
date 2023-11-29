import Rating from "@/components/rating";
import { QuestionKey } from "../mbti.types";

type FormQuestionProps = {
  questionKey: QuestionKey;
  label: string;
}
export default function FormQuestion({questionKey, label}:FormQuestionProps) {
  return (
    <div className="flex justify-between">
      <p data-testid="question-text" className="text-left pr-8">{label}</p>
      <Rating questionKey={questionKey} />
    </div>
  );
}
