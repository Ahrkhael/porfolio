"use client";

import { ReactNode, useRef, useState, useEffect } from "react";

type AccordionProps = {
  title?: string;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

export default function Accordion({
  title,
  children,
  isOpen,
  onToggle,
}: AccordionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      const newHeight = isOpen ? contentRef.current.scrollHeight : 0;
      setHeight((prev) => (prev !== newHeight ? newHeight : prev));
    }
  }, [isOpen, children]);

  return (
    <div className="mx-5 md:mx-[5dvw] my-10 rounded-lg">
      <div
        className="h-[3dvh] bg-[var(--background)] sticky top-[7dvh] z-[5]"
        aria-hidden="true"
      />

      <button
        onClick={onToggle}
        className="sticky top-[10dvh] z-[5] w-full flex justify-between items-center px-[5dvw] py-6 bg-[var(--background-card)] text-[36px] border border-[var(--border-card)] font-medium hover:cursor-pointer hover:text-blue-400"
      >
        <h2 className="flex-1 text-center">{title}</h2>
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      <div
        ref={contentRef}
        style={{
          height: height,
          transition: "height 0.4s ease",
        }}
        className={`overflow-hidden bg-[var(--background-card)]`}
      >
        {children}
      </div>
    </div>
  );
}
