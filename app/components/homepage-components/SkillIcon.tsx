import { useState } from "react";
import Image from "next/image";
import { Tooltip } from "@nextui-org/react";
import { SkillType } from "@/types";

interface SkillIconProps {
  skill: SkillType;
}

const SkillIcon = ({ skill }: SkillIconProps) => {
  const [colourIcon, setColourIcon] = useState<boolean>(false);
  const imageSrc = skill?.src.image;

  return (
    <Tooltip content={skill.text}>
      <div
        key={skill.text}
        className={`flex w-fit cursor-pointer items-center justify-stretch rounded-full ${
          colourIcon ? "bg-white900 shadow-lg dark:bg-black300" : "bg-white800"
        }  p-3.5 dark:bg-black300 sm:p-6`}
        onMouseOver={() => setColourIcon(true)}
        onMouseLeave={() => setColourIcon(false)}
      >
        <Image
          src={imageSrc}
          width={27}
          height={27}
          alt="Company Icon"
          className={`h-[1.7rem] w-[1.7rem] ${
            !colourIcon && "grayscale"
          } sm:h-[3.1rem] sm:w-[3.1rem]`}
        />
      </div>
    </Tooltip>
  );
};

export default SkillIcon;
