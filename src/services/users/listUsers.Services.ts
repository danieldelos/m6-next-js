import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { IusersReturn } from "../../interfaces/users.interfaces";
import { returnMultipleSchema } from "../../schemas/users.schemas";

const listUserService = async (): Promise<IusersReturn> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);
  const findUsers = await userRepo.find();
  const users = returnMultipleSchema.parse(findUsers);
  return users;
};

export { listUserService };
