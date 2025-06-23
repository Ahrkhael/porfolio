import { useTranslations } from "next-intl";
import Section from "@/components/section/Section";

export default function ProjectsPage() {
  const t = useTranslations("Projects");

  return (
    <main className="py-[7dvh]">
      <Section title={t("Title")}>Asd</Section>
    </main>
  );
}
