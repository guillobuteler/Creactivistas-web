import Rating from "@/components/rating";
import { useActusContext } from "@/app/actus/actus.context";
import { QuestionKey } from "../mbti.types";

type FormQuestionProps = {
  questionKey: QuestionKey;
  label: string;
}
export default function FormQuestion({questionKey, label}:FormQuestionProps) {
  const { answers, setAnswers } = useActusContext();
  const handleUpdateScore = (score:number) => {
    answers[answerIndex] = { key:questionKey, score };
    return setAnswers([...answers]);
  }
  let answerIndex = answers.findIndex((answer) => answer.key === questionKey);
  const score = answers[answerIndex]?.score;
  return (
    <div data-testid={`question-${questionKey}`} className="flex justify-between">
      <p className="text-left pr-8">{label}</p>
      <Rating selected={score} updateScore={handleUpdateScore} />
    </div>
  );
}
