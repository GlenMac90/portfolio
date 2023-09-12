"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import ContactDetails from "../components/contact-page-components/ContactDetails";
import SendMessage from "../components/contact-page-components/SendMessage";
import SuccessScreen from "../components/contact-page-components/SuccessScreen";

const Contact = () => {
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCloseClick = () => {
    setShowSuccess(false);
    router.push("/");
  };
  return (
    <main className="flex w-full flex-col items-center">
      <header className="flex w-full justify-center bg-white800 pb-12 pt-[7.5rem] dark:bg-black300 md:pb-20 md:pt-[11.25rem]">
        <div className="flex w-full max-w-3xl flex-col items-center">
          <div className="relative flex w-fit flex-col">
            <p className="z-20 truncate whitespace-nowrap text-[2.625rem] font-bold text-black200 dark:text-white900 md:text-[4rem]">
              Get in Touch
            </p>
            <div className="absolute z-10 h-[1.2rem] w-full translate-y-[2.38rem] bg-orange-200 md:h-[1.8rem] md:translate-y-[3.625rem]" />
          </div>
          <p className="mt-5 text-sm font-light text-white500 dark:text-white800 md:mt-8 md:text-xl">
            {"Let's Collaborate on Your Next Project"}
          </p>
        </div>
      </header>
      <section className="flex w-full justify-center bg-white900 p-6 dark:bg-black200 md:py-20">
        <div className="flex w-full max-w-7xl flex-col justify-center lg:flex-row-reverse lg:justify-between">
          <SendMessage setShowSuccess={setShowSuccess} />
          <ContactDetails />
        </div>
      </section>
      {showSuccess && <SuccessScreen setShowSuccess={handleCloseClick} />}
    </main>
  );
};

export default Contact;
