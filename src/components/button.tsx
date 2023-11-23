type CardProps = {
  text?: string;
  onClick: () => void;
};
export default function Button({ text, onClick }: CardProps) {
  return (
    <button
      type="button"
      className="select-none rounded-lg creactivistas-green py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-light="true"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
