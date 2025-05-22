// components/Navbar.tsx
import React, { FC } from "react";
import NavbarDesktop from "./navbarDesktop/NavbarDesktop";
import NavbarMobile from "./navbarMobile/NavbarMobile";

const Navbar: FC = () => {
  return (
    <header
      // fixed en top, ancho completo, altura dinámica, flex centradito,
      // fondo y sombra. min‑height se lo damos con style si usamos variable CSS.
      className="
        fixed top-0 left-0 w-full h-[7dvh] z-50 flex justify-center items-center
        bg-(--background-navbar-rgb) shadow-md
      "
      style={{ minHeight: "var(--navbar-min-height)" }}
    >
      {/* Desktop: oculto en pantallas < md */}
      <div className="hidden md:flex w-full h-full">
        <NavbarDesktop />
      </div>

      {/* Mobile: oculto en pantallas ≥ md */}
      <div className="flex md:hidden">
        <NavbarMobile />
      </div>
    </header>
  );
};

export default Navbar;
