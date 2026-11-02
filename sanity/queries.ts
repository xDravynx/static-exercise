import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(
  `*[_type == "project" && defined(slug.current)] | order(date desc){ _id, title, "slug": slug.current, date, description, coverImage }`
);
