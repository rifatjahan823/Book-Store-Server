import { SortOrder } from 'mongoose'
import { IBook, IBooksFilters } from './book.interface'
import { Book } from './book.model'
import { paginationOptions } from '../../interface/paginationOptions'
import { calculatePagination } from '../../helpers/paginationHelper'
import { bookSearchableFields } from './constance'
import { IGenericResponse } from '../../interface/common'

// --------------------Create-Book-------------
const createBook = async (payload: IBook): Promise<IBook | null> => {
  const result = await Book.create(payload)
  return result
}


// --------------getAllBook--------------
const getAllBooks = async (
  filters: IBooksFilters,
  paginationOptions: paginationOptions,
): Promise<IGenericResponse<IBook[]>> => {
  const { searchTerm, ...filtersData } = filters
  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(paginationOptions)
  const andConditions = []

  // Search needs $or for searching in specified fields
  if (searchTerm) {
    andConditions.push({
      $or: bookSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  // Filters needs $and to fullfill all the conditions
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    })
  }

  // Dynamic  Sort needs  field to  do sorting
  const sortCondition: { [key: string]: SortOrder } = {}
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {}

  const result = await Book.find(whereConditions)
    .sort(sortCondition)
    .skip(skip)
    .limit(limit)
  const total = await Book.countDocuments(whereConditions)

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}






export const bookService = {
  createBook,
  getAllBooks
}
