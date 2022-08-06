export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "Short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of a Restaurant",
    },
    {
      name: "longt",
      type: "number",
      title: "Longitude of a Restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Address of a Restaurant",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Rating of a Restaurant (between 1 and 5)",
      validation: (Rule) => Rule.required().min(1).max(5),
    },
    {
      name: "genre",
      type: "string",
      title: "category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
