import { IUser } from "../user/user.interface"
import { User } from "../user/user.model"

const signUpUser = async (user: IUser): Promise<IUser | null> => {
    const createUser = User.create(user)
    return createUser
  }



  export const authService={
    signUpUser
  }
  