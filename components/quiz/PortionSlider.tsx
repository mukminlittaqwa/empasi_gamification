export type Portions = {
  karbo: number;
  prohe: number;
  pronab: number;
  lemak: number;
  sayurBuah: number;
};

type Props = {
  portions: Portions;
  setPortions: React.Dispatch<React.SetStateAction<Portions>>;
  status: { text: string; color: string; hint: string };
  totalPortion: number;
};

export function PortionSlider({
  portions,
  setPortions,
  status,
  totalPortion,
}: Props) {
  const items = [
    { key: "karbo", label: "Karbohidrat", emoji: "🍚" },
    { key: "prohe", label: "Protein Hewani", emoji: "🥩" },
    { key: "pronab", label: "Protein Nabati", emoji: "🌱" },
    { key: "lemak", label: "Lemak Tambahan", emoji: "🥑" },
    { key: "sayurBuah", label: "Sayur & Buah", emoji: "🥕🍎" },
  ];

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="w-full space-y-5">
        {items.map((item) => (
          <div key={item.key} className="flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between w-full px-2">
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-sm font-medium truncate">
                  {item.label}
                </span>
              </div>
              <span className="text-sm font-bold text-orange-600 min-w-12.5 text-right">
                {portions[item.key as keyof typeof portions]}%
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="50"
              step="1"
              value={portions[item.key as keyof typeof portions]}
              onChange={(e) =>
                setPortions((prev) => ({
                  ...prev,
                  [item.key]: Number(e.target.value),
                }))
              }
              className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-orange-500"
            />
          </div>
        ))}
      </div>

      <div className="w-full text-center font-medium text-base mt-2">
        Total:{" "}
        <span
          className={
            totalPortion === 100
              ? "text-green-600 font-bold"
              : "text-red-600 font-bold"
          }
        >
          {totalPortion}%
        </span>
      </div>

      <div className="flex flex-col items-center w-full bg-gray-200 rounded-2xl p-4 gap-1">
        <p className="text-sm">
          Status gizi:{" "}
          <span className={`font-bold ${status.color}`}>{status.text}</span>
        </p>
        {status.hint && (
          <p className="text-xs text-gray-600 italic text-center">
            {status.hint}
          </p>
        )}
      </div>
    </div>
  );
}
