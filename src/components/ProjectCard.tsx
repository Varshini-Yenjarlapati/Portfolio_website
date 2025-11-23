import { motion } from "framer-motion";
import { FaGithub, FaEye } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink?: string;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  githubLink,
  liveLink,
  className = "",
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`rounded-2xl shadow-lg overflow-hidden w-[270px] md:w-[270px] bg-white border-[12px] border-white text-[#000000] ${className}`}
    >
      {/* Image with overlay */}
      <div className="relative w-full overflow-hidden h-44 md:h-52 group">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 transition-opacity bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white transition hover:text-gray-300"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white transition hover:text-gray-300"
            title="View Project"
          >
            <FaEye />
          </a>
        </div>
      </div>

      {/* Text Content */}
      <div className="p-5">
        <h3 className="mb-1 text-base font-semibold text-gray-800 sm:text-lg sm:mb-2">{title}</h3>
        <p className="text-xs italic text-gray-600 sm:text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
