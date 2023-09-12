interface UnderlinedTextProps {
  text: string;
  additionalStyles: string;
}

const UnderlinedText = ({ text, additionalStyles }: UnderlinedTextProps) => {
  return (
    <div
      className={`relative ml-4 w-fit flex-col self-center ${additionalStyles}`}
    >
      <p className="z-20 text-4xl font-bold text-black200 dark:text-white900 md:text-[3rem]">
        {text}
      </p>
      <div className="absolute z-10 h-[1rem] w-full translate-y-[1.6rem] bg-orange-200 md:h-[1.358rem] md:translate-y-[1.7rem]" />
    </div>
  );
};

export default UnderlinedText;
