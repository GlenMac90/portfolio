"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { navbarButtons } from "@/constants";
import {
  download,
  downloadDarkMode,
  lightModeIcon,
  darkModeIcon,
  cross,
  crossDarkMode,
} from "@/public/svg-icons";

interface MobileNavBarProps {
  theme: string | undefined;
  pathname: string;
  currentTheme: string | undefined;
  setTheme: (newTheme: string) => void;
  handleCloseMobileNav: () => void; // Added type for handleCloseMobileNav
  closeAnimation: boolean;
}

const MobileNavBar = ({
  theme,
  pathname,
  currentTheme,
  setTheme,
  handleCloseMobileNav,
  closeAnimation,
}: MobileNavBarProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: closeAnimation ? 0 : 1 }}
      className="z-50 mx-2 mt-[4.5rem] flex max-h-80 w-full max-w-[30rem] flex-col gap-3 rounded-xl bg-white800 p-4 dark:bg-black300"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="mb-2 flex justify-between">
        <Image
          src={theme === "light" ? lightModeIcon : darkModeIcon}
          height={24}
          width={24}
          alt="light mode symbol"
          className="cursor-pointer"
          onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        />
        <Image
          src={theme === "light" ? cross : crossDarkMode}
          height={20}
          width={20}
          alt="close button"
          onClick={handleCloseMobileNav}
        />
      </div>

      {navbarButtons.map((button) => (
        <Link
          key={button.label}
          href={button.path}
          className={`w-full cursor-pointer rounded-lg px-2 py-4 text-sm ${
            pathname === button.path
              ? "border-primaryLight bg-primaryDark font-semibold text-white800"
              : "text-white500 dark:text-white800"
          }`}
          onClick={handleCloseMobileNav}
        >
          <p>{button.label}</p>
        </Link>
      ))}
      <Link href="/" className="flex w-full cursor-pointer rounded px-2 py-4">
        <Image
          src={theme === "light" ? download : downloadDarkMode}
          height={20}
          width={20}
          alt="download"
        />
        <p className="ml-1 text-sm font-semibold text-black200 dark:text-white800">
          Resume
        </p>
      </Link>
    </motion.div>
  );
};

export default MobileNavBar;
