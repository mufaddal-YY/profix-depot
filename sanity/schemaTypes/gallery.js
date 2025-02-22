export default {
  name: "gallery",
  title: "Gallery",
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
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "imageTitle",
              title: "Image Title",
              type: "string",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true, // <-- Defaults to false
              },
            },
          ],
        },
      ],
    },
  ],
};
