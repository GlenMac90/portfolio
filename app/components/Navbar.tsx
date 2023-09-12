"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

import {
  menuButton,
  menuButtonDarkMode,
  download,
  lightModeIcon,
  darkModeIcon,
  downloadDarkMode,
} from "@/public/svg-icons";
import MobileNavBar from "./MobileNavBar";
import { navbarButtons } from "@/constants";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMobileNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="fixed z-50 flex h-16 w-full items-center justify-between bg-white800 px-6 dark:bg-black300 md:h-24 md:px-20">
        <div className="initial_background flex h-7 w-7 items-center justify-center rounded-full md:h-9 md:w-9">
          <p className="font-semibold text-white900 md:text-xl">G</p>
        </div>
        <Image
          src={theme === "light" ? menuButton : menuButtonDarkMode}
          height={24}
          width={24}
          alt="menu button"
          className="cursor-pointer md:hidden"
          onClick={() => setShowMobileNav((prev) => !prev)}
        />
        <div className="hidden items-center gap-9 md:flex">
          {navbarButtons.map((button) => (
            <Link href={button.path} key={button.label}>
              <p
                className={`text-sm ${
                  pathname === button.path
                    ? "font-semibold text-primaryLight"
                    : "text-white500 dark:text-white800"
                }`}
              >
                {button.label}
              </p>
            </Link>
          ))}
          {/* Temporary href below so that the link works */}
          <Link href="/" className="flex">
            <Image
              src={theme === "light" ? download : downloadDarkMode}
              height={20}
              width={20}
              alt="download"
            />
            <p className="text-sm text-black200 dark:text-white900">Resume</p>
          </Link>
          <div className="h-6 border-l border-white500" />
          <Image
            src={theme === "light" ? lightModeIcon : darkModeIcon}
            height={20}
            width={20}
            alt="light mode symbol"
            className="cursor-pointer"
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          />
        </div>
      </nav>
      {showMobileNav && (
        <div
          className="fixed z-40 flex h-screen w-screen justify-center bg-black/30"
          onClick={() => setShowMobileNav(false)}
        >
          <MobileNavBar
            theme={theme}
            pathname={pathname}
            currentTheme={currentTheme}
            setTheme={setTheme}
            setShowMobileNav={setShowMobileNav}
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
