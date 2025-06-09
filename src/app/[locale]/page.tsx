import { useTranslations } from "next-intl";
import PersonalCard from "@/components/personalCard/PersonalCard";
import ExperienceCard from "@/components/experienceCard/ExperienceCard";
import TechnologiesCard from "@/components/technologiesCard/TechnologiesCard";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const tExperience = useTranslations("Experience");
  const tTechnologies = useTranslations("Technologies");

  // Personal data
  const name = process.env.PERSONAL_NAME || "Name";
  const surname = process.env.PERSONAL_SURNAME || "surname";
  const email = process.env.PERSONAL_EMAIL || "email";
  const phone = process.env.PERSONAL_PHONE || "phone";
  const linkedIn = process.env.PERSONAL_LINKEDIN || "linkedin";
  const github = process.env.PERSONAL_GITHUB || "linkedin";

  return (
    <main className="py-[7dvh] px-[5dvw]">
      <PersonalCard
        name={name}
        surname={surname}
        email={email}
        phone={phone}
        linkedIn={linkedIn}
        gitHub={github}
        job={t("PersonalJob")}
        imageUrl="/images/foto-cv.jpg"
        imageAlt="Foto CV"
        imagePosition="right"
        aspectRatio="aspect-square"
        borderRadius="full"
      />
      <ExperienceCard
        title={tExperience("Title")}
        job={tExperience("1.Job")}
        company={tExperience("1.Company")}
        description={tExperience("1.Description")}
        dates={tExperience("1.Dates")}
        link={tExperience("1.Link")}
      />
      <TechnologiesCard
        title={tTechnologies("Title")}
        front={tTechnologies("Front")}
        back={tTechnologies("Back")}
        other={tTechnologies("Other")}
      />
    </main>
  );
}
