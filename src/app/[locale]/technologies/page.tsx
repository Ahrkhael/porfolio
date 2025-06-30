import AccordionGroup from "@/components/accordion/AccordionGroup";
import { useTranslations } from "next-intl";

export default function TechnologiesPage() {
  const t = useTranslations("Technologies");

  const data = [
    {
      title: t("Front"),
      items: [
        {
          title: "Next",
          iconSrc: "/icons/nextjs.svg",
          iconAlt: "Next logo icon",
          descriptions: [
            t("Next.Description1"),
            t("Next.Description2"),
            t("Next.Description3"),
          ],
        },
        {
          title: "React",
          iconSrc: "/icons/react.svg",
          iconAlt: "React logo icon",
          descriptions: [
            t("React.Description1"),
            t("React.Description2"),
            t("React.Description3"),
          ],
        },
        {
          title: "JavaScript",
          iconSrc: "/icons/javascript.svg",
          iconAlt: "JavaScript logo icon",
          descriptions: [
            t("Javascript.Description1"),
            t("Javascript.Description2"),
            t("Javascript.Description3"),
          ],
        },
        {
          title: "HTML",
          iconSrc: "/icons/html.svg",
          iconAlt: "HTML logo icon",
          descriptions: [t("HTML.Description1"), t("HTML.Description2")],
        },
        {
          title: "CSS",
          iconSrc: "/icons/css.svg",
          iconAlt: "CSS logo icon",
          descriptions: [
            t("CSS.Description1"),
            t("CSS.Description2"),
            t("CSS.Description3"),
          ],
        },
      ],
    },
    {
      title: t("Back"),
      items: [
        {
          title: "Ruby",
          iconSrc: "/icons/ruby.svg",
          iconAlt: "Ruby icon",
          descriptions: ["Ruby description..."],
        },
      ],
    },
    {
      title: t("Other"),
      items: [
        {
          title: "C#",
          iconSrc: "/icons/csharp.svg",
          iconAlt: "C sharp icon",
          descriptions: ["C# description..."],
        },
      ],
    },
  ];

  return (
    <main className="my-[7dvh] py-5">
      <AccordionGroup data={data} />
    </main>
  );
}
