import { Star } from "lucide-react";

type XpHeaderProps = {
  xp: number;
  level: number;
  progressPercentage: number;
};

export function XpHeader({ xp, level, progressPercentage }: XpHeaderProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="rounded-2xl bg-yellow-300 p-3">
        <Star className="text-yellow-700" size={28} />
      </div>

      <div className="flex flex-col items-start min-w-20">
        <div className="text-sm text-gray-600">SKOR XP</div>
        <div className="text-xl font-bold">{xp}</div>
      </div>

      <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <div className="font-bold text-xl text-orange-500 min-w-20 text-right">
        Level {level}
      </div>
    </div>
  );
}
