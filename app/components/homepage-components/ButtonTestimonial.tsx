interface ButtonTestimonialProps {
  direction: "left" | "right";
}

const ButtonTestimonial = ({ direction }: ButtonTestimonialProps) => {
  const arrowDirection =
    direction === "left"
      ? "M19 12H5M5 12L12 19M5 12L12 5"
      : "M5 12H19M19 12L12 5M19 12L12 19";
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="arrow-left">
        <path
          id="Icon"
          d={arrowDirection}
          className="stroke-[#151E2C] dark:stroke-[#F3F8FF]"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default ButtonTestimonial;
