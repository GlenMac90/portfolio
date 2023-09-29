import { WorkProcessSymbolType } from "@/types";
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
  message: z.string().min(20, "Message should be at least 20 characters long"),
  contact_info: z.string().nonempty("Contact information is required"),
});

export const reorderWorkProcesses = (
  workProcesses: WorkProcessSymbolType[]
): WorkProcessSymbolType[] => {
  const desiredOrder = [
    "Definition",
    "Design",
    "Planning",
    "Development",
    "Deployment",
  ];

  return workProcesses.sort((a, b) => {
    return desiredOrder.indexOf(a.title) - desiredOrder.indexOf(b.title);
  });
};
