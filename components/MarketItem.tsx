"use client";

type MarketItemProps = {
  emoji: string;
  name: string;
  isSelected: boolean;
  onClick: () => void;
};

export function MarketItem({
  emoji,
  name,
  isSelected,
  onClick,
}: MarketItemProps) {
  return (
    <div
      onClick={onClick}
      className={`
        p-2 gap-2 border-2 rounded-2xl flex flex-col items-center cursor-pointer transition-all duration-300
        ${
          isSelected
            ? "border-orange-500 bg-orange-100 text-orange-700"
            : "border-orange-300 bg-white hover:bg-orange-50"
        }
      `}
    >
      <p className="text-4xl">{emoji}</p>
      <p className="font-medium text-sm text-center">{name}</p>
    </div>
  );
}
