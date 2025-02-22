export default {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "customerName",
      title: "Customer Name",
      type: "string",
    },
    {
      name: "review",
      title: "Testimonial",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
