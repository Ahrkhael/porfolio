"use client";

import { useState, useEffect, useRef } from "react";
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

export default function Accordion({ title, items }: AccordionData) {
  const [isOpen, setIsOpen] = useState(false);

  const divPlaceholder = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const divParent = useRef<HTMLDivElement>(null);

  const divElement = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  useEffect(() => {
    if (isOpen && divElement.current) {
      setHeight(divElement.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, selectedTech]);

  useEffect(() => {
    if (
      selectedTech &&
      divElement.current &&
      buttonRef.current &&
      divPlaceholder.current &&
      divParent.current
    ) {
      const container = divElement.current;

      const buttonElement = buttonRef.current;

      const y =
        container.getBoundingClientRect().top + // Distance to top of the screen - Container
        window.scrollY - // Scroll by the user
        buttonElement.offsetHeight - // Height of the button
        buttonElement.getBoundingClientRect().top - // Distance to top of the screen - Button
        divPlaceholder.current.offsetHeight; // Height of the div divPlaceholder
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [selectedTech]);

  const handleToggle = () => {
    setIsOpen((prev) => (prev === true ? false : true));
  };

  const handleSelectTech = (tech: TechItem) => {
    if (selectedTech && selectedTech.title === tech.title) {
      setSelectedTech(null);
      return;
    }
    setSelectedTech(tech);
  };

  return (
    <div ref={divParent} className="mx-5 md:mx-[5dvw] my-10 rounded-lg">
      <div
        ref={divPlaceholder}
        className="h-[3dvh] bg-[var(--background)] sticky top-[7dvh] z-[5]"
        aria-hidden="true"
      />

      <button
        ref={buttonRef}
        onClick={handleToggle}
        className="sticky top-[10dvh] z-[5] w-full flex justify-between items-center px-[5dvw] py-6 bg-[var(--background-card)] text-[36px] border border-[var(--border-card)] font-medium hover:cursor-pointer hover:text-blue-400"
      >
        <h2 className="flex-1 text-center">{title}</h2>
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      <div
        style={{
          height: `${height}px`,
          transition: "height 0.5s ease",
        }}
        className={`overflow-hidden bg-[var(--background-card)]`}
      >
        <div ref={divElement}>
          {selectedTech ? (
            <>
              <div className="flex flex-col md:flex-row items-center px-6 gap-6">
                <button onClick={() => handleSelectTech(selectedTech)}>
                  <IconsWithTitle
                    src={selectedTech.iconSrc}
                    width={60}
                    height={60}
                    alt={selectedTech.iconAlt}
                    title={selectedTech.title}
                  />
                </button>
                <div className="flex-1 border border-[var(--border-card)] my-4 p-6 text-justify">
                  {selectedTech.descriptions.map((desc, i) => (
                    <p key={i} className="text-[18px] mb-2">
                      {desc}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-around gap-4">
                {items.map((tech, i) => {
                  return (
                    <button key={i} onClick={() => handleSelectTech(tech)}>
                      <IconsWithTitle
                        src={tech.iconSrc}
                        width={60}
                        height={60}
                        alt={tech.iconAlt}
                        title={tech.title}
                      />
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="flex flex-wrap items-center justify-around gap-4">
              {items.map((tech, i) => {
                return (
                  <button key={i} onClick={() => handleSelectTech(tech)}>
                    <IconsWithTitle
                      src={tech.iconSrc}
                      width={60}
                      height={60}
                      alt={tech.iconAlt}
                      title={tech.title}
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
