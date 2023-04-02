import { Request, Response } from "express";
import { IContact } from "../interfaces/contact.interfaces";
import createContactService from "../services/contacts/createContacts.services";
import deleteContactservice from "../services/contacts/deleteContacts.services";
import listContactServices from "../services/contacts/listContacts.services";
import listContactUserService from "../services/contacts/listContactUser.services";
import updateContactService from "../services/contacts/updateContacts.services";

const createContactController = async ( req: Request, res: Response ): Promise<Response> => {
  const idUser: number = req.user.id;
  const contactData: IContact = req.body;
  const newContact = await createContactService(idUser, contactData);
  return res.status(201).json(newContact);
};

const listContactController = async (req: Request, res: Response ): Promise<Response> => {
  const contacts = await listContactServices()
  return res.json(contacts)
  
}
const listContactUserController = async (req: Request, res: Response ): Promise<Response> => {
  const userId: number = parseInt(req.params.id)
  const contacts = await listContactUserService(userId)
  return res.json(contacts)
}

const updateContactController = async (req: Request, res: Response): Promise<Response> => {
  const contactData = req.body
  const idContact = parseInt(req.params.id)
  const updateContact = await updateContactService(contactData, idContact)
  return res.json(updateContact)
}

const deleteContactController = async (req: Request, res: Response) =>{
  const contact = deleteContactservice(parseInt(req.params.id))
  return res.status(204).send()
}

export { createContactController, listContactController, listContactUserController, updateContactController, deleteContactController };
