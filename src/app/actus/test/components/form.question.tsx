import Rating from "@/components/rating";
import { useActusContext } from "@/app/actus/actus.context";
import { QuestionKey } from "../../mbti.types";

type FormQuestionProps = {
  questionKey: QuestionKey;
  label: string;
}
export default function FormQuestion({questionKey, label}:FormQuestionProps) {
  const { answers, saveAnswer } = useActusContext();
  const answerIndex = answers.findIndex((answer) => answer.key === questionKey);
  const score = answers[answerIndex]?.score;
  const handleUpdateScore = (score:number) => saveAnswer(answerIndex, { key:questionKey, score });
  return (
    <div data-testid={`question-${questionKey}`} className="flex justify-between">
      <p className="text-left pr-8">{label}</p>
      <Rating selected={score} updateScore={handleUpdateScore} />
    </div>
  );
}
