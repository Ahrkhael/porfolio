"use client";

import { useState } from "react";
import Accordion from "./Accordion";

type TechItem = {
  title: string;
  iconSrc: string;
  iconAlt: string;
  descriptions: string[];
};

type AccordionData = {
  title: string;
  items: TechItem[];
};

type AccordionListProps = {
  data: AccordionData[];
};

export default function AccordionList({ data }: AccordionListProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {data.map((techGroup, i) => (
        <Accordion
          key={i}
          title={techGroup.title}
          items={techGroup.items}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex((prev) => (prev === i ? null : i))}
        />
      ))}
    </>
  );
}
