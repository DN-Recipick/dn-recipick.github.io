import { signupSchema, signinSchema } from '@/validation/auth.schema';
import { z } from 'zod';

export type SignupFormType = z.infer<typeof signupSchema>;
export type SigninFormType = z.infer<typeof signinSchema>;
export interface SigninResponse {
  access_token: string;
  user: {
    id: string;
    email: string;
  };
}

export type SignupPayload = Pick<SignupFormType, 'email' | 'password'>;
