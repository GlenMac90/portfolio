"use client";

import { motion } from "framer-motion";

import SocialMediaButton from "./SocialMediaButton";
import ContactItem from "./ContactItem";
import { ContactPageBodyProps } from "@/utils/interfaces";

const ContactDetails = ({
  contactDetails,
  socialMediaIcons,
}: ContactPageBodyProps) => {
  return (
    <>
      <motion.div
        initial={{ y: "15%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          y: { duration: 0.5 },
          opacity: { duration: 0.5 },
        }}
        viewport={{ once: true }}
        className="mt-24 flex w-full flex-col md:w-2/5 lg:mt-0"
      >
        <p className="text-lg font-light text-black300 dark:text-white900 md:text-2xl">
          My Socials
        </p>
        <div className="mt-3.5 flex gap-9 md:mt-7">
          {socialMediaIcons.map((button) => (
            <SocialMediaButton key={button.title} button={button} />
          ))}
        </div>
        {contactDetails.map((contact) => (
          <ContactItem key={contact.label} contact={contact} />
        ))}
      </motion.div>
    </>
  );
};

export default ContactDetails;
