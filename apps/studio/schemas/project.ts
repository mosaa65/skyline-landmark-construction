import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "type", type: "string" }),
    defineField({ name: "year", type: "number" }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "hero", type: "image" }),
    defineField({ name: "gallery", type: "array", of: [{ type: "image" }] }),
    defineField({ name: "before", type: "image" }),
    defineField({ name: "after", type: "image" }),
    defineField({
      name: "stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "value", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "story",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "description", type: "text" },
          ],
        },
      ],
    }),
    defineField({
      name: "milestones",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "date", type: "string" },
            { name: "description", type: "text" },
          ],
        },
      ],
    }),
  ],
});
