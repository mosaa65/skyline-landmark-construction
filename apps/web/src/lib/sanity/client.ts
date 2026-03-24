import { createClient } from "@sanity/client";
import { sanityConfig } from "@/lib/sanity/config";

export const hasSanity = Boolean(sanityConfig.projectId);

export const sanityClient = hasSanity
  ? createClient({
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
      apiVersion: sanityConfig.apiVersion,
      useCdn: sanityConfig.useCdn,
      token: process.env.SANITY_READ_TOKEN,
    })
  : null;
