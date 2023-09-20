"use client";

import {
  Dials,
  MainGraphicImages,
  GraphicHorizontalBars,
  GraphicSmallCardLeft,
  GraphicLineChartMiddleRight,
  GraphicLineChartBottomRight,
  GraphicScreenTopLeft,
  GraphicScreenTopRight,
  GraphicSliders,
  GraphicBouncingSquares,
  GraphicCrosses,
  GraphicCascadingRowsRight,
  GraphicSquaresAndBalls,
  GraphicFrames,
} from "./hero-graphic-components/index";

const AnimatedComputerGraphic = () => {
  return (
    <section className="relative flex h-[20rem] w-[27.5rem] items-center sm:h-[36rem] sm:w-[48rem]">
      <Dials />
      <svg
        width="743"
        height="579"
        viewBox="0 0 743 579"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3357_822)">
          <MainGraphicImages />
          <GraphicHorizontalBars />
          <GraphicSmallCardLeft />
          <GraphicLineChartMiddleRight />
          <GraphicLineChartBottomRight />
          <GraphicScreenTopLeft />
          <GraphicScreenTopRight />
          <GraphicSliders />
          <GraphicBouncingSquares />
          <GraphicCrosses />
          <GraphicCascadingRowsRight />
          <GraphicSquaresAndBalls />
          <GraphicFrames />
        </g>
        <defs>
          <clipPath id="clip0_3357_822">
            <rect width="743" height="579" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </section>
  );
};

export default AnimatedComputerGraphic;
