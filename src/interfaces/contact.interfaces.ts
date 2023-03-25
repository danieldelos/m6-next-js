import { contactschema } from "../schemas/contact.schemas";
import { z } from "zod";

type IContact = z.infer<typeof contactschema>;

export { IContact };
