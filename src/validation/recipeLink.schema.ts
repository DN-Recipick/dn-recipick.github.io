import { z } from 'zod';

export const urlKeywordSchema = z
  .string()
  .trim()
  .min(1, { message: '링크를 입력해주세요.' })
  .url({ message: '유효한 링크를 입력해주세요.' })
  .refine((link) => link.includes('youtube.com'), {
    message: '유튜브 링크만 입력해주세요.',
  });

export const recipeLinkScheme = z.object({
  url: urlKeywordSchema,
});

export type RecipeLink = z.infer<typeof recipeLinkScheme>;
