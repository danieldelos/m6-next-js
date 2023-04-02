import { Request, Response, NextFunction } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities";
import { AppError } from "../errors";

const ensureContactExistMiddleware = async(req: Request, res: Response, next: NextFunction )=>{
    const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)
    const findContact = await contactRepo.exist({where: {id: parseInt(req.params.id)}})

    if (!findContact) {
        throw new AppError("Contact not found");
    }

    return next()
}

export default ensureContactExistMiddleware