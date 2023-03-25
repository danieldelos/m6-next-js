import { Request, Response } from "express";
import { IContact } from "../interfaces/contact.interfaces";
import createContactService from "../services/contacts/createContacts.services";

const createContactController = async ( req: Request, res: Response ): Promise<Response> => {
  const idUser: number = req.user.id;
  const contactData: IContact = req.body;
  const newContact = await createContactService(idUser, contactData);
  return res.status(201).json(newContact);
};

export { createContactController };
