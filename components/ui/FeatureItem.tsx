import { LucideIcon } from "lucide-react";

type FeatureItemProps = {
  icon: LucideIcon;
  title: string;
};

export function FeatureItem({ icon: Icon, title }: FeatureItemProps) {
  return (
    <div className="flex items-center w-full bg-orange-200 text-white text-base font-semibold px-3 py-2 rounded-2xl shadow">
      <Icon className="mr-4 text-orange-400" size={28} />
      <p className="text-black">{title}</p>
    </div>
  );
}
