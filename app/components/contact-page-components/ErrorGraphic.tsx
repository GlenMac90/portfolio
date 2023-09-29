"use client";

import {
  ErrorBarChartBottom,
  ErrorBlueFrames,
  ErrorBouncingSquares,
  ErrorComputerGraphic,
  ErrorDials,
  ErrorHorizontalRows,
  ErrorLineChartBottom,
  ErrorRedFlashingBar,
  ErrorScreenLeft,
  ErrorScreenRight,
  ErrorSliders,
} from "../error-graphic-components";

const ErrorGraphic = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute translate-x-[-4rem] translate-y-[-4rem]">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((puff) => (
          <div key={puff} className="smoke_list z-10"></div>
        ))}
      </div>
      <ErrorDials />
      <svg
        width="350"
        height="350"
        viewBox="0 0 743 579"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rotate-[-12deg]"
      >
        <g clip-path="url(#clip0_3357_822)">
          <ErrorComputerGraphic />
          <ErrorRedFlashingBar />
          <ErrorScreenLeft />
          <ErrorScreenRight />
          <ErrorBarChartBottom />
          <ErrorHorizontalRows />
          <ErrorBlueFrames />
          <ErrorSliders />
          <ErrorBouncingSquares />
          <ErrorLineChartBottom />
        </g>
        <defs>
          <clipPath id="clip0_3357_822">
            <rect width="743" height="579" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default ErrorGraphic;
