import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Tooltip } from "@nextui-org/react";

import { socialMediaButtonsContactPage } from "@/constants";
import {
  call,
  callWhite,
  message,
  messageWhite,
} from "@/public/svg-icons/tech-icons";

const ContactDetails = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className="mt-24 flex w-full flex-col md:w-2/5 lg:mt-0">
        <p className="text-lg font-light text-black300 dark:text-white900 md:text-2xl">
          My Socials
        </p>
        <div className="mt-3.5 flex gap-9 md:mt-7">
          {socialMediaButtonsContactPage.map((button) => (
            <Tooltip key={button.title} content={button.title}>
              <Image
                src={theme === "light" ? button.icon : button.iconDark}
                alt="Image of social media icons"
                height={30}
                width={30}
                className="max-w-[1.5rem] md:max-w-[1.875rem]"
              />
            </Tooltip>
          ))}
        </div>
        <p className="mt-9 text-lg font-light text-black300 dark:text-white900 md:mt-20 md:text-2xl">
          Phone Number
        </p>
        <div className="mt-3.5 flex gap-3 md:mt-7">
          <Image
            src={theme === "light" ? call : callWhite}
            alt="telephone number"
            height={30}
            width={30}
            className="max-w-[1.5rem] md:max-w-[1.875rem]"
          />
          <p className="text-xl font-medium text-black400 dark:text-white800 md:text-2xl">
            +44 7984 365789
          </p>
        </div>
        <p className="mt-9 text-lg font-light text-black300 dark:text-white900 md:mt-20 md:text-2xl">
          Email Address
        </p>
        <div className="mt-3.5 flex gap-3 md:mt-7">
          <Image
            src={theme === "light" ? message : messageWhite}
            alt="email address"
            height={30}
            width={30}
            className="max-w-[1.5rem] md:max-w-[1.875rem]"
          />
          <p className="text-xl font-medium text-black400 dark:text-white800 md:text-2xl">
            glen.mccallum@live.co.uk
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
