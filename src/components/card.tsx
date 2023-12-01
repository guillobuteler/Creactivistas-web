type CardProps = {
  title?: string;
  children: React.ReactNode
};
export default function Card({ title, children }: CardProps) {
  return (
    <div className="relative flex w-full flex-col rounded-xl bg-slate-100 bg-clip-border text-gray-700 shadow-md">
      <div className="p-6 text-justify">
        {title &&(<h1 className="mb-2 block font-semibold text-lg leading-snug tracking-normal text-gray-900 antialiased">
          {title}
        </h1>)}
        {children}
      </div>
    </div>
  );
}
