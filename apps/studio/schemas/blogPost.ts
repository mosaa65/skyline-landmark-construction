import { defineField, defineType } from "sanity";

export default defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "excerpt", type: "text" }),
    defineField({ name: "category", type: "string" }),
    defineField({ name: "publishedAt", type: "datetime" }),
    defineField({ name: "readTime", type: "string" }),
    defineField({ name: "content", type: "array", of: [{ type: "block" }] }),
  ],
});
