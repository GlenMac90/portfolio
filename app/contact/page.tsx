"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

import ContactDetails from "../components/contact-page-components/ContactDetails";
import SendMessage from "../components/contact-page-components/SendMessage";
import SuccessScreen from "../components/contact-page-components/SuccessScreen";
import UnderlinedText from "../components/UnderlinedText";

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
        <motion.div
          initial={{ y: "10%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            y: { duration: 0.5, delay: 0.25 },
            opacity: { duration: 0.5, delay: 0.25 },
          }}
          className="flex w-full max-w-3xl flex-col items-center"
        >
          <UnderlinedText
            text="Get in Touch"
            additionalStyles="relative flex w-fit flex-col"
          />
          <p className="mt-5 text-sm font-light text-white500 dark:text-white800 md:mt-8 md:text-xl">
            {"Let's Collaborate on Your Next Project"}
          </p>
        </motion.div>
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
