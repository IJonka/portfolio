/// <reference types="astro/client" />
import { defineCollection, z } from "astro:content";

const heroProjects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    image: z.string(),
    link: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    link: z.string().optional(),
    tags: z.array(z.string()).optional(),
    order: z.number().int().optional(),
    metaLabel: z.string().optional(),
    year: z.string().optional(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    intro: z.string().optional(),
    siteUrl: z.string().optional(),
    figmaUrl: z.string().optional(),
    problemTitle: z.string().optional(),
    problemText: z.string().optional(),
    solutionTitle: z.string().optional(),
    solutionText: z.string().optional(),
    galleryTop1: z.string().optional(),
    galleryTop2: z.string().optional(),
    galleryGrid1: z.string().optional(),
    galleryGrid2: z.string().optional(),
    galleryBottom: z.string().optional(),
    resultImage: z.string().optional(),
    resultTitle: z.string().optional(),
    resultText: z.string().optional(),
  }),
});

export const collections = {
  "hero-slides": heroProjects,
  projects,
};
