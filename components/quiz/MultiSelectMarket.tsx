import { MarketItem } from "@/components/MarketItem";
import { QuizQuestion } from "@/data/quizData";

type Props = {
  question: QuizQuestion;
  selectedIndices: number[];
  onToggle: (index: number) => void;
};

export function MultiSelectMarket({
  question,
  selectedIndices,
  onToggle,
}: Props) {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {question.marketItems?.map((item, idx) => (
          <MarketItem
            key={idx}
            emoji={item.emoji}
            name={item.name}
            isSelected={selectedIndices.includes(idx)}
            onClick={() => onToggle(idx)}
          />
        ))}
      </div>
      <div className="flex justify-between items-center bg-gray-200 rounded-2xl p-4">
        <div>
          <p className="text-xs">Keranjang Belanja</p>
          <p className="text-lg font-bold text-orange-600">
            {selectedIndices.length} / {question.maxSelections || 5}
          </p>
        </div>
        <p className="text-sm text-gray-500">
          Pilih tepat {question.maxSelections || 5} item sehat
        </p>
      </div>
    </div>
  );
}
