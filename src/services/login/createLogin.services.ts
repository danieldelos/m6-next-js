import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { ILogin } from "../../interfaces/login.interfaces";
import "dotenv/config";
import process from "process";
import { Repository } from "typeorm";

const createLoginservice = async (loginData: ILogin): Promise<string> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepo.findOneBy({
    email: loginData.email,
  });
  if (!user) {
    throw new AppError("Wrong email or password", 401);
  }

  const passwordMatch = await compare(loginData.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Wrong email or password", 401);
  }

  const token: string = jwt.sign({ phone: user.phone }, process.env.SECRET_KEY!, {
    expiresIn: '24h',
    subject: String(user.id),
  });

  return token;
};

export default createLoginservice;
