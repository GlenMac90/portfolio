import Image, { StaticImageData } from "next/image";
import { useTheme } from "next-themes";

interface ContactItemProps {
  contact: {
    label: string;
    imageSrc: StaticImageData;
    imageSrcDark: StaticImageData;
    info: string;
  };
}

const ContactItem = ({ contact }: ContactItemProps) => {
  const { theme } = useTheme();
  return (
    <>
      <p className="mt-9 text-lg font-light text-black300 dark:text-white900 md:mt-20 md:text-2xl">
        {contact.label}
      </p>
      <div className="mt-3.5 flex gap-3 md:mt-7">
        <Image
          src={theme === "light" ? contact.imageSrc : contact.imageSrcDark}
          alt={contact.label}
          height={30}
          width={30}
          className="max-w-[1.5rem] md:max-w-[1.875rem]"
        />
        <p className="text-xl font-medium text-black400 dark:text-white800 md:text-2xl">
          {contact.info}
        </p>
      </div>
    </>
  );
};

export default ContactItem;
