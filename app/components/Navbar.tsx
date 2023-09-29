"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import MobileNavBar from "./MobileNavBar";
import { navbarButtons } from "@/constants";
import {
  DownloadButton,
  MenuButton,
  LightOrDarkModeIcon,
} from "./light-dark-mode-buttons";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const pathname = usePathname();
  const [closeAnimation, setCloseAnimation] = useState(false);

  const handleCloseMobileNav = () => {
    setCloseAnimation(true);

    setTimeout(() => {
      setShowMobileNav(false);
      setCloseAnimation(false);
    }, 400);
  };

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
      <nav
        className={`fixed z-50 flex h-16 w-full items-center justify-between bg-white800 px-6 dark:bg-black300 md:h-24 md:px-20 ${
          pathname.startsWith("/studio") || pathname === "/success-screen"
            ? "hidden"
            : ""
        }`}
      >
        <div className="initial_background flex h-7 w-7 items-center justify-center rounded-full md:h-9 md:w-9">
          <p className="font-semibold text-white900 md:text-xl">G</p>
        </div>
        <div
          className="flex md:hidden"
          onClick={() => setShowMobileNav((prev) => !prev)}
        >
          <MenuButton />
        </div>
        <div className="hidden items-center gap-9 md:flex">
          {navbarButtons.map((button) => (
            <Link href={button.path} key={button.label}>
              <p
                className={`text-sm ${
                  (button.path === "/case-studies" &&
                    pathname.startsWith("/case-studies")) ||
                  pathname === button.path
                    ? "font-semibold text-primaryLight dark:text-primaryDark"
                    : "text-white500 dark:text-white800"
                }`}
              >
                {button.label}
              </p>
            </Link>
          ))}
          {/* Temporary href below so that the link works */}
          <Link href="/" className="flex">
            <DownloadButton />
            <p className="text-sm text-black200 dark:text-white900">Resume</p>
          </Link>
          <div className="h-6 border-l border-white500" />
          <LightOrDarkModeIcon />
        </div>
      </nav>
      {showMobileNav && (
        <div
          className="fixed z-40 flex h-screen w-screen justify-center bg-black/30"
          onClick={handleCloseMobileNav}
        >
          <MobileNavBar
            pathname={pathname}
            handleCloseMobileNav={handleCloseMobileNav}
            closeAnimation={closeAnimation}
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
