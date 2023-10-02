import { z } from 'zod'

export const createBookZodSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    author: z.string({ required_error: 'Author is required' }),
    genre: z.string({ required_error: 'Genre is required' }),
    publicationDate: z.date({ required_error: 'PublicationDate is required' }),
  }),
})
