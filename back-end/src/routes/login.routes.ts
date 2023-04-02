import { Router } from "express";
import createLoginControler from "../controllers/login.controllers";
import ensureDataIsValidMiddleWare from "../middlewares/ensureDataIsValid.middlewares";
import { createLoginSchema } from "../schemas/login.schemas";

const loginRoutes: Router = Router()

loginRoutes.post('', ensureDataIsValidMiddleWare(createLoginSchema), createLoginControler)

export default loginRoutes