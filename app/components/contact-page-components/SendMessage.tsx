"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ZodError, z } from "zod";

import SendMessageForm from "./SendMessageForm";

interface SendMessageProps {
  setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const SendMessage: React.FC<SendMessageProps> = ({ setShowSuccess }) => {
  const [errorList, setErrorList] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
    contact_info: "",
  });

  const form = useRef<HTMLFormElement>(null);

  const emailFormSchema = z.object({
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

  const removeErrorMessage = (errorMsg: string) => {
    setErrorList((prevErrors) => prevErrors.replace(errorMsg, "").trim());
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      emailFormSchema.parse({
        user_name: e.currentTarget.user_name.value,
        user_email: e.currentTarget.user_email.value,
        message: e.currentTarget.message.value,
        contact_info: e.currentTarget.contact_info.value,
      });

      if (form.current) {
        emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID as string,
          form.current,
          process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
        );
        setShowSuccess(true);
      } else {
        console.error("Form reference is null.");
      }
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessage = error.errors.map((err) => err.message).join("\n");
        setErrorList(errorMessage);
      } else {
        console.error("An unknown error occurred:", error);
      }
    }
  };

  return (
    <SendMessageForm
      form={form}
      sendEmail={sendEmail}
      removeErrorMessage={removeErrorMessage}
      errorList={errorList}
      formData={formData}
      setFormData={setFormData}
    />
  );
};

export default SendMessage;
