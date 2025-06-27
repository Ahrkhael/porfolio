import { useTranslations } from "next-intl";
import Section from "@/components/section/Section";
import IconsWithTitle from "@/components/iconsWithTitle/IconsWithTitle";

export default function TechnologiesPage() {
  const t = useTranslations("Technologies");

  return (
    <main className="py-[7dvh]">
      <Section
        title={t("Front")}
        className="grid grid-cols-6 place-items-center gap-x-10 gap-y-20 py-20"
      >
        <div className="col-span-1">
          <IconsWithTitle
            src="/icons/nextjs.svg"
            width={50}
            height={50}
            alt="Next logo icon"
            title="Next"
          />
        </div>
        <div className="col-span-5 w-full h-full text-justify">
          <p className="text-[20px] my-2 px-6 md:pr-20">
            {t("Next.Description1")}
          </p>
          <p className="text-[20px] my-2 px-6 md:pr-20">
            {t("Next.Description2")}
          </p>
          <p className="text-[20px] my-2 px-6 md:pr-20">
            {t("Next.Description3")}
          </p>
        </div>

        <div className="col-span-1">
          <IconsWithTitle
            src="/icons/react.svg"
            width={50}
            height={50}
            alt="React logo icon"
            title="React"
          />
        </div>
        <div className="col-span-5 w-full h-full text-justify">
          <p className="text-[20px] my-2 px-6 md:pr-20">
            {t("React.Description1")}
          </p>
          <p className="text-[20px] my-2 px-6 md:pr-20">
            {t("React.Description2")}
          </p>
          <p className="text-[20px] my-2 px-6 md:pr-20">
            {t("React.Description3")}
          </p>
        </div>

        <div className="col-span-1">
          <IconsWithTitle
            src="/icons/javascript.svg"
            width={50}
            height={50}
            alt="Javascript logo icon"
            title="JavaScript"
          />
        </div>
        <div className="col-span-5 w-full h-full text-justify">
          <p className="text-[20px] my-2 px-6 md:pr-20">
            {t("Javascript.Description1")}
          </p>
          <p className="text-[20px] my-2 px-6 md:pr-20">
            {t("Javascript.Description2")}
          </p>
          <p className="text-[20px] my-2 px-6 md:pr-20">
            {t("Javascript.Description3")}
          </p>
        </div>

        <div className="col-span-1">
          <IconsWithTitle
            src="/icons/html.svg"
            width={50}
            height={50}
            alt="HTML logo icon"
            title="HTML"
          />
        </div>
        <div className="col-span-5 w-full h-full text-justify">
          <p className="text-[20px] my-2 px-6 md:pr-20">
            {t("HTML.Description1")}
          </p>
          <p className="text-[20px] my-2 px-6 md:pr-20">
            {t("HTML.Description2")}
          </p>
        </div>

        <div className="col-span-1">
          <IconsWithTitle
            src="/icons/css.svg"
            width={50}
            height={50}
            alt="CSS logo icon"
            title="CSS"
          />
        </div>
        <div className="col-span-5 w-full h-full text-justify">
          <p className="text-[20px] my-2 px-6 md:pr-20">
            {t("CSS.Description1")}
          </p>
          <p className="text-[20px] my-2 px-6 md:pr-20">
            {t("CSS.Description2")}
          </p>
          <p className="text-[20px] my-2 px-6 md:pr-20">
            {t("CSS.Description3")}
          </p>
        </div>
      </Section>

      <Section title={t("Back")}>Asd</Section>

      <Section title={t("Other")}>
        <div className="flex flex-col md:flex-row flex-wrap gap-[10px] justify-around items-center">
          asd
        </div>
      </Section>
    </main>
  );
}
