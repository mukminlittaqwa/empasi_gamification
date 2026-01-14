import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-zinc-100 block max-w-5xl p-8 border-orange-300 rounded-3xl border-4 shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
