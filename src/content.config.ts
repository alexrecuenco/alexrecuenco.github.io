import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
	title: z.string(),
	description: z.string(),
	publishDate: z.coerce.date(),
	tags: z.array(z.string()),
	keywords: z.array(z.string()).optional(),
	img: z.string(),
	img_alt: z.string().optional(),
})

export const collections = {
	work: defineCollection({
		loader: glob({ base: './src/content/work', pattern: '**/*.md', }),
		schema: baseSchema,
	}),
	jobs: defineCollection({
		loader: glob({ base: './src/content/jobs', pattern: '**/*.md', }),
		schema: baseSchema,
	}),
};
