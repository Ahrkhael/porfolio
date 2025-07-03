import React, { FC } from "react";
import ToggleMenu from "./ToggleMenu";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LangSelector from "@/components/langSelector/LangSelector";

const NavbarMobile: FC = () => {
  const t = useTranslations("Navbar");

  return (
    <nav className="w-full relative flex items-center justify-between z-20">
      {/* Espacio izquierdo para balancear el LangSelector */}
      <div className="w-19" />

      {/* Menú centrado */}
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

      {/* LangSelector a la derecha */}
      <LangSelector />
    </nav>
  );
};

export default NavbarMobile;
