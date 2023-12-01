import { QuestionsGroup } from "../../mbti.types";
import FormQuestionGroup from "./form.question.group";

type FormStepProps = {
  questions: QuestionsGroup[];
};
export default function FormStep({ questions }: FormStepProps) {
  return (
    <div data-testid="step" className="flex flex-col">
      <h2 className="flex text-2xl text-teal-700 font-semibold tracking-wide pb-2">
        Prefiero:
      </h2>
      <div className="flex flex-col gap-5 justify-between">
        {questions?.map((questionGroup, index) => (
          <div key={index}>
            <FormQuestionGroup questions={questionGroup} />
            <hr className="mt-5" />
          </div>
        ))}
      </div>
    </div>
  );
}
