const caseStudy = {
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    {
      name: "caseStudyLink",
      title: "Case Study Link",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "myRole",
      title: "My Role",
      type: "string",
    },
    {
      name: "sourceCode",
      title: "Source Code",
      type: "string",
    },
    {
      name: "websiteURL",
      title: "Website URL",
      type: "string",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "datetime",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "datetime",
    },
    {
      name: "techStackCaseStudy",
      title: "Tech Stack for Case Study",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
            },
          ],
        },
      ],
    },
    {
      name: "caseStudyDescription",
      title: "Case Study Description",
      type: "array",
      of: [{ type: "text" }],
    },
    {
      name: "problemStatement",
      title: "Problem Statement",
      type: "text",
    },
    {
      name: "problemStatementImage",
      title: "Problem Statement Image",
      type: "image",
    },
    {
      name: "challenges",
      title: "Challenges",
      type: "array",
      of: [{ type: "text" }],
    },
    {
      name: "learnings",
      title: "Learnings",
      type: "array",
      of: [{ type: "text" }],
    },
    {
      name: "figmaBannerImage",
      title: "Figma Banner Image",
      type: "image",
    },
    {
      name: "techList",
      title: "Tech List",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "desktopImage",
      title: "Desktop View Image",
      type: "image",
    },
    {
      name: "desktopMobileImage",
      title: "Desktop & Mobile View Image",
      type: "image",
    },
    {
      name: "backgroundColour",
      title: "Background Colour",
      type: "string",
    },
    {
      name: "reverseLayout",
      title: "Reverse Layout",
      type: "boolean",
    },
  ],
};

export default caseStudy;
