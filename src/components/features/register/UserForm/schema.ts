import { USER_MAX_LENGTH, USER_MIN_LENGTH } from '@/src/constants/validations';
import { betweenLength } from '@/src/helpers/validation';
import { z } from 'zod';

export const schema = z.object({
  userName: z
    .string()
    .min(1, 'ユーザー名を入力してください')
    .superRefine(betweenLength(USER_MIN_LENGTH, USER_MAX_LENGTH)),
});

export type SchemaType = z.infer<typeof schema>;
