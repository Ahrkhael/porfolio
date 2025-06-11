import { useTranslations } from "next-intl";
import Section from "@/components/section/Section";
import PersonalCard from "@/components/personalCard/PersonalCard";
import ExperienceCard from "@/components/experienceCard/ExperienceCard";
import TechnologiesCard from "@/components/technologiesCard/TechnologiesCard";

export default function HomePage() {
  const tPersonalInfo = useTranslations("PersonalInfo");
  const tExperience = useTranslations("Experience");
  const tTechnologies = useTranslations("Technologies");

  // Personal data
  const name = process.env.PERSONAL_NAME || "name";
  const surname = process.env.PERSONAL_SURNAME || "surname";
  const email = process.env.PERSONAL_EMAIL || "email";
  const phone = process.env.PERSONAL_PHONE || "phone";
  const linkedIn = process.env.PERSONAL_LINKEDIN || "linkedin";
  const github = process.env.PERSONAL_GITHUB || "github";

  return (
    <main className="py-[7dvh] px-[5dvw]">
      <Section className="flex-row items-center h-[450px] my-10 px-60 py-20 gap-6">
        <PersonalCard
          name={name}
          surname={surname}
          email={email}
          phone={phone}
          linkedIn={linkedIn}
          gitHub={github}
          job={tPersonalInfo("PersonalJob")}
          imageUrl="/images/foto-cv.jpg"
          imageAlt={tPersonalInfo("PhotoAlt")}
          aspectRatio="aspect-square"
          borderRadius="full"
        />
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

      <Section title={tTechnologies("Title")}>
        <TechnologiesCard
          front={tTechnologies("Front")}
          back={tTechnologies("Back")}
          other={tTechnologies("Other")}
        />
      </Section>
    </main>
  );
}
