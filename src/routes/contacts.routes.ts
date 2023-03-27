import { Router } from "express";
import { createContactController, deleteContactController, listContactController, listContactUserController, updateContactController } from "../controllers/contacts.controllers";
import ensureTokenIsvalidMiddleware from "../middlewares/ensureTokenIsValid.middleware";
import ensureUserExistMiddleware from "../middlewares/ensureUserExist.Middleware";

const contactsRoutes: Router = Router()

contactsRoutes.post('', ensureTokenIsvalidMiddleware, createContactController)
contactsRoutes.get('', ensureTokenIsvalidMiddleware, listContactController)
contactsRoutes.get('/users/:id', ensureUserExistMiddleware, ensureTokenIsvalidMiddleware, listContactUserController)
contactsRoutes.patch('/:id', ensureTokenIsvalidMiddleware, updateContactController)
contactsRoutes.delete('/:id', ensureTokenIsvalidMiddleware, deleteContactController)


export default contactsRoutes