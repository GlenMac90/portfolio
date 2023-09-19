import { getContactDetails, getSocialMediaIcons } from "@/sanity/sanity.query";

import ContactPageBody from "../components/contact-page-components/ContactPageBody";
import { ContactDetailType, SocialMediaIconType } from "@/types";

export default async function ContactPage() {
  const contactDetails: ContactDetailType[] = await getContactDetails();
  const socialMediaIcons: SocialMediaIconType[] = await getSocialMediaIcons();
  return (
    <ContactPageBody
      contactDetails={contactDetails}
      socialMediaIcons={socialMediaIcons}
    />
  );
}
