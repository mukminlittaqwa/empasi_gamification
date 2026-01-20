import React from "react";

interface FooterBrandProps {
  className?: string;
}

export const FooterBrand = ({ className = "" }: FooterBrandProps) => {
  return (
    <div className={`py-2 text-center px-2 ${className}`}>
      <div className="flex items-center justify-center gap-2 mb-2 opacity-20">
        <div className="h-px w-8 bg-gray-400" />
        <div className="w-1 h-1 bg-orange-400 rounded-full" />
        <div className="h-px w-8 bg-gray-400" />
      </div>

      <p className="text-[10px] text-gray-400 uppercase tracking-[0.25em] font-bold leading-relaxed">
        By TNA & Taqwa <br className="block sm:hidden" />
        <span className="text-orange-300/60 mx-1 hidden sm:inline">•</span>
        Edition 2026
      </p>

      <div className="mt-4 w-12 h-1 bg-gray-200/50 rounded-full mx-auto sm:hidden" />
    </div>
  );
};
