import Image from "next/image";
import Link from "next/link";

import { arrow } from "@/public/svg-icons";
import { FeaturedProjectCardProps } from "@/utils/interfaces";

const ProjectCardText = ({ project }: FeaturedProjectCardProps) => {
  return (
    <div className="order-1 flex flex-col">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row">
          <p className="mr-1 text-[2rem] font-bold text-white900 lg:text-[3rem]">
            {project.title} -{" "}
            <span className="text-[2rem] font-bold lg:text-[3rem]">
              {project.description}
            </span>
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-5 xs:flex-row">
        <div className="flex w-fit rounded-md bg-white/40 p-2.5">
          <p className="text-xs font-light text-white900 lg:text-sm">
            {project.techList[0]}, {project.techList[1]}
          </p>
        </div>
        <div className="flex w-fit rounded-md bg-white/40 p-2.5">
          <p className="text-xs font-light text-white900 lg:text-sm">
            {project.techList[2]}, {project.techList[3]}
          </p>
        </div>
      </div>
      <Link
        href={`/case-studies/${project?.caseStudyLink}`}
        className="mt-8 flex w-fit items-center"
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
