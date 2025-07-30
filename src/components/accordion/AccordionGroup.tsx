"use client";

import { useState, useRef, useEffect } from "react";
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
  const [selectedTech, setSelectedTech] = useState<{
    groupIndex: number;
    techIndex: number;
  } | null>(null);

  const contentRef = useRef<HTMLDivElement>(null);
  const divTechNoSelected = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (openIndex === null) {
      setHeight(0);
    } else {
      if (contentRef.current) {
        const newHeight = contentRef.current.scrollHeight;
        console.log(newHeight);
        setHeight((prev) => (prev !== newHeight ? newHeight : prev));
      } else if (divTechNoSelected.current) {
        const newHeight = divTechNoSelected.current.scrollHeight;
        console.log(newHeight);
        setHeight((prev) => (prev !== newHeight ? newHeight : prev));
      }
    }
  }, [openIndex, selectedTech]);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleSelectTech = (groupIndex: number, techIndex: number) => {
    setSelectedTech((prev) =>
      prev?.groupIndex === groupIndex && prev.techIndex === techIndex
        ? null
        : { groupIndex, techIndex }
    );
  };

  return (
    <>
      {data.map((section, groupIndex) => {
        const selected =
          selectedTech?.groupIndex === groupIndex
            ? section.items[selectedTech.techIndex]
            : null;

        const otherTech = section.items.filter(
          (_, i) => i !== selectedTech?.techIndex
        );

        return (
          <Accordion
            key={groupIndex}
            title={section.title}
            isOpen={openIndex === groupIndex}
            height={height}
            onToggle={() => handleToggle(groupIndex)}
          >
            {selected ? (
              <div
                ref={contentRef}
                className="flex flex-col gap-6 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <IconsWithTitle
                    src={selected.iconSrc}
                    width={60}
                    height={60}
                    alt={selected.iconAlt}
                    title={selected.title}
                  />
                  <div className="flex-1 border border-[var(--border-card)] m-4 p-6 text-justify">
                    {selected.descriptions.map((desc, i) => (
                      <p key={i} className="text-[18px] mb-2">
                        {desc}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-around gap-4">
                  {otherTech.map((tech, techIndex) => {
                    const actualIndex = section.items.indexOf(tech);
                    return (
                      <button
                        key={techIndex}
                        onClick={() =>
                          handleSelectTech(groupIndex, actualIndex)
                        }
                      >
                        <IconsWithTitle
                          src={tech.iconSrc}
                          width={50}
                          height={50}
                          alt={tech.iconAlt}
                          title={tech.title}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div
                ref={divTechNoSelected}
                className="flex flex-wrap justify-around gap-4"
              >
                {section.items.map((tech, techIndex) => (
                  <button
                    key={techIndex}
                    onClick={() => handleSelectTech(groupIndex, techIndex)}
                  >
                    <IconsWithTitle
                      src={tech.iconSrc}
                      width={50}
                      height={50}
                      alt={tech.iconAlt}
                      title={tech.title}
                    />
                  </button>
                ))}
              </div>
            )}
          </Accordion>
        );
      })}
    </>
  );
}
