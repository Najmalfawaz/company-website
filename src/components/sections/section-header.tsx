"use client";

import { useLocale } from "@/lib/i18n/locale-context";

interface SectionHeaderProps {
  title: string;
  variant?: "primary" | "secondary";
  showIcon?: boolean;
}

export function SectionHeader({
  title,
  variant = "primary",
  showIcon = true,
}: SectionHeaderProps) {
  const { direction } = useLocale();

  const bgColor = variant === "primary" ? "bg-[#0891b2]" : "bg-[#ea580c]";

  return (
    <div className="flex justify-center">
      <div
        className={`${bgColor} text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-lg`}
      >
        {showIcon && (
          <span className="w-6 h-6 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </span>
        )}
        <h2 className="text-lg md:text-xl font-bold whitespace-nowrap">
          {title}
        </h2>
        {showIcon && (
          <span className="w-6 h-6 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
          </span>
        )}
      </div>
    </div>
  );
}
