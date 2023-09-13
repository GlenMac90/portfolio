import Image from "next/image";

import { socialMediaIcons } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bottom-0 flex h-[10rem] w-screen flex-col items-center justify-center border-t border-t-slate-200 bg-white800 dark:border-t-0 dark:bg-black200 lg:w-full lg:flex-row lg:justify-between lg:px-20">
      <p className="text-lg text-black400 dark:text-white800">
        © {new Date().getFullYear()} Glen. All rights reserved.
      </p>
      <div className="mt-4 flex gap-6 lg:mt-0">
        {socialMediaIcons.map((button) => (
          <Link href={button.url} key={button.title}>
            <Image
              src={button.icon}
              height={24}
              width={24}
              alt={`Social media icon for ${button.title}`}
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
