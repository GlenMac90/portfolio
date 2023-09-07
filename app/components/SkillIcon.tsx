import React, { FC, useState } from "react";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";

interface SkillIconProps {
  src: string;
  text: string;
}

const SkillIcon: FC<SkillIconProps> = ({ src, text }) => {
  const [colourIcon, setColourIcon] = useState(false);

  return (
    <Tooltip content={text}>
      <div
        key={src}
        className={`flex w-fit cursor-pointer items-center justify-stretch rounded-full ${
          colourIcon ? "bg-white900 shadow-lg dark:bg-black300" : "bg-white800"
        }  p-3.5 dark:bg-black300 lg:p-6`}
        onMouseOver={() => setColourIcon(true)}
        onMouseLeave={() => setColourIcon(false)}
      >
        <Image
          src={src}
          width={27}
          height={27}
          alt={text}
          className={`h-[1.7rem] w-[1.7rem] ${
            !colourIcon && "grayscale"
          } lg:h-[3.1rem] lg:w-[3.1rem]`}
        />
      </div>
    </Tooltip>
  );
};

export default SkillIcon;
