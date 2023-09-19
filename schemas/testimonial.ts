import { defineField } from "sanity";

const testimonial = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "jobDescription",
      title: "Job Description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    {
      name: "image",
      title: "Profile Image",
      type: "image",
      description: "Upload a picture of the individual",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      description: "Rating out of 5",
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: "text",
      title: "Testimonial Text",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
  ],
};

export default testimonial;
