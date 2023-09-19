import { RiFunctionLine } from "react-icons/ri";
import { defineField } from "sanity";

const workProcessSymbol = {
  name: "workProcessSymbol",
  title: "Work Process Symbol",
  type: "document",
  icon: RiFunctionLine,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};

export default workProcessSymbol;
