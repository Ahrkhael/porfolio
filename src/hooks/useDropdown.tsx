"use client";

import { useState, useEffect, useRef } from "react";

export default function useDropdown() {
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Especificamos tipo

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);

    return () => {
      window.removeEventListener("resize", checkTouchDevice);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    isDropdownVisible,
    handleToggleDropdown: () => setDropdownVisible((prev) => !prev),
    handleMouseEnter: () => !isTouchDevice && setDropdownVisible(true),
    handleMouseLeave: () => !isTouchDevice && setDropdownVisible(false),
    dropdownRef,
  };
}
