import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities";

const deleteContactservice = async (idContact: number): Promise<void> => {
  const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact);
  const findContact = await contactRepo.findOne({ where: { id: idContact } });
  await contactRepo.softRemove(findContact!);
};

export default deleteContactservice;
