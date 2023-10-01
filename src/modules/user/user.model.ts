import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser, UserModel>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: 0 },
    needsPasswordChange: { type: Boolean, default: true },
    name: {
      type: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
      },
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

// 3. Create a Model.
export const User = model<IUser, UserModel>('User', userSchema)
