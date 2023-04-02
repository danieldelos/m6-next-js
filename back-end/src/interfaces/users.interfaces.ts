import { returnMultipleSchema, returnUserSchema, userSchema, userUpdateSchema } from "../schemas/users.schemas";
import { TypeOf, z } from "zod";
import { DeepPartial } from "typeorm";

type IUser = z.infer<typeof userSchema> 
type IreturnUser = z.infer<typeof returnUserSchema> 
type IusersReturn = z.infer<typeof returnMultipleSchema>
type IUserUpdate = DeepPartial<IUser>

export {
    IUser,
    IreturnUser,
    IusersReturn,
    IUserUpdate
}

