import { defineCollection, z } from "astro:content";

const heroProjects = defineCollection({
  type: "content",
  schema: z.object({
    image: z.string(),
    title: z.string().optional(), // Добавили optional
    link: z.string().optional(), // Добавили optional
    alt: z.string().optional(), // Добавили alt, который был в yaml
  }),
});

export const collections = {
  "hero-slides": heroProjects,
};
