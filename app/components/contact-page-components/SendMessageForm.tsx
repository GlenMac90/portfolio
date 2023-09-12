import { RefObject, SetStateAction, FC, FormEvent, Dispatch } from "react";

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
const SendMessageForm: FC<SendMessageFormProps> = ({
  form,
  sendEmail,
  removeErrorMessage,
  errorList,
  formData,
  setFormData,
}) => {
  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col lg:w-3/5">
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
      <Button
        submit
        type="blueButton"
        additionalStyles="mt-10 flex h-[3.75rem] w-full justify-center text-sm lg:mt-11 lg:h-[4.3rem] lg:w-[11.75rem] lg:self-end lg:text-lg"
        value="Send"
      >
        Send
      </Button>
    </form>
  );
};

export default SendMessageForm;
