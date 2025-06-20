import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  title?: string;
  className?: string;
};

export default function Section({
  children,
  title,
  className = "",
}: SectionProps) {
  return (
    <div className="my-10 py-6 px-[5dvw]">
      {title && <p className="text-[36px] text-center my-6">{title}</p>}
      <div
        className={`flex flex-col w-full py-10 bg-[var(--background-card)] border border-[var(--border-card)] ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
