import React from "react";

interface ButtonProps {
  type?: "default" | "blueButton";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type = "default", children }) => {
  let styles = "text-primaryLight dark:text-primaryDark";

  if (type === "blueButton") {
    styles = "bg-primaryLight dark:bg-primaryDark rounded-full py-2";
  }

  return (
    <div
      className={`flex items-center gap-1 text-sm font-semibold md:text-xl ${styles}`}
    >
      {children}
    </div>
  );
};

export default Button;
