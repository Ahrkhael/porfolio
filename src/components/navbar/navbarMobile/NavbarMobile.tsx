import React, { FC } from "react";
import ToggleMenu from "./ToggleMenu";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LangSelector from "@/components/langSelector/LangSelector";
import DownloadFile from "@/components/downloadFile/DownloadFile";

const NavbarMobile: FC = () => {
  const t = useTranslations("Navbar");

  return (
    <nav className="w-full relative flex items-center justify-between z-20">
      {/* Download CV to the left */}
      <div className="ml-4">
        <DownloadFile title={t("DownloadCV")} />
      </div>

      {/* Menu centered */}
      <div className="h-full flex flex-1 justify-center items-center">
        <ToggleMenu>
          <Link href="/" className="w-full py-2">
            {t("Home")}
          </Link>
          <Link href="/about" className="w-full py-2">
            {t("About")}
          </Link>
          <Link href="/technologies" className="w-full py-2">
            {t("Technologies")}
          </Link>
          <Link href="/projects" className="w-full py-2">
            {t("Projects")}
          </Link>
        </ToggleMenu>
      </div>

      {/* LangSelector to the right */}
      <LangSelector />
    </nav>
  );
};

export default NavbarMobile;
