import { FC, Dispatch, SetStateAction, MouseEvent } from "react";
import Image from "next/image";

import { temporaryHeroIcon } from "@/public/png-icons";
interface SuccessScreenProps {
  setShowSuccess: Dispatch<SetStateAction<boolean>>;
}

const SuccessScreen: FC<SuccessScreenProps> = ({ setShowSuccess }) => {
  const preventCloseOnInnerClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed z-30 flex h-screen w-screen justify-center bg-black/30 px-4 pt-20 md:pt-28"
      onClick={() => setShowSuccess(false)}
    >
      <div
        className="z-40 flex h-fit w-full max-w-xl flex-col items-center justify-between rounded-xl bg-white900 p-6 dark:bg-black300 md:p-9"
        onClick={preventCloseOnInnerClick}
      >
        <p className="text-center text-2xl font-semibold text-black200 dark:text-white900 md:text-3xl">
          Thank you for getting in contact
        </p>
        <Image
          src={temporaryHeroIcon}
          alt="icon of me working"
          className="h-auto w-full"
        />
        <div className="flex flex-col items-center gap-6">
          <p className="text-center text-2xl font-semibold text-black200 dark:text-white900 md:text-3xl">
            I will get back for you as soon as possible
          </p>
          <button
            className="w-full max-w-[15rem] rounded-full bg-primaryLight py-4 font-semibold text-white900 dark:bg-primaryDark md:text-xl"
            onClick={() => setShowSuccess(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
