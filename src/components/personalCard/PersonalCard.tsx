import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useTranslations } from "next-intl";

type PersonalCardProps = {
  name: string;
  surname: string;
  job: string;
  email?: string;
  phone?: string;
  linkedIn: string;
  gitHub: string;
  imageUrl: string;
  imageAlt?: string;
  blurDataURL?: string;
  aspectRatio?: string;
  borderRadius?: "none" | "md" | "lg" | "xl" | "2xl" | "full";
};

export default function PersonalCard({
  name,
  surname,
  job,
  email,
  phone,
  linkedIn,
  gitHub,
  imageUrl,
  imageAlt = "",
  blurDataURL = "",
  aspectRatio = "aspect-[4/3]",
  borderRadius = "xl",
}: PersonalCardProps) {
  // Mapeo del valor prop a clase Tailwind
  const borderRadiusClass = {
    none: "rounded-none",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
  }[borderRadius];

  const t = useTranslations("ContactData");

  return (
    <>
      <div className={clsx("min-w-0 lg:pl-20 md:pl-10")}>
        <h1 className="text-[2.5rem] font-bold">{name}</h1>
        <h2 className="text-[2.5rem] font-bold mb-2">{surname}</h2>
        <p className="text-[1.75rem] my-2">{job}</p>
        <p className="my-2 flex flex-wrap justify-center md:justify-start gap-x-1">
          <span>{t("Email")}</span>
          <span className="break-all">{email}</span>
        </p>
        <p className="my-2">{t("Phone") + phone}</p>
        <div
          className="
          flex flex-col justify-around gap-2 m-4
          md:flex-row md:justify-start md:gap-4 md:m-0 md:my-4
         "
        >
          <p>{t("Social")}: </p>

          <div className="flex justify-center gap-4">
            <Link
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-blue-400 md:text-gray-300 hover:text-blue-600 transition-colors duration-200 mx-[20px]"
              >
                <path d="M20.45 20.45h-3.554v-5.568c0-1.327-.027-3.036-1.848-3.036-1.848 0-2.132 1.445-2.132 2.938v5.666H9.361V9h3.413v1.561h.05c.476-.9 1.637-1.848 3.368-1.848 3.6 0 4.267 2.368 4.267 5.448v6.284zM5.337 7.433c-1.144 0-2.07-.926-2.07-2.07s.926-2.07 2.07-2.07 2.07.926 2.07 2.07-.926 2.07-2.07 2.07zM7.12 20.45H3.553V9H7.12v11.45zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.229.792 24 1.771 24h20.451C23.205 24 24 23.229 24 22.277V1.723C24 .771 23.205 0 22.225 0z" />
              </svg>
            </Link>

            <Link
              href={gitHub}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-blue-400 md:text-gray-300 hover:text-blue-600 transition-colors duration-200"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.204.084 1.837 1.236 1.837 1.236 1.07 1.832 2.807 1.303 3.492.996.107-.776.418-1.303.762-1.603-2.665-.3-5.467-1.334-5.467-5.932 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.403 1.018.004 2.046.137 3.006.403 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.874.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.63-5.48 5.922.43.37.823 1.096.823 2.21 0 1.596-.015 2.883-.015 3.273 0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "relative max-w-[300px] w-[60dvw] my-4 md:my-0",
          aspectRatio
        )}
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          placeholder={blurDataURL ? "blur" : "empty"}
          blurDataURL={blurDataURL}
          className={clsx("object-cover", borderRadiusClass)}
          sizes="(max-width: 768px) 60dvw, 300px"
        />
      </div>
    </>
  );
}
