// sanity/schemas/socialMediaIcon.js

import { defineField } from "sanity";
import { BiLink } from "react-icons/bi";

const socialMediaIcons = {
  name: "socialMediaIcon",
  title: "Social Media Icon",
  type: "document",
  icon: BiLink,
  fields: [
    defineField({
      name: "icon",
      title: "Icon (Light Mode)",
      type: "image",
      description: "Upload the icon for light mode.",
      options: { hotspot: true },
    }),
    defineField({
      name: "iconDark",
      title: "Icon (Dark Mode)",
      type: "image",
      description: "Upload the icon for dark mode.",
      options: { hotspot: true },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Title of the social media (e.g., Instagram, Twitter).",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      description: "Link to the social media page.",
      validation: (Rule) => Rule.required().uri({}),
    }),
  ],
};

export default socialMediaIcons;
