import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Contact, User } from "../../entities"
import { IContact } from "../../interfaces/contact.interfaces"

const createContactService = async (idUser: number, contactData: IContact): Promise<any> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)
    const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)

    const user: User | null = await userRepo.findOneBy({id: idUser})
    const contact = contactRepo.create({...contactData, user: user!})
    await contactRepo.save(contact) 
    return contact
}

export default createContactService