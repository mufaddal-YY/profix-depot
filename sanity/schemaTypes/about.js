export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "metatitle",
      title: "Meta Title",
      type: "string",
    },
    {
      name: "metaDescription",
      title: "Meta Description",
      type: "string",
    },
    {
      name: "metaKeywords",
      title: "Meta Keywords",
      type: "string",
    },
    {
      name: "headline",
      title: "Headline",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "sectionImage",
      title: "Section Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "whyUsSectionImage",
      title: "Why Us Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "whyUsSectionDescription",
      title: "Why Us Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "differenceImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "differenceDescription",
      title: "Difference Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
