// components/OptionCard.tsx
"use client";

type OptionCardProps = {
  title: string;
  info?: string;
  examples?: string;
  isSelected: boolean;
  onSelect: () => void;
};

export function OptionCard({
  title,
  info,
  examples,
  isSelected,
  onSelect,
}: OptionCardProps) {
  return (
    <div
      onClick={onSelect}
      className={`
        max-w-5xl border-orange-300 rounded-3xl border-2 shadow-xl
        flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300
        ${isSelected ? "bg-orange-500 text-white" : "bg-zinc-100"}
      `}
    >
      <p className="text-1xl font-medium">{title}</p>

      {isSelected ? (
        <>
          {info && <p className="text-sm mt-2 font-light">{info}</p>}
          {examples && <p className="text-sm mt-1 font-light">{examples}</p>}
        </>
      ) : (
        <p className="text-sm font-light mt-1">Ketuk untuk info</p>
      )}
    </div>
  );
}
