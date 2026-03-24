import { defineField, defineType } from "sanity";

export default defineType({
  name: "jobPosting",
  title: "Job Posting",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "type", type: "string" }),
    defineField({ name: "summary", type: "text" }),
    defineField({ name: "responsibilities", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "requirements", type: "array", of: [{ type: "string" }] }),
  ],
});
