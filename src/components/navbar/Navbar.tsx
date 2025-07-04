// components/Navbar.tsx
import React, { FC } from "react";
import NavbarDesktop from "./navbarDesktop/NavbarDesktop";
import NavbarMobile from "./navbarMobile/NavbarMobile";

const Navbar: FC = () => {
  return (
    <header
      className="
        fixed top-0 left-0 w-full min-h-[7dvh] z-10 flex justify-center items-center
        bg-(--background-navbar-rgb) shadow-md
      "
      style={{ minHeight: "var(--navbar-min-height)" }}
    >
      {/* Desktop: oculto en pantallas < md */}
      <div className="hidden md:flex w-full h-full">
        <NavbarDesktop />
      </div>

      {/* Mobile: oculto en pantallas ≥ md */}
      <div className="flex w-full h-full md:hidden">
        <NavbarMobile />
      </div>
    </header>
  );
};

export default Navbar;
