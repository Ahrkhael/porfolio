import { useTranslations } from "next-intl";
import StudiesCard from "@/components/studiesCard/StudiesCard";
import ExperienceCard from "@/components/experienceCard/ExperienceCard";
import Section from "@/components/section/Section";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  const tExperience = useTranslations("Experience");
  const tStudies = useTranslations("Studies");

  return (
    <main className="py-[7dvh]">
      <Section title={t("AboutMyself.Title")}>
        <p className="text-[20px] text-center my-2 px-6 md:px-20">
          {t("AboutMyself.Description")}
        </p>
        <p className="text-[20px] text-center my-2 px-6 md:px-20">
          {t("AboutMyself.Description2")}
        </p>
        <p className="text-[20px] text-center my-2 px-6 md:px-20">
          {t("AboutMyself.Description3")}
        </p>
        <p className="text-[20px] text-center my-2 px-6 md:px-20">
          {t("AboutMyself.Description4")}
        </p>
      </Section>

      <Section title={tExperience("Title")}>
        <ExperienceCard
          job={tExperience("1.Job")}
          company={tExperience("1.Company")}
          description={tExperience("1.Description")}
          dates={tExperience("1.Dates")}
          link={tExperience("1.Link")}
        />
      </Section>

      <Section title={tStudies("Title")}>
        <div className="flex flex-col md:flex-row flex-wrap gap-[10px] justify-around items-center">
          <StudiesCard
            title={tStudies("1.Certificate")}
            institution={tStudies("1.Institution")}
            dates={tStudies("1.Dates")}
            link={tStudies("1.Link")}
          />
          <StudiesCard
            title={tStudies("2.Certificate")}
            institution={tStudies("2.Institution")}
            dates={tStudies("2.Dates")}
            link={tStudies("2.Link")}
          />
          <StudiesCard
            title={tStudies("3.Certificate")}
            institution={tStudies("3.Institution")}
            dates={tStudies("3.Dates")}
            link={tStudies("3.Link")}
          />
        </div>
      </Section>
    </main>
  );
}
