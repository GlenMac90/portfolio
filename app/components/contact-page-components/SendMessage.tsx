"use client";

import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { ZodError } from "zod";
import { toast } from "react-toastify";

import SendMessageForm from "./SendMessageForm";
import { emailFormSchema } from "@/utils";
import { SendMessageProps } from "@/utils/interfaces";

const SendMessage = ({ setShowSuccess }: SendMessageProps) => {
  const sendFailure = () => toast.error("Unable to send message at this time");
  const [isSending, setIsSending] = useState(false);
  const [errorList, setErrorList] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
    contact_info: "",
  });

  const form = useRef<HTMLFormElement>(null);

  const removeErrorMessage = (errorMsg: string) => {
    setErrorList((prevErrors) => prevErrors.replace(errorMsg, "").trim());
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      emailFormSchema.parse({
        user_name: e.currentTarget.user_name.value,
        user_email: e.currentTarget.user_email.value,
        message: e.currentTarget.message.value,
        contact_info: e.currentTarget.contact_info.value,
      });

      if (form.current) {
        setIsSending(true);
        const response = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID as string,
          form.current,
          process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
        );
        if (response.status === 200) {
          setShowSuccess(true);
        } else {
          sendFailure();
          setIsSending(false);
        }
      } else {
        sendFailure();
        setIsSending(false);
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
      isSending={isSending}
    />
  );
};

export default SendMessage;
