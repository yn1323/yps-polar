import { schema as SigninSchema } from '@/src/components/features/signin/SigninForm/schema';
import {
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from '@/src/constants/validations';
import { betweenLength } from '@/src/helpers/validation';
import { z } from 'zod';

export const schema = z
  .object({
    mail: SigninSchema.shape.mail,
    password: SigninSchema.shape.password,
    passwordConfirmation: z
      .string()
      .superRefine(betweenLength(PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH)),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'パスワードが一致しません',
    path: ['passwordConfirmation'],
  });
