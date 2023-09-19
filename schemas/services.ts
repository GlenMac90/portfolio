import { defineField } from "sanity";

const services = {
  name: "service",
  title: "Service Provided",
  type: "document",
  fields: [
    {
      name: "imageSrc",
      title: "Service Icon",
      type: "image",
      description: "Icon representing the service",
    },
    {
      name: "imageHoverLight",
      title: "Service Icon Hover (Light Mode)",
      type: "image",
      description: "Icon used for hover effect in light mode",
    },
    {
      name: "imageHoverDark",
      title: "Service Icon Hover (Dark Mode)",
      type: "image",
      description: "Icon used for hover effect in dark mode",
    },
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Service Description",
      type: "text",
      description: "Description of the service provided",
      validation: (Rule) => Rule.required(),
    }),
  ],
};

export default services;
