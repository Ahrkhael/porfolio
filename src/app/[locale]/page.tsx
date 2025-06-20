import { getTranslations } from "next-intl/server";
import { getBlurDataURL } from "@/utils/getBlurDataURL";
import Section from "@/components/section/Section";
import PersonalCard from "@/components/personalCard/PersonalCard";
import ExperienceCard from "@/components/experienceCard/ExperienceCard";
import TechnologiesCard from "@/components/technologiesCard/TechnologiesCard";
import ProjectCard from "@/components/projectCard/ProjectCard";
import StudiesCard from "@/components/studiesCard/StudiesCard";

export default async function HomePage() {
  const blurDataURLCV = await getBlurDataURL("/images/foto-cv.jpg");
  const blurDataURLChess = await getBlurDataURL("/images/project-chess.jpg");
  const blurDataURLTravelingApp = await getBlurDataURL(
    "/images/project-traveling-app.jpg"
  );

  const tPersonalInfo = await getTranslations("PersonalInfo");
  const tExperience = await getTranslations("Experience");
  const tTechnologies = await getTranslations("Technologies");
  const tProjects = await getTranslations("Projects");
  const tStudies = await getTranslations("Studies");

  // Personal data
  const name = process.env.PERSONAL_NAME || "name";
  const surname = process.env.PERSONAL_SURNAME || "surname";
  const email = process.env.PERSONAL_EMAIL || "email";
  const phone = process.env.PERSONAL_PHONE || "phone";
  const linkedIn = process.env.PERSONAL_LINKEDIN || "linkedin";
  const github = process.env.PERSONAL_GITHUB || "github";

  return (
    <main className="py-[7dvh]">
      <Section
        className="
          items-center justify-center gap-6 text-center
          md:flex-row  md:p-20 md:text-left
        "
      >
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
          blurDataURL={blurDataURLCV}
          aspectRatio="aspect-square"
          borderRadius="full"
        />
      </Section>

      <Section title={tProjects("Title")} className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10">
          <ProjectCard
            url="https://chess-three-alpha.vercel.app/"
            imageUrl="/images/project-chess.jpg"
            blurDataURL={blurDataURLChess}
            imagePosition="top"
          >
            <p className="my-2 font-bold text-[24px]">{tProjects("1.Title")}</p>
            <p>{tProjects("1.ShortDescription")}</p>
          </ProjectCard>
          <ProjectCard
            url="https://traveling-app-steel.vercel.app/"
            imageUrl="/images/project-traveling-app.jpg"
            blurDataURL={blurDataURLTravelingApp}
            imagePosition="top"
          >
            <p className="my-2 font-bold text-[24px]">{tProjects("2.Title")}</p>
            <p>{tProjects("2.ShortDescription")}</p>
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

      <Section title={tStudies("Title")} className="py-20">
        <div
          className="
        flex flex-col flex-wrap justify-around items-center gap-4
        md:flex-row
        "
        >
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
