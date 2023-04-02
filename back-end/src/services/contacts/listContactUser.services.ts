import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"
import { IContactsUser } from "../../interfaces/contact.interfaces"
import { returnContactSchema } from "../../schemas/contact.schemas"

const listContactUserService = async (userId: number): Promise<IContactsUser> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)
    const user = await userRepo.findOne({where:{id:userId}, relations:{contacts: true}})
    const returnContact = returnContactSchema.parse(user)
    return returnContact
}

export default listContactUserService