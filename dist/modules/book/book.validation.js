'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.updateBookZodSchema = exports.createBookZodSchema = void 0
const zod_1 = require('zod')
exports.createBookZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    title: zod_1.z.string({ required_error: 'Title is required' }),
    author: zod_1.z.string({ required_error: 'Author is required' }),
    genre: zod_1.z.string({ required_error: 'Genre is required' }),
    publicationDate: zod_1.z.string({
      required_error: 'PublicationDate is required',
    }),
  }),
})
exports.updateBookZodSchema = zod_1.z.object({
  body: zod_1.z.object({
    title: zod_1.z.string().optional(),
    author: zod_1.z.string().optional(),
    genre: zod_1.z.string().optional(),
    publicationDate: zod_1.z.string().optional(),
  }),
})
