import { Request, Response } from "express";
import { ILogin } from "../interfaces/login.interfaces";
import createLoginservice from "../services/login/createLogin.services";

const createLoginControler = async (req: Request, res: Response) => {
  const loginData: ILogin = req.body;
  const token = await createLoginservice(loginData);
  return res.json({ token: token });
};

export default createLoginControler;
