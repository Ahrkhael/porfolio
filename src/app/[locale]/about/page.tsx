import { useTranslations } from "next-intl";
import StudiesCard from "@/components/studiesCard/StudiesCard";
import ExperienceCard from "@/components/experienceCard/ExperienceCard";
import Section from "@/components/section/Section";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateStaticParams() {
  return ["en", "es"].map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;

  const t = await getTranslations({
    locale: locale,
    namespace: "Metadata",
  });

  return {
    title: t("AboutTitle"),
    description: t("AboutDescription"),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      languages: {
        en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/about`,
        es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/about`,
      },
    },
    openGraph: {
      title: t("AboutTitle"),
      description: t("AboutDescription"),
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/about`,
      siteName: t("Title"),
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/preview-image.png`,
          width: 796,
          height: 367,
          alt: `${process.env.PERSONAL_NAME} ${process.env.PERSONAL_SURNAME} About`,
        },
      ],
      locale: "en",
      alternateLocale: "es",
      type: "website",
    },
  };
}

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
