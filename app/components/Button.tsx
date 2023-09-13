import { ReactNode } from "react";

interface ButtonProps {
  type?: string;
  additionalStyles?: string;
  submit?: boolean;
  value?: string;
  children: ReactNode;
}

const Button = ({
  type = "default",
  additionalStyles,
  children,
  value = "",
  submit = false,
}: ButtonProps) => {
  let styles =
    "text-primaryLight dark:text-primaryDark text:sm md:text-xl font-semibold justify-center gap-1";

  if (type === "blueButton") {
    styles =
      "bg-primaryLight font-semibold text-white900 dark:bg-primaryDark rounded-full py-2 gap-1 justify-center";
  }

  if (type === "custom") {
    styles = "";
  }

  return (
    <button
      value={value}
      type={submit === true ? "submit" : "button"}
      className={`flex items-center ${styles} ${additionalStyles}`}
    >
      {children}
    </button>
  );
};

export default Button;
