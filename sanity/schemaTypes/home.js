export default {
  name: "home",
  title: "Home",
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
      name: "subHeadline",
      title: "Sub Headline",
      type: "string",
    },
    {
      name: "heroSlider",
      title: "Hero Slider",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "alt",
              title: "Alt text",
              type: "string",
            },
            {
              name: "sliderImage",
              title: "Slider Image",
              type: "image",
              options: {
                hotspot: true, // <-- Defaults to false
              },
            },
          ],
        },
      ],
    },
    {
      name: "flooringservice",
      title: "Flooring",
      type: "string",
    },
    {
      name: "flooringDescription",
      title: "Flooring Description",
      type: "string",
    },
    {
      name: "flooringImage",
      title: "Flooring Image",
      type: "image",
      options: {
        hotspot: false, // <-- Defaults to false
      },
    },
    {
      name: "vanities",
      title: "Vanities",
      type: "string",
    },
    {
      name: "vanitiesDescription",
      title: "Vanities Description",
      type: "string",
    },
    {
      name: "vanitiesImage",
      title: "Vanities Images",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "alt",
              title: "Alt text",
              type: "string",
            },
            {
              name: "sliderImage",
              title: "Slider Image",
              type: "image",
              options: {
                hotspot: true, // <-- Defaults to false
              },
            },
          ],
        },
      ],
    },

    {
      name: "bathroom",
      title: "Bathroom",
      type: "string",
    },
    {
      name: "bathroomDescription",
      title: "Bathroom Description",
      type: "string",
    },
    {
      name: "bathroomImage",
      title: "Bathroom Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "kitchen",
      title: "Kitchen",
      type: "string",
    },
    {
      name: "kitchenDescription",
      title: "Kitchen Description",
      type: "string",
    },
    {
      name: "kitchenImage",
      title: "Kitchen Image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },

    {
      name: "whoWeAre",
      title: "Who we are?",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },

    {
      name: "whyChooseUs",
      title: "Why Choose us",
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
