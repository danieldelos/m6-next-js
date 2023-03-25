import { Router } from "express";
import { createContactController } from "../controllers/contacts.controllers";
import ensureTokenIsvalidMiddleware from "../middlewares/ensureTokenIsValid.middleware";

const contactsRoutes: Router = Router()

contactsRoutes.post('', ensureTokenIsvalidMiddleware, createContactController)

export default contactsRoutes