import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "@/lib/sanity/client";

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export const urlFor = (source: unknown) =>
  builder ? builder.image(source).auto("format").fit("max") : null;
