// components/quiz/SubQuestions.tsx
import { OptionCard } from "@/components/OptionCard";
import Card from "@/components/Card";
import { QuizQuestion } from "@/data/quizData";

type Props = {
  question: QuizQuestion;
  subIndex: number;
  selectedIndex: number | null;
  feedback: string | null;
  onSelect: (index: number) => void;
};

export function SubQuestions({
  question,
  subIndex,
  selectedIndex,
  feedback,
  onSelect,
}: Props) {
  const currentSub = question.subQuestions?.[subIndex];

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="w-full max-w-xs">
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-600 rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${
                ((subIndex + 1) / (question.subQuestions?.length || 1)) * 100
              }%`,
            }}
          />
        </div>
      </div>

      <Card className="border-none bg-orange-100 text-center w-full">
        <div className="flex flex-col items-center gap-3">
          <span className="inline-flex items-center justify-center px-3 py-1 text-xs font-bold leading-none text-white bg-orange-500 rounded-full">
            Usia: {currentSub?.age}
          </span>
          <p className="text-2xl font-bold">{currentSub?.question}</p>
          <p className="text-xs text-gray-700">{currentSub?.tip}</p>
        </div>
      </Card>

      <div className="w-full space-y-4">
        {currentSub?.options.map((opt, idx) => (
          <OptionCard
            key={idx}
            title={opt.title}
            isSelected={selectedIndex === idx}
            onSelect={() => onSelect(idx)}
          />
        ))}
      </div>

      {feedback && (
        <p
          className={`text-center font-medium ${
            feedback.includes("Benar") ? "text-green-600" : "text-red-600"
          }`}
        >
          {feedback}
        </p>
      )}
    </div>
  );
}
