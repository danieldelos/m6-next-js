import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";
import { IContacts } from "../../interfaces/contact.interfaces";
import { manyContactsSchema } from "../../schemas/contact.schemas";

const listContactServices = async (): Promise<IContacts> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);
  const contacts: Array<Contact> = await contactRepo.find({relations:{user: true}, withDeleted: true});
  const returnContacts = manyContactsSchema.parse(contacts);
  return returnContacts;
};

export default listContactServices;
