import React from "react";
import ErrorMessage from "./ErrorMessage";

const sharedStyles =
  "mt-4 h-[3.75rem] rounded-[10px] border-[#CCE1FF] bg-white800 px-4 text-white500 dark:border-[#2C3C56] dark:bg-black300 dark:text-white900 lg:rounded-3xl lg:px-6 lg:text-xl";

interface SendMessageFormProps {
  form: React.RefObject<HTMLFormElement>;
  sendEmail: (e: React.FormEvent<HTMLFormElement>) => void;
  removeErrorMessage: (errorMsg: string) => void;
  errorList: string;
  formData: {
    user_name: string;
    user_email: string;
    message: string;
    contact_info: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      user_name: string;
      user_email: string;
      message: string;
      contact_info: string;
    }>
  >;
}
const SendMessageForm: React.FC<SendMessageFormProps> = ({
  form,
  sendEmail,
  removeErrorMessage,
  errorList,
  formData,
  setFormData,
}) => {
  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col lg:w-3/5">
      <div className="relative flex w-full flex-col">
        <label className="text-lg font-light text-black300 dark:text-white900 lg:text-xl">
          {"What's your name?"}
        </label>
        <input
          type="text"
          name="user_name"
          className={`input_light dark:input_dark lg:h-20 ${sharedStyles}`}
          onChange={(e) =>
            setFormData({ ...formData, user_name: e.target.value })
          }
          onClick={() => removeErrorMessage("Name is required")}
        />
        {errorList.includes("Name is required") && (
          <ErrorMessage message="Name is required" />
        )}
      </div>

      <div className="relative flex w-full flex-col">
        <label className="mt-9 text-lg font-light text-black300 dark:text-white900 lg:mt-12 lg:text-xl">
          {"What's your email?"}
        </label>
        <input
          type="email"
          name="user_email"
          className={`input_light dark:input_dark lg:h-20 ${sharedStyles}`}
          onChange={(e) =>
            setFormData({ ...formData, user_email: e.target.value })
          }
          onClick={() => removeErrorMessage("Invalid email format")}
        />
        {errorList.includes("Invalid email format") && (
          <ErrorMessage message="Invalid email" />
        )}
      </div>

      <div className="relative flex w-full flex-col">
        <label className="mt-9 text-lg font-light text-black300 dark:text-white900 lg:mt-12 lg:text-xl">
          Write something about your project goals and timeframe
        </label>
        <textarea
          name="message"
          className={`textarea_light dark:textarea_dark min-h-[12rem] pt-4  lg:h-20 lg:pt-6 ${sharedStyles}`}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          onClick={() =>
            removeErrorMessage("Message should be at least 100 characters long")
          }
        />
        {errorList.includes(
          "Message should be at least 100 characters long"
        ) && (
          <ErrorMessage message="Message should be at least 100 characters long" />
        )}
      </div>

      <div className="relative flex w-full flex-col">
        <label className="mt-9 text-lg font-light text-black300 dark:text-white900 lg:mt-12 lg:text-xl">
          How to reach out to you back?{" "}
          <span className="text-black400">eg. phone number or email</span>
        </label>
        <textarea
          name="contact_info"
          className={`textarea_light dark:textarea_dark pt-4 lg:min-h-[5rem] lg:pt-6 ${sharedStyles}`}
          onChange={(e) =>
            setFormData({ ...formData, contact_info: e.target.value })
          }
          onClick={() => removeErrorMessage("Contact information is required")}
        />
        {errorList.includes("Contact information is required") && (
          <ErrorMessage message="Contact information is required" />
        )}
      </div>

      <button
        type="submit"
        value="Send"
        className="mt-10 flex h-[3.75rem] w-full items-center justify-center rounded-full bg-primaryLight  text-sm font-semibold text-white900 dark:bg-primaryDark lg:mt-11 lg:h-[4.3rem] lg:w-[11.75rem] lg:self-end lg:text-lg "
      >
        Send
      </button>
    </form>
  );
};

export default SendMessageForm;
