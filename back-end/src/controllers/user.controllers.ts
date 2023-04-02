import { Request, Response } from "express";
import { IUser } from "../interfaces/users.interfaces";
import deleteUserService from "../services/users/deleteUser.services";
import { listUserService } from "../services/users/listUsers.Services";
import updateUserService from "../services/users/updateUser.services";
import createUserService from "../services/users/users.services";

const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const userData: IUser = req.body;
  const newUser = await createUserService(userData);
  return res.status(201).json(newUser);
};

const listUsersController = async (req: Request, res: Response): Promise<Response> => {
  const users = await listUserService();
  return res.json(users);
};

const deleteUserController = async (req: Request, res: Response): Promise<Response> =>{
  const user = await deleteUserService(parseInt(req.params.id))
  return res.status(204).send()
}

const updateUserController = async (req: Request, res: Response): Promise<Response> =>{
  const userData = req.body
  const idUser = parseInt(req.params.id)
  const updateUser = await updateUserService(userData, idUser)

  return res.json(updateUser)
}

export { createUserController, listUsersController, deleteUserController, updateUserController };
