import Link from "next/link";
import Button from "./Button";
import ErrorGraphic from "./contact-page-components/ErrorGraphic";
import UnderlinedText from "./UnderlinedText";

const ErrorComponent = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-white800 dark:bg-black300">
      <div className="flex flex-col items-center rounded-xl bg-white900 p-4 dark:bg-black200 md:p-6">
        <UnderlinedText text="Uh oh..." additionalStyles="flex" />
        <p className="mt-2 text-xl font-semibold text-black300 dark:text-white800">
          Something went wrong
        </p>
        <ErrorGraphic />
        <Link href="/" className="flex">
          <Button style="blueButton" additionalStyles="px-8 py-2 text-xl">
            <p>Lets go home</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorComponent;
