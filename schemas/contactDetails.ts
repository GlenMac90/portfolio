import { defineField } from "sanity";

const contactDetails = {
  name: "contactDetail",
  title: "Contact Details",
  type: "document",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    {
      name: "imageSrc",
      title: "Icon",
      type: "image",
      description: "Icon representing the contact type (for light theme)",
    },
    {
      name: "imageSrcDark",
      title: "Icon Dark",
      type: "image",
      description: "Icon representing the contact type (for dark theme)",
    },
    defineField({
      name: "info",
      title: "Information",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
};

export default contactDetails;
