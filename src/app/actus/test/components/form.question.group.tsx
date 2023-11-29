import FormQuestion from "./form.question";
import { Question } from "../mbti.types";

type FormQuestionGroupProps = {
  questions: Question[];
};
export default function FormQuestionGroup({
  questions,
}: FormQuestionGroupProps) {
  return (
    <div className="flex flex-col gap-4">
      {questions?.map((question, index) => <FormQuestion key={question.key} questionKey={question.key} label={question.label} />)}
    </div>
  );
}
