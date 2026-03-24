export const homeQuery = `*[_type == "home"][0]{
  metrics[]{label, value, suffix},
  logos,
  featuredProjects[]->{title, location, type, image},
  differentiators[]{icon, title, description},
  immersiveProject{title, subtitle, stats[]{label, value}, stages[]{title, description}},
  testimonials[]->{quote, name, title, company},
  services[]->{title, description},
  innovationItems[]{title, description}
}`;

export const projectsQuery = `*[_type == "project"]|order(year desc){
  slug,
  title,
  location,
  type,
  year,
  description,
  hero,
  gallery,
  before,
  after,
  stats[]{label, value},
  story[]{title, description},
  milestones[]{title, date, description}
}`;

export const industriesQuery = `*[_type == "industry"]|order(order asc){
  slug,
  title,
  description,
  focus,
  hero,
  stats[]{label, value}
}`;

export const blogPostsQuery = `*[_type == "blogPost"]|order(publishedAt desc){
  slug,
  title,
  excerpt,
  category,
  publishedAt,
  readTime,
  content
}`;

export const jobsQuery = `*[_type == "jobPosting"]|order(title asc){
  slug,
  title,
  location,
  type,
  summary,
  responsibilities,
  requirements
}`;

export const servicesQuery = `*[_type == "service"]|order(order asc){
  title,
  description
}`;

export const testimonialsQuery = `*[_type == "testimonial"]|order(order asc){
  quote,
  name,
  title,
  company
}`;
