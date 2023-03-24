import { IreturnUser, IUser } from "../../interfaces/users.interfaces";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { returnUserSchema } from "../../schemas/users.schemas";

const createUserService = async (userData: IUser): Promise<IreturnUser> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);
  const user = userRepo.create(userData);
  await userRepo.save(user);
  const newUser = returnUserSchema.parse(user);
  return newUser;
};

export default createUserService;
