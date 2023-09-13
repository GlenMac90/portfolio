import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useTheme } from "next-themes";

import { Tooltip } from "@nextui-org/react";

interface SocialMediaButtonProps {
  button: {
    title: string;
    icon: StaticImageData;
    iconDark: StaticImageData;
    url: string;
  };
}

const SocialMediaButton = ({ button }: SocialMediaButtonProps) => {
  const { theme } = useTheme();

  return (
    <Tooltip key={button.title} content={button.title}>
      <Link href={button.url} target="_blank" rel="noopener noreferrer">
        <Image
          src={theme === "light" ? button.icon : button.iconDark}
          alt={button.title}
          height={30}
          width={30}
          className="max-w-[1.5rem] md:max-w-[1.875rem]"
        />
      </Link>
    </Tooltip>
  );
};

export default SocialMediaButton;
