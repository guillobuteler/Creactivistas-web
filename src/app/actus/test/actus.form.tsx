import ActusFormQuestion from "./actus.form.question";

export default function ActusForm() {
  // Implement form in 4 steps : 40 question, 5 groups of 2 per step
  return (
    <div data-testid="test-form" className="flex flex-col gap-4 border border-cyan-400 rounded p-4">
      <h1 className="flex text-2xl text-teal-700 font-semibold tracking-wide pb-2">Prefiero:</h1>
      <ActusFormQuestion id="bla" label="Lorem Ipsum doler sit amet"/>
      <ActusFormQuestion id="bla2" label="Lorem Ipsum doler sit amet"/>
      <hr className="border"/>
    </div>
  );
}
