import { motion } from "framer-motion";
import Link from "next/link";

import Button from "../Button";
import {
  DemoButton,
  ArrowButton,
  GitHubButton,
} from "../light-dark-mode-buttons";
import { useCaseStudyContext } from "@/app/contexts/CaseStudyContext";

const CaseStudyWebsiteLinks = () => {
  const { mainProject } = useCaseStudyContext();

  return (
    <motion.div
      initial={{ y: "10%", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        y: { duration: 0.5, delay: 1 },
        opacity: { duration: 0.5, delay: 1 },
      }}
      className="mb-12 mt-6 flex justify-between gap-10 md:mb-16 md:mt-[4.5rem] md:gap-24"
    >
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link href={mainProject?.websiteURL} className="flex">
          <Button>
            <DemoButton />
            <p>Demo Site</p>
            <ArrowButton />{" "}
          </Button>
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link href={mainProject?.sourceCode} className="flex">
          <Button>
            <GitHubButton />
            <p>Source Code</p>
            <ArrowButton />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default CaseStudyWebsiteLinks;
