import Accordion from "@/components/accordion/Accordion";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

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
    title: t("TechnologiesTitle"),
    description: t("TechnologiesDescription"),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/technologies`,
      languages: {
        en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/technologies`,
        es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/technologies`,
      },
    },
    openGraph: {
      title: t("TechnologiesTitle"),
      description: t("TechnologiesDescription"),
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/technologies`,
      siteName: t("Title"),
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/preview-image.png`,
          width: 796,
          height: 367,
          alt: `${process.env.PERSONAL_NAME} ${process.env.PERSONAL_SURNAME} Technologies`,
        },
      ],
      locale: "en",
      alternateLocale: "es",
      type: "website",
    },
  };
}

export default function TechnologiesPage() {
  const t = useTranslations("Technologies");

  const data = [
    {
      title: t("Front"),
      items: [
        {
          title: "Next",
          iconSrc: "/icons/nextjs.svg",
          iconAlt: "Next logo icon",
          descriptions: [
            t("Next.Description1"),
            t("Next.Description2"),
            t("Next.Description3"),
          ],
        },
        {
          title: "React",
          iconSrc: "/icons/react.svg",
          iconAlt: "React logo icon",
          descriptions: [
            t("React.Description1"),
            t("React.Description2"),
            t("React.Description3"),
          ],
        },
        {
          title: "JavaScript",
          iconSrc: "/icons/javascript.svg",
          iconAlt: "JavaScript logo icon",
          descriptions: [
            t("Javascript.Description1"),
            t("Javascript.Description2"),
            t("Javascript.Description3"),
          ],
        },
        {
          title: "HTML",
          iconSrc: "/icons/html.svg",
          iconAlt: "HTML logo icon",
          descriptions: [t("HTML.Description1"), t("HTML.Description2")],
        },
        {
          title: "CSS",
          iconSrc: "/icons/css.svg",
          iconAlt: "CSS logo icon",
          descriptions: [
            t("CSS.Description1"),
            t("CSS.Description2"),
            t("CSS.Description3"),
          ],
        },
      ],
    },
    {
      title: t("Back"),
      items: [
        {
          title: "Ruby",
          iconSrc: "/icons/ruby.svg",
          iconAlt: "Ruby icon",
          descriptions: [
            t("Ruby.Description1"),
            t("Ruby.Description2"),
            t("Ruby.Description3"),
          ],
        },
        {
          title: "PHP",
          iconSrc: "/icons/php.svg",
          iconAlt: "PHP icon",
          descriptions: [
            t("PHP.Description1"),
            t("PHP.Description2"),
            t("PHP.Description3"),
          ],
        },
        {
          title: "Java",
          iconSrc: "/icons/java.svg",
          iconAlt: "Java icon",
          descriptions: [t("Java.Description1"), t("Java.Description2")],
        },
        {
          title: "PostgreSQL",
          iconSrc: "/icons/postgresql.svg",
          iconAlt: "PostgreSQL icon",
          descriptions: [
            t("PostgreSQL.Description1"),
            t("PostgreSQL.Description2"),
          ],
        },
        {
          title: "MySQL",
          iconSrc: "/icons/mysql.svg",
          iconAlt: "MySQL icon",
          descriptions: [t("MySQL.Description1"), t("MySQL.Description2")],
        },
      ],
    },
    {
      title: t("Other"),
      items: [
        {
          title: "C#",
          iconSrc: "/icons/csharp.svg",
          iconAlt: "C sharp icon",
          descriptions: [t("Csharp.Description1"), t("Csharp.Description2")],
        },
        {
          title: "Python",
          iconSrc: "/icons/python.svg",
          iconAlt: "Python icon",
          descriptions: [t("Python.Description1"), t("Python.Description2")],
        },
        {
          title: "Git",
          iconSrc: "/icons/git.svg",
          iconAlt: "Git icon",
          descriptions: [t("Git.Description1"), t("Git.Description2")],
        },
      ],
    },
  ];

  return (
    <main className="my-[7dvh] py-5">
      {data.map((techGroup, i) => {
        return (
          <Accordion key={i} title={techGroup.title} items={techGroup.items} />
        );
      })}
    </main>
  );
}
