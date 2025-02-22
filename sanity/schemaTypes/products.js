export default {
  name: "products",
  title: "Products",
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
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "headline",
        maxLength: 96,
      },
    },
    {
      name: "subHeadline",
      title: "Description",
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
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "categoryTitle",
              title: "Category Title",
              type: "string",
            },
            {
              name: "categorySlug",
              title: "Slug",
              type: "slug",
              options: {
                source: (doc, { parent }) => parent?.categoryTitle || "",
                maxLength: 96,
              },
            },
            {
              name: "categoryDescription",
              title: "Category Description",
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
        },
      ],
    },
  ],
};
