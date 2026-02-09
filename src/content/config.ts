/// <reference types="astro/client" />
import { defineCollection, z } from "astro:content";

const heroProjects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(), // Добавь .optional()
    image: z.string(),
    link: z.string().optional(), // Добавь .optional()
  }),
});

export const collections = {
  "hero-slides": heroProjects,
};
