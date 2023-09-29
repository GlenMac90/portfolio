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
    <section className="relative flex items-center lg:h-[36rem] lg:w-[48rem] lg:min-w-[48rem]">
      <Dials />
      <svg
        className="flex h-full w-full"
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
