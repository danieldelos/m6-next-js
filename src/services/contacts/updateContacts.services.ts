import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities"
import { IContact, IContactReturnUpdate, IContacts, IContactUpdate } from "../../interfaces/contact.interfaces"
import { contactUpdateSchema, manyContactsSchema } from "../../schemas/contact.schemas"

const updateContactService = async (newContactData: IContactUpdate, idContact: number): Promise<IContactReturnUpdate> =>{
    const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact) 
    const oldContact = await contactRepo.findOneBy({id: idContact})
    const contact = contactRepo.create({...oldContact, ...newContactData})
    await contactRepo.save(contact)
    const updateContact: IContactReturnUpdate = contactUpdateSchema.parse(contact)
    return updateContact

}

export default updateContactService