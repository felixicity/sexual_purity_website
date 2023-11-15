import { z } from "zod";

export const registerSchema = z.object({
  fullname: z.string().min(5, "Your fullname is required"),
  email: z.string().email(),
  phone: z
    .string()
    .min(11, "Phone number cannot be less than 11 characters")
    .max(14, "Characters cannot be more than 13"),
  gender: z.string(),
  age: z.string(),
  info: z.string(),
  isWatchman: z.string(),
  isAgreement: z.literal(true),
});

export type TregisterForm = z.infer<typeof registerSchema>;
