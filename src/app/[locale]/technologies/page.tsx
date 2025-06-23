import { useTranslations } from "next-intl";
import Section from "@/components/section/Section";

export default function TechnologiesPage() {
  const t = useTranslations("Technologies");

  return (
    <main className="py-[7dvh]">
      <Section title={t("Front")}>
        <p className="text-[20px] text-center my-2 px-6 md:px-20">Asd</p>
        <p className="text-[20px] text-center my-2 px-6 md:px-20">Asd</p>
        <p className="text-[20px] text-center my-2 px-6 md:px-20">Ads</p>
        <p className="text-[20px] text-center my-2 px-6 md:px-20">Asd</p>
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
