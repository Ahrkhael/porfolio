"use client";

import { useState } from "react";
import Accordion from "./Accordion";
import IconsWithTitle from "../iconsWithTitle/IconsWithTitle";

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

export default function AccordionGroup({ data }: { data: AccordionData[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {data.map((section, index) => (
        <Accordion
          key={index}
          title={section.title}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
          className="grid grid-cols-6 place-items-center gap-x-10 gap-y-20"
        >
          {section.items.map((tech, idx) => (
            <div className="contents" key={idx}>
              <div className="col-span-1">
                <IconsWithTitle
                  src={tech.iconSrc}
                  width={50}
                  height={50}
                  alt={tech.iconAlt}
                  title={tech.title}
                />
              </div>
              <div className="col-span-5 w-full h-full text-justify">
                {tech.descriptions.map((desc, dIdx) => (
                  <p key={dIdx} className="text-[20px] my-2 px-6 md:pr-20">
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </Accordion>
      ))}
    </>
  );
}
