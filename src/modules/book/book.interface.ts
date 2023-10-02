import { Model } from 'mongoose'

export interface IBook {
  title: string
  author: string
  genre: string
  publicationDate: string
}

// Create a new Model type that knows about IUserMethods...
export type BookModel = Model<IBook, Record<string, unknown>>

export type IBooksFilters = {
  searchTerm?: string
  genre: string
  publicationDate: string
}
