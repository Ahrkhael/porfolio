"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import useDropdown from "../../hooks/useDropdown";

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
  console.log(pathSegments);
  console.log(currentLocale);
  console.log(nonLocalizedPath);

  const locales = ["en", "es"] as const;
  const flags: Record<(typeof locales)[number], string> = {
    en: "🇬🇧",
    es: "🇪🇸",
  };

  return (
    <div
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleToggleDropdown}
      className="relative inline-block cursor-pointer"
    >
      <p className="text-[1.2rem]">🌍</p>

      <div
        className={`flex flex-col absolute -right-10 pt-[1.5dvh] w-28 bg-(--background-navbar-rgb) rounded shadow transition-opacity duration-200
          ${isDropdownVisible ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        {locales.map((locale) => (
          <Link
            key={locale}
            href={`/${locale}${nonLocalizedPath}`}
            className={`flex justify-center px-4 py-2 border border-(--dropdown-menu-border) hover:bg-(--background-navbar-hover-rgb) text-sm hover:text-(--font-color-menu-secondary) ${
              locale === currentLocale ? "pointer-events-none opacity-50" : ""
            }`}
          >
            <span>
              <span className="mr-2">{flags[locale]}</span>
              {locale.toUpperCase()}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LangSelector;
