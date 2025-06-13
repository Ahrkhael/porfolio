import { useTranslations } from "next-intl";
import Section from "@/components/section/Section";
import PersonalCard from "@/components/personalCard/PersonalCard";
import ExperienceCard from "@/components/experienceCard/ExperienceCard";
import TechnologiesCard from "@/components/technologiesCard/TechnologiesCard";
import { ProjectCard } from "@/components/projectCard/ProjectCard";

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
    <main className="py-[7dvh]">
      <Section className="flex-row items-center h-[450px] gap-6">
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

      <Section title="Proyectos" className="py-20">
        <div className="flex flex-rox justify-around">
          <ProjectCard imageUrl="/images/project-chess.jpg" imagePosition="top">
            <p>Ajedrez</p>
          </ProjectCard>
          <ProjectCard
            imageUrl="/images/project-traveling-app.jpg"
            imagePosition="top"
          >
            <p>Traveling-app</p>
          </ProjectCard>
        </div>
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
