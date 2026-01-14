import { OptionCard } from "@/components/OptionCard";
import { QuizQuestion } from "@/data/quizData";

type Props = {
  question: QuizQuestion;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
};

export function SingleSelectQuestion({
  question,
  selectedIndex,
  onSelect,
}: Props) {
  return (
    <div className="w-full space-y-4">
      {question.options?.map((opt, idx) => (
        <OptionCard
          key={idx}
          title={opt.title}
          info={opt.info}
          examples={opt.examples}
          isSelected={selectedIndex === idx}
          onSelect={() => onSelect(idx)}
        />
      ))}
    </div>
  );
}
