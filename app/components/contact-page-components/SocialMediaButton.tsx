"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useTheme } from "next-themes";

import { Tooltip } from "@nextui-org/react";
import { useState, useEffect } from "react";

interface SocialMediaButtonProps {
  button: {
    title: string;
    icon: StaticImageData;
    iconDark: StaticImageData;
    url: string;
  };
}

const SocialMediaButton = ({ button }: SocialMediaButtonProps) => {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [currentIcon, setCurrentIcon] = useState(button.icon);

  useEffect(() => {
    setCurrentIcon(theme === "light" ? button.icon : button.iconDark);
  }, [theme, button.icon, button.iconDark]);

  return (
    <Tooltip key={button.title} content={button.title}>
      <Link href={button.url} target="_blank" rel="noopener noreferrer">
        <Image
          src={currentIcon}
          alt={button.title}
          height={pathname === "/contact" ? 30 : 24}
          width={pathname === "/contact" ? 30 : 24}
          className="max-w-[1.5rem] md:max-w-[1.875rem]"
        />
      </Link>
    </Tooltip>
  );
};

export default SocialMediaButton;
