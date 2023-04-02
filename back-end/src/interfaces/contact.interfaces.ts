import { contactSchema, contactUpdateSchema, manyContactsSchema, returnContactSchema } from "../schemas/contact.schemas";
import { z } from "zod";
import { DeepPartial } from "typeorm";

type IContact = z.infer<typeof contactSchema>;
type IContacts = z.infer<typeof manyContactsSchema>
type IContactsUser = z.infer<typeof returnContactSchema>
type IContactReturnUpdate = z.infer<typeof contactUpdateSchema>;
type IContactUpdate = DeepPartial<IContacts>

export { IContact, IContacts, IContactsUser, IContactReturnUpdate, IContactUpdate };


