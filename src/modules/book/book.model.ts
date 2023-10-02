import { Schema, model } from 'mongoose'
import { BookModel, IBook } from './book.interface'

// 2. Create a Schema corresponding to the document interface.
const bookSchema = new Schema<IBook, BookModel>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publicationDate: { type:String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

// 3. Create a Model.
export const Book = model<IBook, BookModel>('Book', bookSchema)
