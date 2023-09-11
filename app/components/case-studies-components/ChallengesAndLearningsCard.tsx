import React from "react";
import Image, { StaticImageData } from "next/image";

interface ChallengesAndLearningsCardProps {
  image: StaticImageData;
  additionalStyles?: string;
  textColour: string;
  text: string;
  listText?: string[];
}

const ChallengesAndLearningsCard: React.FC<ChallengesAndLearningsCardProps> = ({
  image,
  additionalStyles,
  textColour,
  text,
  listText,
}) => {
  return (
    <div
      className={`flex flex-col rounded-[10px] bg-white800 px-3.5 py-6 dark:bg-black300 md:px-10 md:py-9 ${additionalStyles}`}
    >
      <p className={`text-lg font-semibold ${textColour} md:text-xl`}>{text}</p>
      <div className="mt-6 flex flex-col gap-5 md:mt-[1.75rem]">
        {listText?.map((challenge, index) => (
          <div key={index} className="flex gap-2.5">
            <Image
              src={image}
              height={20}
              width={20}
              alt="challenge symbol"
              className="mt-1 self-start"
            />
            <p className="text-sm font-light text-white500 dark:text-white800 md:text-lg">
              {challenge}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengesAndLearningsCard;
