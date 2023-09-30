import Image from "next/image";
import Link from "next/link";

import Button from "./components/Button";
import { pageNotFound } from "@/public/svg-icons";

const page = () => {
  return (
    <div className="flex h-screen w-screen justify-center bg-white900 dark:bg-black200">
      <div className="fixed mx-4 mt-24 flex h-min flex-col rounded-xl bg-white800 p-6 dark:bg-black300 md:mt-32">
        <p className="self-center text-2xl font-semibold text-black300 dark:text-white800">
          Page not found
        </p>
        <Image
          src={pageNotFound}
          alt="Page not found"
          height={300}
          width={300}
        />
        <Link href="/" className="flex">
          <Button style="blueButton" additionalStyles="w-full">
            {"Let's go Home"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default page;
