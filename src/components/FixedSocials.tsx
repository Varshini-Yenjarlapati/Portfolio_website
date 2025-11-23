import { SiLinkedin, SiGithub } from "react-icons/si";

const FixedSocials = () => {
  return (
    <div className="fixed bottom-0 z-50 flex-col items-center hidden gap-4 md:flex left-6">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/varshini-yenjarlapati"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 transition-transform duration-300 rounded-full hover:bg-[#F2C6C2]"
      >
        <SiLinkedin className="w-6 h-6 text-gray-700" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Varshini-Yenjarlapati"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 transition-transform duration-300 rounded-full hover:bg-[#F2C6C2]"
      >
        <SiGithub className="w-6 h-6 text-gray-700" />
      </a>

      {/* Decorative Line */}
      <div className="w-[1px] h-2 bg-gray-400 mt-2" />
    </div>
  );
};


export default FixedSocials;
