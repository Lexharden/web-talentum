import { defineCollection, z } from 'astro:content';

// Definición del schema para posts del blog
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // Metadatos básicos
    title: z.string(),
    description: z.string(),
    author: z.string().default('Talentum'),

    // Fechas
    publishDate: z.date(),
    updatedDate: z.date().optional(),

    // Categorización
    category: z.enum([
      'reclutamiento',
      'recursos-humanos',
      'psicometria',
      'desarrollo-organizacional',
      'tendencias',
      'consejos',
      'casos-exito',
    ]),
    tags: z.array(z.string()).default([]),

    // Idioma
    lang: z.enum(['es', 'en']).default('es'),

    // SEO
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),

    // Estado
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),

    // Tiempo de lectura (se calcula automáticamente)
    readingTime: z.number().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
