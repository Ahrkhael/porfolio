import { useTranslations } from "next-intl";
import Card from "@/components/card/Card";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main className="py-[7dvh] px-[5dvw]">
      <Card
        title={t("Personal Card Title")}
        description={t("Personal Card Description")}
        imageUrl="/images/foto-cv.jpg"
        imageAlt="Foto CV"
        imagePosition="right"
        aspectRatio="aspect-square"
        borderRadius="full"
      />
    </main>
  );
}
