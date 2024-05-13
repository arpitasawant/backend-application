import { z } from "zod";
import { config } from "dotenv";

const validator = z.object({
    PORT: z.coerce.number(),
})

export const validateENV = () => {
    try {
        config();
        validator.parse(process.env);
    } catch (e) {
        throw ({ message: "ENV IS NOT CONFIGURED CORRECTLY...", error: e });
    }
};