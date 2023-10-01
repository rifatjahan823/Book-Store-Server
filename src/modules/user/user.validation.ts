import { z } from 'zod'

export const createUserZodSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required' }),
    password: z.string({ required_error: 'Password is required' }),
    name: z.object({
      firstName: z.string({ required_error: 'FirstName is required' }),
      lastName: z.string({ required_error: 'LastName is required' }),
    }),
  }),
})