import { Router } from "express";
import { createUserController, deleteUserController, listUsersController, updateUserController } from "../controllers/user.controllers";
import ensureDataIsValidMiddleWare from "../middlewares/ensureDataIsValid.middlewares";
import ensureTokenIsvalidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureUserExistMiddleware from "../middlewares/ensureUserExist.Middleware";
import { userSchema, userUpdateSchema } from "../schemas/users.schemas";

const userRoutes: Router = Router()

userRoutes.post('', ensureDataIsValidMiddleWare(userSchema), createUserController)
userRoutes.get('', ensureTokenIsvalidMiddleware, listUsersController)
userRoutes.delete('/:id', ensureUserExistMiddleware, deleteUserController)
userRoutes.patch('/:id',ensureDataIsValidMiddleWare(userUpdateSchema), ensureUserExistMiddleware, updateUserController)

export default userRoutes 