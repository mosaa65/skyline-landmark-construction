import { homeData, services as fallbackServices, testimonials as fallbackTestimonials } from "@/data/home";
import { homeData as homeDataAr } from "@/data/home-ar";
import { projects as fallbackProjects } from "@/data/projects";
import { industries as fallbackIndustries } from "@/data/industries";
import { blogPosts as fallbackPosts } from "@/data/blog";
import { jobs as fallbackJobs } from "@/data/careers";
import { sanityClient, hasSanity } from "@/lib/sanity/client";
import {
  homeQuery,
  projectsQuery,
  industriesQuery,
  blogPostsQuery,
  jobsQuery,
  servicesQuery,
  testimonialsQuery,
} from "@/lib/sanity/queries";

export async function getHomeData(locale: string = "en") {
  const fallbackData = locale === "ar" ? homeDataAr : homeData;
  if (!hasSanity || !sanityClient) return fallbackData;
  try {
    const data = await sanityClient.fetch(homeQuery);
    return { ...fallbackData, ...data };
  } catch {
    return fallbackData;
  }
}

import { projects as fallbackProjectsAr } from "@/data/projects-ar";

export async function getProjects(locale: string = "en") {
  const fallback = locale === "ar" ? fallbackProjectsAr : fallbackProjects;
  if (!hasSanity || !sanityClient) return fallback;
  try {
    const data = await sanityClient.fetch(projectsQuery);
    return data ?? fallback;
  } catch {
    return fallback;
  }
}

export async function getIndustries() {
  if (!hasSanity || !sanityClient) return fallbackIndustries;
  try {
    const data = await sanityClient.fetch(industriesQuery);
    return data ?? fallbackIndustries;
  } catch {
    return fallbackIndustries;
  }
}

import { blogPosts as fallbackPostsAr } from "@/data/blog-ar";

export async function getBlogPosts(locale: string = "en") {
  const fallback = locale === "ar" ? fallbackPostsAr : fallbackPosts;
  if (!hasSanity || !sanityClient) return fallback;
  try {
    const data = await sanityClient.fetch(blogPostsQuery);
    if (!data) return fallback;
    return data.map((post: any) => ({
      ...post,
      date: post.publishedAt
        ? new Date(post.publishedAt).toLocaleDateString(locale === "ar" ? "ar-EG" : "en-US", {
            year: "numeric",
            month: "long",
          })
        : post.date,
    }));
  } catch {
    return fallback;
  }
}

import { jobs as fallbackJobsAr } from "@/data/careers-ar";

export async function getJobs(locale: string = "en") {
  const fallback = locale === "ar" ? fallbackJobsAr : fallbackJobs;
  if (!hasSanity || !sanityClient) return fallback;
  try {
    const data = await sanityClient.fetch(jobsQuery);
    return data ?? fallback;
  } catch {
    return fallback;
  }
}

export async function getServices() {
  if (!hasSanity || !sanityClient) return fallbackServices;
  try {
    const data = await sanityClient.fetch(servicesQuery);
    return data ?? fallbackServices;
  } catch {
    return fallbackServices;
  }
}

export async function getTestimonials() {
  if (!hasSanity || !sanityClient) return fallbackTestimonials;
  try {
    const data = await sanityClient.fetch(testimonialsQuery);
    return data ?? fallbackTestimonials;
  } catch {
    return fallbackTestimonials;
  }
}
