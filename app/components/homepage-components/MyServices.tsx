import ServicesCard from "./ServicesCard";
import { servicesProvided } from "@/constants";

const MyServices = () => {
  return (
    <section className="flex w-full flex-col items-center bg-white900 p-12 dark:bg-black300 md:bg-white800 xl:px-20 xl:py-[4.5rem]">
      <div className="flex max-w-7xl flex-col items-center">
        <div className="flex flex-col lg:flex-row">
          <div className="flex">
            <p className="mr-4 text-[2.625rem] font-bold text-black200 dark:text-white900 md:text-[4rem]">
              What
            </p>
            <div className="relative flex w-fit flex-col self-center">
              <p className="z-20 truncate whitespace-nowrap text-[2.625rem] font-bold text-black200 dark:text-white900 md:text-[4rem]">
                service
              </p>
              <div className="absolute z-10 h-[1.2rem] w-full translate-y-[2.38rem] bg-orange-200 md:h-[1.8rem] md:translate-y-[3.625rem]" />
            </div>
          </div>
          <p className="ml-4 text-[2.625rem] font-bold text-black200 dark:text-white900 md:text-[4rem]">
            do I provide
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-8 md:grid md:grid-cols-2 xl:flex xl:flex-row">
          {servicesProvided.map((service) => (
            <ServicesCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyServices;
