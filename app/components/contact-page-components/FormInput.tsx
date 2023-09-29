import ErrorMessage from "./ErrorMessage";
import { FormInputProps } from "@/utils/interfaces";

const sharedStyles =
  "mt-4 h-[3.75rem] rounded-[10px] bg-white800 px-4 text-white500 dark:bg-black300 dark:text-white900 lg:rounded-3xl lg:px-6 lg:text-xl";

const FormInput = ({
  label,
  input = false,
  email = false,
  inputName,
  setFormData,
  formData,
  removeErrorMessage,
  errorList,
  errorMessage,
  marginTop = true,
}: FormInputProps) => {
  return (
    <div className="relative flex w-full flex-col">
      <label
        className={`${
          marginTop && "mt-9 lg:mt-12"
        } text-lg font-light text-black300 dark:text-white900 lg:text-xl`}
      >
        {label}
      </label>
      {input ? (
        <input
          type={email === true ? "email" : "text"}
          name={inputName}
          className={`input_light dark:input_dark lg:h-20 ${sharedStyles}`}
          onChange={(e) =>
            setFormData({ ...formData, [inputName]: e.target.value })
          }
          onClick={() => removeErrorMessage(errorMessage)}
        />
      ) : (
        <textarea
          name={inputName}
          className={`textarea_light dark:textarea_dark min-h-[12rem] pt-4  lg:h-20 lg:pt-6 ${sharedStyles}`}
          onChange={(e) =>
            setFormData({ ...formData, [inputName]: e.target.value })
          }
          onClick={() => removeErrorMessage(errorMessage)}
        />
      )}
      {errorList.includes(errorMessage) && (
        <ErrorMessage message={errorMessage} />
      )}
    </div>
  );
};

export default FormInput;
