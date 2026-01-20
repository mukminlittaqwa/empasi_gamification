import { LucideIcon } from "lucide-react";

type FeatureItemProps = {
  icon: LucideIcon;
  title: string;
  color?: string; // Menambahkan dukungan warna (opsional)
};

export function FeatureItem({
  icon: Icon,
  title,
  color = "text-orange-400",
}: FeatureItemProps) {
  return (
    <div className="flex items-center w-full bg-orange-50/50 text-base font-semibold px-4 py-3 rounded-2xl border border-orange-100/50 shadow-sm transition-transform active:scale-[0.98]">
      <div className={`${color} mr-4 flex items-center justify-center`}>
        <Icon size={24} strokeWidth={2.5} />
      </div>

      <p className="text-gray-700 text-sm md:text-base font-bold leading-tight">
        {title}
      </p>
    </div>
  );
}
