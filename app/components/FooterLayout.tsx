"use client";

import { usePathname } from "next/navigation";

import SocialMediaButton from "./contact-page-components/SocialMediaButton";
import { FooterLayoutProps } from "@/utils/interfaces";

const FooterLayout = ({ socialMediaIcons }: FooterLayoutProps) => {
  const pathname = usePathname();
  return (
    <footer
      className={`bottom-0 flex h-[10rem] w-screen flex-col items-center justify-center border-t border-t-slate-200 bg-white800 dark:border-t-0 dark:bg-black200 lg:w-full lg:flex-row ${
        pathname === "/contact" ? "items-center" : "lg:justify-between lg:px-20"
      }
      ${pathname.startsWith("/studio") && "hidden"}
      ${pathname === "/success-screen" && "hidden"}`}
    >
      <p className="text-lg text-black400 dark:text-white800">
        © {new Date().getFullYear()} Glen. All rights reserved.
      </p>
      <div
        className={`mt-4 flex gap-6 lg:mt-0 ${
          pathname === "/contact" && "hidden"
        }`}
      >
        {socialMediaIcons.map((button) => (
          <SocialMediaButton key={button.title} button={button} />
        ))}
      </div>
    </footer>
  );
};

export default FooterLayout;
