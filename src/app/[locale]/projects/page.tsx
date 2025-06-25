import Section from "@/components/section/Section";
import ProjectCard from "@/components/projectCard/ProjectCard";
import { getTranslations } from "next-intl/server";
import { getBlurDataURL } from "@/utils/getBlurDataURL";
// import Link from "next/link";

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
          imageClassName="max-w-[500px] aspect-square"
          blurDataURL={blurDataURLChess}
          textClassName="text-justify px-10"
        >
          <p className="text-center my-2 font-bold text-[24px]">
            {t("1.Title")}
          </p>
          <p className="my-2">{t("1.ProjectDescription1")}</p>
          <p className="my-2">{t("1.ProjectDescription2")}</p>
          <p className="my-2">{t("1.ProjectDescription3")}</p>
          <ul className="mx-6">
            <li>{t("1.FunctionsList1")}</li>
            <li>{t("1.FunctionsList2")}</li>
            <li>{t("1.FunctionsList3")}</li>
            <li>{t("1.FunctionsList4")}</li>
            <li>{t("1.FunctionsList5")}</li>
            <li>{t("1.FunctionsList6")}</li>
          </ul>
        </ProjectCard>
      </Section>

      <Section className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-x-10 gap-y-20 py-20">
        <ProjectCard
          imageUrl="/images/project-traveling-app.jpg"
          imageAlt={t("2.ImageAlt")}
          imageClassName="max-w-[350px] aspect-square"
          blurDataURL={blurDataURLTravelingApp}
          textClassName="px-10"
        >
          <p className="my-2 font-bold text-[24px]">{t("2.Title")}</p>
          <p>{t("2.ShortDescription")}</p>
        </ProjectCard>
      </Section>
    </main>
  );
}
