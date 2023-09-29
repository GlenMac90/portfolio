import { ButtonProps } from "@/utils/interfaces";

const Button = ({
  style,
  additionalStyles,
  children,
  value = "",
  type = "button",
}: ButtonProps) => {
  let buttonStyles =
    "text-primaryLight dark:text-primaryDark text:sm md:text-xl font-semibold justify-center gap-1";

  if (style === "blueButton") {
    buttonStyles =
      "bg-primaryLight font-semibold text-white900 dark:bg-primaryDark rounded-full py-2 gap-1 justify-center";
  }

  if (style === "custom") {
    buttonStyles = "";
  }

  return (
    <button
      value={value}
      type={type}
      className={`flex items-center ${buttonStyles} ${additionalStyles}`}
    >
      {children}
    </button>
  );
};

export default Button;
