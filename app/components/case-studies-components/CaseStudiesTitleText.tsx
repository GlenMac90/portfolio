import UnderlinedText from "../UnderlinedText";

const CaseStudiesTitleText = () => {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="flex">
        <p className="z-20  text-4xl font-bold text-black200 dark:text-white900 md:text-[3rem]">
          {"Recent"}
        </p>
        <UnderlinedText text={"Case"} additionalStyles="flex lg:hidden" />
      </div>
      <UnderlinedText text={"Studies"} additionalStyles="lg:hidden flex" />
      <UnderlinedText text={"Case Studies"} additionalStyles="lg:flex hidden" />
    </section>
  );
};

export default CaseStudiesTitleText;
