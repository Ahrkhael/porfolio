import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { getTranslations } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    title: {
      template: `%s | ${t("Title")}`,
      default: t("Title"),
    },
    description: t("Description"),
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}`,
      languages: {
        en: `${process.env.NEXT_PUBLIC_BASE_URL}/en`,
        es: `${process.env.NEXT_PUBLIC_BASE_URL}/es`,
      },
    },
    openGraph: {
      title: t("Title"),
      description: t("Description"),
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}`,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Google Site Verification Key
  const googleMetadata = process.env.GOOGLE_METADATA_KEY;

  // Ensure that the incoming `locale` is valid
  const locale = (await params).locale;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <meta name="google-site-verification" content={googleMetadata} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
