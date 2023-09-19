import { defineField } from "sanity";

const mySkills = {
  name: "skill",
  title: "My Skills",
  type: "document",
  fields: [
    {
      name: "src",
      title: "Skill Icon",
      type: "image",
      description: "Icon representing the skill",
    },
    defineField({
      name: "text",
      title: "Skill Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
};

export default mySkills;
