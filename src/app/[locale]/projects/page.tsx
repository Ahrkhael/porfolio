import Section from "@/components/section/Section";
import ProjectCard from "@/components/projectCard/ProjectCard";
import { getTranslations } from "next-intl/server";
import { getBlurDataURL } from "@/utils/getBlurDataURL";
import Link from "next/link";

export default async function ProjectsPage() {
  const t = await getTranslations("Projects");
  const blurDataURLChess = await getBlurDataURL("/images/project-chess.jpg");
  const blurDataURLTravelingApp = await getBlurDataURL(
    "/images/project-traveling-app.jpg"
  );

  return (
    <main className="py-[7dvh]">
      <Section
        title={t("Title")}
        className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-x-10 gap-y-20 py-20"
      >
        <ProjectCard
          imageUrl="/images/project-chess.jpg"
          imageAlt={t("1.ImageAlt")}
          imageClassName="max-w-[350px] md:max-w-[500px] aspect-square"
          blurDataURL={blurDataURLChess}
          textClassName="text-justify px-10 md:pl-0"
        >
          <p className="text-center my-2 font-bold text-[24px]">
            {t("1.Title")}
          </p>
          <p className="my-2">{t("1.ProjectDescription1")}</p>
          <p className="my-2">{t("1.ProjectDescription2")}</p>
          <p className="my-2">{t("1.ProjectDescription3")}</p>
          <ul className="ml-6">
            <li>{t("1.FunctionsList1")}</li>
            <li>{t("1.FunctionsList2")}</li>
            <li>{t("1.FunctionsList3")}</li>
            <li>{t("1.FunctionsList4")}</li>
            <li>{t("1.FunctionsList5")}</li>
            <li>{t("1.FunctionsList6")}</li>
          </ul>

          <div className="flex justify-center mt-10 gap-20">
            <Link
              href="https://chess-three-alpha.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chess demo"
            >
              <span className="text-blue-400 hover:text-blue-600 transition-colors duration-200">
                Demo
              </span>
            </Link>

            <Link
              href="https://github.com/Ahrkhael/Chess"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub chess project"
            >
              <span className="text-blue-400 hover:text-blue-600 transition-colors duration-200">
                Github
              </span>
            </Link>
          </div>
        </ProjectCard>
      </Section>

      <Section className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-x-10 gap-y-20 py-20">
        <ProjectCard
          imageUrl="/images/project-traveling-app.jpg"
          imageAlt={t("2.ImageAlt")}
          imageClassName="max-w-[350px] md:max-w-[500px] aspect-square"
          blurDataURL={blurDataURLTravelingApp}
          textClassName="text-justify px-10 md:pl-0"
        >
          <p className="text-center my-2 font-bold text-[24px]">
            {t("2.Title")}
          </p>
          <p className="my-2">{t("2.ProjectDescription1")}</p>
          <p className="my-2">{t("2.ProjectDescription2")}</p>
          <p className="my-2">{t("2.ProjectDescription3")}</p>
          <p className="my-2">{t("2.ProjectDescription4")}</p>
          <ul className="ml-6">
            <li>{t("2.DependencyList1")}</li>
            <li>{t("2.DependencyList2")}</li>
            <li>{t("2.DependencyList3")}</li>
            <li>{t("2.DependencyList4")}</li>
          </ul>

          <div className="flex justify-center mt-10 gap-20">
            <Link
              href="https://traveling-app-steel.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Traveling app demo"
            >
              <span className="text-blue-400 hover:text-blue-600 transition-colors duration-200">
                Demo
              </span>
            </Link>

            <Link
              href="https://github.com/Ahrkhael/traveling_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub traveling app project"
            >
              <span className="text-blue-400 hover:text-blue-600 transition-colors duration-200">
                Github
              </span>
            </Link>
          </div>
        </ProjectCard>
      </Section>
    </main>
  );
}
