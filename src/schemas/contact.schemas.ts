import { z } from "zod";
import { returnUserSchema } from "./users.schemas";

const contactSchema = z.object({
  id: z.number(),
  contactName: z.string().min(3).max(45),
  contactEmail: z.string().email().min(10).max(45),
  contactPhone: z.string().min(4).max(15),
  createAt: z.date().transform((value) => value.toISOString()),
  user: returnUserSchema,
});

const contactUpdateSchema = contactSchema.partial()
const manyContactsSchema = contactSchema.array();

const manyContactsUserSchema = contactSchema
  .omit({
    user: true,
  })
  .array();

const returnContactSchema = returnUserSchema.extend({
  contacts: manyContactsUserSchema,
});

export { contactSchema, manyContactsSchema, returnContactSchema, contactUpdateSchema };
