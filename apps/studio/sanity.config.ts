import { defineConfig } from "sanity";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "construction-studio",
  title: "Construction Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [],
  schema: {
    types: schemaTypes,
  },
});
