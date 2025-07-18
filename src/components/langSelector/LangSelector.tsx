"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import useDropdown from "../../hooks/useDropdown";
import Image from "next/image";

const LangSelector = () => {
  const pathname = usePathname();
  const {
    isDropdownVisible,
    handleToggleDropdown,
    handleMouseEnter,
    handleMouseLeave,
    dropdownRef,
  } = useDropdown();

  const pathSegments = pathname.split("/");
  const currentLocale = pathSegments[1];
  const nonLocalizedPath = `/${pathSegments.slice(2).join("/")}`;

  const locales = ["en", "es"] as const;
  const flags: Record<(typeof locales)[number], string> = {
    en: "/flags/en.svg",
    es: "/flags/es.svg",
  };

  return (
    <div
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleToggleDropdown}
      className="relative h-full inline-block mr-4 p-4 md:p-3 md:cursor-pointer"
    >
      <p className="text-[24px]">🌍</p>

      <div
        className={`flex flex-col absolute -right-2 md:-right-4 top-full w-20 bg-(--background-navbar-rgb) rounded shadow transition-opacity duration-200
          ${isDropdownVisible ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        {locales.map((locale) => (
          <Link
            key={locale}
            href={`/${locale}${nonLocalizedPath}`}
            className={`flex justify-center items-center h-[50px] px-4 py-2 border border-(--dropdown-menu-border) hover:bg-(--background-navbar-hover-rgb) text-[18px] hover:text-(--font-color-menu-secondary) ${
              locale === currentLocale ? "pointer-events-none opacity-50" : ""
            }`}
            scroll={false}
          >
            <div className="w-5 h-3 relative mr-2">
              <Image
                src={flags[locale]}
                alt={locale}
                fill
                className="object-cover rounded-sm"
                sizes="20px"
              />
            </div>
            {locale.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LangSelector;
