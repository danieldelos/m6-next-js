import { z } from "zod";

const contactschema = z.object({
    id: z.number(),
    contactName: z.string().min(3).max(45),
    contactEmail: z.string().email().min(10).max(45),
    contactPhone:  z.string().min(4).max(15),
    createAt: z.string()
})

export {
    contactschema
}