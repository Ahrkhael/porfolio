import React, { FC } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const NavbarDesktop: FC = () => {
  const t = useTranslations("Navbar");

  return (
    <nav>
      <div className="flex gap-x-20">
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
      </div>
    </nav>
  );
};

export default NavbarDesktop;
