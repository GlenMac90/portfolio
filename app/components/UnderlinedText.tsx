interface UnderlinedTextProps {
  text: string;
  header?: boolean;
  workExperience?: boolean;
  additionalStyles?: string;
}

const UnderlinedText = ({
  text,
  header = false,
  workExperience = false,
  additionalStyles,
}: UnderlinedTextProps) => {
  return (
    <div className={`relative w-fit flex-col ${additionalStyles}`}>
      <p
        className={`z-20 text-4xl font-bold md:text-[3rem] ${
          header
            ? "text-[2.625rem] md:text-[4rem]"
            : "text-[2.25rem] md:text-[3rem]"
        } ${
          workExperience
            ? "text-white900 dark:text-black200"
            : "text-black200 dark:text-white900"
        }`}
      >
        {text}
      </p>
      <div
        className={`absolute z-10 w-full bg-secondary ${
          header
            ? "h-[1.18rem] translate-y-[1.67rem] md:h-[1.8rem] md:translate-y-[1.88rem]"
            : "h-[1rem] translate-y-[1.6rem] md:h-[1.358rem] md:translate-y-[1.7rem]"
        }`}
      />
    </div>
  );
};

export default UnderlinedText;
