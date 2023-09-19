import { getSocialMediaIcons } from "@/sanity/sanity.query";

import FooterLayout from "./FooterLayout";

export default async function Footer() {
  const socialMediaIcons = await getSocialMediaIcons();
  return <FooterLayout socialMediaIcons={socialMediaIcons} />;
}
