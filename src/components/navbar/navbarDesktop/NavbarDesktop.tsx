import React, { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LangSelector from "@/components/langSelector/LangSelector";

const NavbarDesktop: FC = () => {
  const t = useTranslations("Navbar");

  return (
    <nav className="w-full h-full">
      <div className="h-full flex gap-x-20 justify-center items-center">
        <Link href="/" className="hover:text-(--font-color-menu-secondary)">
          {t("Home")}
        </Link>
        <Link
          href="/about"
          className="hover:text-(--font-color-menu-secondary)"
        >
          {t("About")}
        </Link>
        <Link
          href="/projects"
          className="hover:text-(--font-color-menu-secondary)"
        >
          {t("Projects")}
        </Link>

        <LangSelector />
      </div>
    </nav>
  );
};

export default NavbarDesktop;
