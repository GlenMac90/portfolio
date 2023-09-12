import Image from "next/image";

import { socialMediaIcons } from "@/constants";

const Footer = () => {
  return (
    <footer className="bottom-0 flex h-[10rem] w-screen flex-col items-center justify-center border-t border-t-slate-200 bg-white800 dark:border-t-0 dark:bg-black200 lg:w-full lg:flex-row lg:justify-between lg:px-20">
      <p className="text-lg text-black400 dark:text-white800">
        © {new Date().getFullYear()} Glen. All rights reserved.
      </p>
      <div className="mt-4 flex gap-6 lg:mt-0">
        {socialMediaIcons.map((icon) => (
          <Image
            key={icon}
            src={icon}
            height={24}
            width={24}
            alt="social media icon"
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
