import { z } from "zod";
import { hashSync } from "bcryptjs";

const userSchema = z.object({
    name: z.string().min(3).max(45),
    email: z.string().email().min(10).max(45),
    password: z.string().min(4).max(20).transform((pass)=>{
        return hashSync(pass, 10)
    }),
    phone: z.string().min(4).max(15)
})

const userUpdateSchema = userSchema.partial()

const returnUserSchema = userSchema.extend({
    id: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    deletedAt: z.date().nullable()
}).omit({password: true})

const returnMultipleSchema = returnUserSchema.array()

export {
    userSchema,
    returnUserSchema,
    returnMultipleSchema,
    userUpdateSchema
}