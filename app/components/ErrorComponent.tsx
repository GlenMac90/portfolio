import Link from "next/link";
import Button from "./Button";
import ErrorGraphic from "./contact-page-components/ErrorGraphic";

const ErrorComponent = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-white800 dark:bg-black300">
      <div className="flex flex-col items-center rounded-xl bg-white900 p-4 dark:bg-black200 md:p-6">
        <p className="text-xl font-semibold text-black300 dark:text-white800 md:text-3xl">
          Something went wrong...
        </p>
        <ErrorGraphic />
        <Link href="/" className="flex">
          <Button style="blueButton" additionalStyles="px-6">
            <p>Lets go home</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorComponent;
