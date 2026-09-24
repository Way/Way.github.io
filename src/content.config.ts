import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { FIGURE_IDS, RESSORT_IDS } from './consts';

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    prompt: z.string().optional(),
    ressort: z.enum(RESSORT_IDS),
    kicker: z.string().optional(),
    tags: z.array(z.string()).optional(),
    glance: z.array(z.string()).max(3).optional(),
    figure: z.enum(FIGURE_IDS).optional(),
    stat: z
      .object({
        value: z.string(),
        text: z.string(),
        parts: z.tuple([z.number().int(), z.number().int()]).optional(),
      })
      .optional(),
    visualTheme: z
      .enum([
        'neural-network',
        'mesh',
        'towers',
        'growth',
        'vertical-stack',
        'roundtable',
        'pipeline',
        'swarm',
        'blueprint',
        'signal',
        'cockpit',
        'scaffold',
        'orbit',
        'constellation',
      ])
      .optional(),
  }),
});

export const collections = { blog };
