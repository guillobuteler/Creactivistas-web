import { useState } from "react";
import ActusFormQuestion from "./actus.form.question";

type ActusFormQuestionGroupProps = {
  id: string;
  label: string;
};
export default function ActusFormQuestionGroup({
  id,
  label,
}: ActusFormQuestionGroupProps) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex flex-col gap-2">
      <ActusFormQuestion id="bla" label="Lorem Ipsum doler sit amet" />
      <ActusFormQuestion id="bla2" label="Lorem Ipsum doler sit amet" />
    </div>
  );
}
