import { defineField, defineType } from "sanity";

export default defineType({
  name: "home",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "metrics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "value", type: "number" },
            { name: "suffix", type: "string" },
          ],
        },
      ],
    }),
    defineField({ name: "logos", type: "array", of: [{ type: "string" }] }),
    defineField({
      name: "featuredProjects",
      type: "array",
      of: [{ type: "reference", to: [{ type: "project" }] }],
    }),
    defineField({
      name: "differentiators",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", type: "string" },
            { name: "title", type: "string" },
            { name: "description", type: "text" },
          ],
        },
      ],
    }),
    defineField({
      name: "immersiveProject",
      type: "object",
      fields: [
        { name: "title", type: "string" },
        { name: "subtitle", type: "string" },
        {
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
        },
        {
          name: "stages",
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
        },
      ],
    }),
    defineField({
      name: "testimonials",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }],
    }),
    defineField({
      name: "services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
    }),
    defineField({
      name: "innovationItems",
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
  ],
});
