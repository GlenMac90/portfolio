import { defineField } from "sanity";

const workExperience = {
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    }),
    {
      name: "durationUnit",
      title: "Duration Unit",
      type: "string",
      options: {
        list: ["Year", "Month"],
      },
    },
    {
      name: "image",
      title: "Company Logo (Light Mode)",
      type: "image",
    },
    {
      name: "imageDark",
      title: "Company Logo (Dark Mode)",
      type: "image",
    },
    {
      name: "imagePrimaryLight",
      title: "Company Logo Primary (Light Mode)",
      type: "image",
    },
    {
      name: "imagePrimaryDark",
      title: "Company Logo Primary (Dark Mode)",
      type: "image",
    },
  ],
};

export default workExperience;
