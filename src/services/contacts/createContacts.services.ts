import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Contact, User } from "../../entities"
import { IContact } from "../../interfaces/contact.interfaces"
import { contactSchema } from "../../schemas/contact.schemas";

const createContactService = async (idUser: number, contactData: IContact): Promise<IContact> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)
    const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)
    const user: User | null = await userRepo.findOneBy({id: idUser})
    const contact: Contact = contactRepo.create({...contactData, user: user!})
    await contactRepo.save(contact) 
    const returnContact = contactSchema.parse(contact)
    return returnContact
}

export default createContactService