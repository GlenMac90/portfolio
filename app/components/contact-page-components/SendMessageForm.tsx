"use client";

import { motion } from "framer-motion";
import { RefObject, SetStateAction, FormEvent, Dispatch } from "react";

import FormInput from "./FormInput";
import Button from "../Button";
import { inputFields } from "@/constants";

type FormData = {
  user_name: string;
  user_email: string;
  message: string;
  contact_info: string;
};
interface SendMessageFormProps {
  form: RefObject<HTMLFormElement>;
  sendEmail: (e: FormEvent<HTMLFormElement>) => void;
  removeErrorMessage: (errorMsg: string) => void;
  errorList: string;
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
}
const SendMessageForm = ({
  form,
  sendEmail,
  removeErrorMessage,
  errorList,
  formData,
  setFormData,
}: SendMessageFormProps) => {
  return (
    <motion.form
      initial={{ y: "15%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        y: { duration: 0.5 },
        opacity: { duration: 0.5 },
      }}
      viewport={{ once: true }}
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col lg:w-3/5"
    >
      {inputFields.map((field) => (
        <FormInput
          key={field.inputName}
          label={field.label}
          input={field.input}
          email={field.email}
          inputName={field.inputName}
          setFormData={setFormData}
          formData={formData}
          removeErrorMessage={removeErrorMessage}
          errorList={errorList}
          errorMessage={field.errorMessage}
          marginTop={field.marginTop}
        />
      ))}
      <motion.div className="flex lg:self-end" whileHover={{ scale: 1.05 }}>
        <Button
          type="submit"
          style="blueButton"
          additionalStyles="mt-10 flex h-[3.75rem] w-full justify-center text-sm lg:mt-11 lg:h-[4.3rem] lg:w-[11.75rem] lg:text-lg"
          value="Send"
        >
          Send
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default SendMessageForm;
