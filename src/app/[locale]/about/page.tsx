import { useTranslations } from "next-intl";
import StudiesCard from "@/components/studiesCard/StudiesCard";
import ExperienceCard from "@/components/experienceCard/ExperienceCard";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  return (
    <main className="py-[7dvh] px-[5dvw]">
      <div className="w-[80dvw] mx-auto my-3">
        <p className="text-[32px] text-center">{t("AboutMyself.Title")}</p>
        <p className="text-[20px] text-center my-2">
          {t("AboutMyself.Description")}
        </p>
        <p className="text-[20px] text-center my-2">
          {t("AboutMyself.Description2")}
        </p>
        <p className="text-[20px] text-center my-2">
          {t("AboutMyself.Description3")}
        </p>
        <p className="text-[20px] text-center my-2">
          {t("AboutMyself.Description4")}
        </p>
      </div>
      <div className="my-6">
        <p className="text-[36px] text-center my-2">{t("Experience.Title")}</p>
        <div className="flex place-content-between gap-[10dvw] justify-center">
          <ExperienceCard
            title={t("Experience.1.Job")}
            company={t("Experience.1.Company")}
            description={t("Experience.1.Description")}
            dates={t("Experience.1.Dates")}
            link={t("Experience.1.Link")}
          />
        </div>
      </div>
      <div className="my-6">
        <p className="text-[36px] text-center my-2">{t("Studies.Title")}</p>
        <div className="flex place-content-between gap-[10dvw] justify-center">
          <StudiesCard
            title={t("Studies.1.Certificate")}
            institution={t("Studies.1.Institution")}
            dates={t("Studies.1.Dates")}
            link={t("Studies.1.Link")}
          />
          <StudiesCard
            title={t("Studies.2.Certificate")}
            institution={t("Studies.2.Institution")}
            dates={t("Studies.2.Dates")}
            link={t("Studies.2.Link")}
          />
          <StudiesCard
            title={t("Studies.3.Certificate")}
            institution={t("Studies.3.Institution")}
            dates={t("Studies.3.Dates")}
            link={t("Studies.3.Link")}
          />
        </div>
      </div>
    </main>
  );
}
