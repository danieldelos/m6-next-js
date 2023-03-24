import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IusersReturn, IUserUpdate } from "../../interfaces/users.interfaces";
import { returnUserSchema } from "../../schemas/users.schemas";

const updateUserService = async (userData: IUserUpdate, IdUser: number): Promise<IusersReturn> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);
  const oldUserData = await userRepo.findOneBy({ id: IdUser });
  const user = userRepo.create({ ...oldUserData, ...userData });
  await userRepo.save(user);
  const updatedUser: any = returnUserSchema.parse(user);
  return updatedUser;
};

export default updateUserService;
