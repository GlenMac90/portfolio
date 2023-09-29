import React from "react";

const CrossButton = () => {
  return (
    <div className="flex h-5 w-5">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="cross">
          <path
            id="Vector"
            d="M24.5073 9.49271C24.1753 9.16076 23.6372 9.16076 23.3052 9.49271L17 15.7979L10.6948 9.49271C10.3628 9.16076 9.82465 9.16076 9.49271 9.49271C9.16076 9.82465 9.16076 10.3628 9.49271 10.6948L15.7979 17L9.49271 23.3052C9.16076 23.6372 9.16076 24.1753 9.49271 24.5073C9.82465 24.8392 10.3628 24.8392 10.6948 24.5073L17 18.2021L23.3052 24.5073C23.6372 24.8392 24.1753 24.8392 24.5073 24.5073C24.8392 24.1753 24.8392 23.6372 24.5073 23.3052L18.2021 17L24.5073 10.6948C24.8392 10.3628 24.8392 9.82465 24.5073 9.49271Z"
            stroke="#424B5C"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="stroke-cross dark:stroke-crossDark"
          />
        </g>
      </svg>
    </div>
  );
};

export default CrossButton;
