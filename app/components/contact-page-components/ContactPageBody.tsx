"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import UnderlinedText from "../UnderlinedText";
import ContactDetails from "./ContactDetails";
import SendMessage from "./SendMessage";
import { ContactPageBodyProps } from "@/utils/interfaces";

const ContactPageBody = ({
  contactDetails,
  socialMediaIcons,
}: ContactPageBodyProps) => {
  const router = useRouter();

  const [showSuccess, setShowSuccess] = useState(false);

  if (showSuccess) {
    router.push("/success-screen");
  }

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
          <ContactDetails
            contactDetails={contactDetails}
            socialMediaIcons={socialMediaIcons}
          />
        </div>
      </section>
    </main>
  );
};

export default ContactPageBody;
