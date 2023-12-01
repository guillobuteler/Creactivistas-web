import { mbtiScale } from "../../mbti.types";
import { AxesDetails } from "../../mbti.data";
import { useActusContext } from "../../actus.context";
import React from "react";

type DetailsTableProps = {
  scale: mbtiScale;
};

export default function DetailsTable({ scale }: DetailsTableProps) {
  const { title, question, axes } = scale;
  const { answers, calculateAxisTotal } = useActusContext();
  return (
    <table className="border border-zinc-700 rounded w-11/12 md:w-9/12">
      <thead>
        <tr>
          <th
            colSpan={2}
            className="bg-zinc-700 text-white font-light p-4 text-left border-b-white border-b"
          >
            {question}
          </th>
        </tr>
        <tr>
          <th
            colSpan={2}
            className="bg-neutral-500 text-white font-light p-4 text-left"
          >
            {title}
          </th>
        </tr>
      </thead>
      <tbody>
        {axes.map((axis) => (
          <React.Fragment key={axis}>
            <tr className="h-12">
              <td>{AxesDetails[axis].title}</td>
              <td>
                {AxesDetails[axis].questionKeys.map((qKey, index) => (
                  <span key={index} className="p-4">
                    {answers.filter(({ key }) => key === qKey)[0].score}
                  </span>
                ))}
              </td>
            </tr>
            <tr className="h-12">
              <td className="bg-stone-200 font-bold">Total {axis}</td>
              <td className="bg-stone-200 font-bold">
                {calculateAxisTotal(axis)}
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}
