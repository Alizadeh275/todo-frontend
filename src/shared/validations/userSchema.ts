import { z } from "zod";

export const userSchema = z.object({
    name: z
        .string()
        .nonempty("نام الزامی است") // first check if empty
        .min(3, "نام باید حداقل ۳ کاراکتر باشد"), // then check min length
    email: z.email("ایمیل معتبر نیست"),
    bio: z.string().optional(),
    avatarUrl: z.url().nullable().optional(),
});

export type UserSchema = z.infer<typeof userSchema>;
