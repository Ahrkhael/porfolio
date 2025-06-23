import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const tNavbar = useTranslations("Navbar");
  const tContact = useTranslations("ContactData");

  // Personal data
  //const name = process.env.PERSONAL_NAME || "name";
  //const surname = process.env.PERSONAL_SURNAME || "surname";
  const email = process.env.PERSONAL_EMAIL || "email";
  const phone = process.env.PERSONAL_PHONE || "phone";
  const linkedIn = process.env.PERSONAL_LINKEDIN || "linkedin";
  const github = process.env.PERSONAL_GITHUB || "github";

  return (
    <footer className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-30 py-10 bg-(--background-footer-rgb)">
      <div className="col-span-1 flex flex-col px-[4dvw]">
        <Link
          href="/"
          className="font-bold mb-2 hover:text-(--font-color-menu-secondary)"
        >
          {tNavbar("Home")}
        </Link>

        <Link
          href="/about"
          className="font-bold mb-2 hover:text-(--font-color-menu-secondary)"
        >
          {tNavbar("About")}
        </Link>

        <Link
          href="/technologies"
          className="font-bold mb-2 hover:text-(--font-color-menu-secondary)"
        >
          {tNavbar("Technologies")}
        </Link>

        <Link
          href="/projects"
          className="font-bold mb-2 hover:text-(--font-color-menu-secondary)"
        >
          {tNavbar("Projects")}
        </Link>
      </div>

      <div className="col-span-2 flex flex-col px-[4dvw]">
        <h3 className="font-bold mb-2">{tContact("Contact")}</h3>
        <ul className="space-y-1">
          <li className="mb-2">
            <span className="font-semibold">{tContact("Email")}</span>
            <span className="cursor-text select-all">{email}</span>
          </li>
          <li className="mb-2">
            <span className="font-semibold">{tContact("Phone")}</span>
            <span className="cursor-text select-all">{phone}</span>
          </li>
        </ul>
      </div>

      <div className="col-span-1 px-[4dvw]">
        <h3 className="font-bold mb-2">{tContact("Social")}</h3>
        <ul className="space-y-1">
          <li className="mb-2">
            <Link
              href={github}
              className="hover:text-(--font-color-menu-secondary)"
            >
              GitHub
            </Link>
          </li>
          <li className="mb-2">
            <Link
              href={linkedIn}
              className="hover:text-(--font-color-menu-secondary)"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
