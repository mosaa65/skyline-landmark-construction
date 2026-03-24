import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", type: "text" }),
    defineField({ name: "name", type: "string" }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "company", type: "string" }),
    defineField({ name: "order", type: "number" }),
  ],
});
