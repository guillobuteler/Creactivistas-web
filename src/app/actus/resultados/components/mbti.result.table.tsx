type DetailsTableProps = {
  result: string;
};

export default function MBTIResult({ result }: DetailsTableProps) {
  return (
    <table className="border border-zinc-700 rounded w-11/12 md:w-9/12 mt-4">
      <thead>
        <tr>
          <th
            className="bg-zinc-500 text-white font-light p-4 text-left border-b-white border-b"
          >
            Tu tipo de preferencias MBTI
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            className="bg-slate-700 p-8 text-center text-white font-serif text-6xl tracking-widest"
          >
            {result}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
