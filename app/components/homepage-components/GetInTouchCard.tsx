import Image from "next/image";
import Link from "next/link";

import { whiteButtonArrow } from "@/public/svg-icons";
import Button from "../Button";

const GetInTouchCard = () => {
  return (
    <section className="flex w-full items-center justify-center bg-white900 px-6 py-12 dark:bg-black200 lg:py-[4.5rem]">
      <div className="relative flex w-full max-w-xl flex-col overflow-hidden rounded-[1.25rem] bg-secondary px-4 lg:max-w-7xl lg:flex-row lg:justify-between lg:px-[4.5rem] lg:py-20">
        <p className="mt-[5rem] max-w-sm text-3xl font-bold text-black200 lg:my-0 lg:max-w-[40rem] lg:text-5xl">
          Have a project in mind that requires technical expertise?
        </p>
        <Link href="/contact" className="z-10 mb-[5rem] mt-4 flex">
          <Button
            type="blueButton"
            additionalStyles="w-full gap-1.5 py-3.5 text-lg lg:w-[20rem] lg:translate-y-16 lg:self-end lg:font-medium"
          >
            <p>Get in touch with me</p>
            <Image
              src={whiteButtonArrow}
              height={14}
              width={14}
              alt="link to more info"
            />
          </Button>
        </Link>

        {/* Start of background pattern section for small screen */}
        <div className="absolute flex h-full w-full items-center justify-center lg:hidden">
          <div className="absolute h-80 w-80 translate-x-[-1rem] translate-y-[-15.5rem] rounded-full bg-white/10" />
          <div className="absolute h-[11rem] w-[10rem] translate-x-[-1rem] translate-y-[-1.5rem] bg-white/10" />
          <div className="absolute left-0 h-[8rem] w-[7rem] translate-y-[-1.5rem] rounded-tr-full bg-white/10" />
          <div className="absolute h-[6rem] w-[10rem] translate-x-[-1rem] translate-y-[7rem] self-center rounded-t-full bg-white/10" />
          <div className="absolute h-[8rem] w-[3.5rem] translate-x-[5.8rem] translate-y-[6rem] self-center rounded-br-3xl bg-white/25" />
          <div className="absolute h-[4rem] w-[3.5rem] translate-x-[5.8rem] translate-y-[1rem] self-center bg-white/10" />
          <div
            style={{ clipPath: "polygon(0 100%, 0 0, 100% 100%)" }}
            className="absolute h-[4rem] w-[3.5rem] translate-x-[5.8rem] translate-y-[1rem] self-center bg-white/[15%]"
          />
        </div>
        {/* End of background pattern section for small screen */}

        {/* Start of background pattern section for large screen */}
        <div className="absolute hidden h-full w-full items-center justify-center lg:flex lg:-translate-y-20 lg:translate-x-[-4.5rem]">
          <div className="absolute left-[-10rem] h-[20rem] w-[20rem] rounded-full bg-white/10" />
          <div className="absolute right-[23rem] h-[7rem] w-[14rem] translate-y-[4.5rem] rounded-b-full bg-white/10" />
          <div className="absolute right-[12rem] h-[11rem] w-[11rem] translate-y-[1.5rem] bg-white/10" />
          <div className="absolute right-[12rem] h-[5.5rem] w-[11rem] translate-y-[-6.8rem] rounded-b-full bg-white/10" />
          <div
            style={{ clipPath: "polygon(100% 100%, 100% 0, 0 100%)" }}
            className="absolute right-[12rem] h-[11rem] w-[11rem] translate-y-[6rem] bg-white/10"
          />
          <div className="absolute right-0 h-[12rem] w-[12rem] translate-y-[-5rem] bg-white/10" />
          <div
            style={{ clipPath: "polygon(0 100%, 0 0 , 100% 0)" }}
            className="absolute right-0 h-[12rem] w-[12rem] translate-y-[-5rem] bg-white/[15%]"
          />
        </div>
        {/* End of background pattern section for large screen */}
      </div>
    </section>
  );
};

export default GetInTouchCard;
