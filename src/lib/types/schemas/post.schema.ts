import { z } from "zod";

export const postSchema = z.object({
  id: z.string().or(z.number()).optional(),
  title: z.string(),
  body: z.string().optional(),
});

export type TPost = z.infer<typeof postSchema>;
