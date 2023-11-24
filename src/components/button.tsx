type CardProps = {
  title: string;
  onClick: () => void;
  dataTestId?: string;
};
export default function Button({ title, onClick, dataTestId }: CardProps) {
  return (
    <div>
    <button
      type="button"
      className="select-none rounded-lg bg-creactivistas-blue-light hover:bg-creactivistas-green py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-teal-500/20 transition-all hover:shadow-lg hover:shadow-teal-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-light="true"
      onClick={onClick}
      data-testid={dataTestId}
    >
      {title}
    </button></div>
  );
}
