import Image from "next/image";
import Link from "next/link";

import { arrow } from "@/public/svg-icons";
import { FeaturedProjectCardProps } from "@/utils/interfaces";

const ProjectCardText = ({
  project,
  reverseLayout,
}: FeaturedProjectCardProps) => {
  const techList = project.techList;
  return (
    <div
      className={`order-1 flex flex-col px-8 lg:w-2/5 lg:px-0 ${
        reverseLayout ? "lg:pr-[4rem]" : "lg:pl-[4rem]"
      }`}
    >
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row">
          <p className="mr-1 text-[2rem] font-bold text-white900 lg:text-[3rem]">
            {project.title} - {project.description}
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-5 xs:flex-row">
        <div className="flex w-fit rounded-md bg-white/40 p-2.5">
          <p className="text-xs font-light text-white900 lg:text-sm">
            {techList[0]}, {techList[1]}
          </p>
        </div>
        <div className="flex w-fit rounded-md bg-white/40 p-2.5">
          <p className="text-xs font-light text-white900 lg:text-sm">
            {techList[2]}, {techList[3]}
          </p>
        </div>
      </div>
      <Link
        href={`/case-studies/${project?.caseStudyLink}`}
        className="mt-8 flex w-fit items-center gap-2"
      >
        <p className="text-lg font-semibold text-white900">
          See Detail Project
        </p>
        <Image src={arrow} alt="arrow image" />
      </Link>
    </div>
  );
};

export default ProjectCardText;
