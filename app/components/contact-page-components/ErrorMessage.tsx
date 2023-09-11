import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div
      className={`absolute bottom-[-2rem] left-2 text-red-600 transition duration-300 ease-in dark:text-red-400 ${
        message ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      <div>{message}</div>
    </div>
  );
};

export default ErrorMessage;
