import { defineCollection, z } from "astro:content";

const heroProjects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    link: z.string(),
  }),
});

export const collections = {
  "hero-slides": heroProjects,
};
