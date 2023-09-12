import { socialMediaButtonsContactPage, contactDetails } from "@/constants";
import SocialMediaButton from "./SocialMediaButton";
import ContactItem from "./ContactItem";

const ContactDetails = () => {
  return (
    <>
      <div className="mt-24 flex w-full flex-col md:w-2/5 lg:mt-0">
        <p className="text-lg font-light text-black300 dark:text-white900 md:text-2xl">
          My Socials
        </p>
        <div className="mt-3.5 flex gap-9 md:mt-7">
          {socialMediaButtonsContactPage.map((button) => (
            <SocialMediaButton key={button.title} button={button} />
          ))}
        </div>
        {contactDetails.map((contact) => (
          <ContactItem key={contact.label} contact={contact} />
        ))}
      </div>
    </>
  );
};

export default ContactDetails;
