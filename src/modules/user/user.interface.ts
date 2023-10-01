import { Model } from 'mongoose'

// 1. Create an interface representing a document in MongoDB.
type UserName = {
  firstName: string
  lastName: string
}
export type IUser = {
  name: UserName
  email: string
  password: string
  needsPasswordChange: true | false
}

// Create a new Model type that knows about IUserMethods...
export type UserModel = Model<IUser, Record<string, unknown>>
