import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en`,
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/about`,
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/about`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/technologies`,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/technologies`,
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/technologies`,
        },
      },
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
      alternates: {
        languages: {
          en: `${process.env.NEXT_PUBLIC_BASE_URL}/en/projects`,
          es: `${process.env.NEXT_PUBLIC_BASE_URL}/es/projects`,
        },
      },
    },
  ];
}
