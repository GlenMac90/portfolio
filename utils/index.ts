import { z } from "zod";

export const truncateString = (str: string, num: number): string => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

export const emailFormSchema = z.object({
  user_name: z.string().nonempty("Name is required"),
  user_email: z
    .string()
    .email("Invalid email format")
    .nonempty("Email is required"),
  message: z
    .string()
    .min(100, "Message should be at least 100 characters long"),
  contact_info: z.string().nonempty("Contact information is required"),
});
