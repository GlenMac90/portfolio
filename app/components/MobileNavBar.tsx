"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { navbarButtons } from "@/constants";
import {
  CrossButton,
  DownloadButton,
  LightOrDarkModeIcon,
} from "./light-dark-mode-buttons";
import { MobileNavBarProps } from "@/utils/interfaces";

const MobileNavBar = ({
  pathname,
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
        <LightOrDarkModeIcon />
        <div className="flex" onClick={handleCloseMobileNav}>
          <CrossButton />
        </div>
      </div>

      {navbarButtons.map((button) => (
        <Link
          key={button.label}
          href={button.path}
          className={`w-full cursor-pointer rounded-lg px-2 py-4 text-sm ${
            (button.path === "/case-studies" &&
              pathname.startsWith("/case-studies")) ||
            pathname === button.path
              ? "bg-primaryLight font-semibold text-white800 dark:bg-primaryDark"
              : "text-white500 dark:text-white800"
          }`}
          onClick={handleCloseMobileNav}
        >
          <p>{button.label}</p>
        </Link>
      ))}
      <Link href="/" className="flex w-full cursor-pointer rounded px-2 py-4">
        <DownloadButton />
        <p className="ml-1 text-sm font-semibold text-black200 dark:text-white800">
          Resume
        </p>
      </Link>
    </motion.div>
  );
};

export default MobileNavBar;
