import { motion } from "framer-motion";
import { logos } from "../constants/images";
const SkillsWork = () => {
  const logoSizeClass = "w-20 h-20"; 

// const frontendLogos = Object.entries(logos).map(([key, src]) => ({
//     src,
//     alt: key.replace("Logo", ""), 
//   }));


  return (
    <section
  id="skills"
  className="flex flex-col items-center justify-center min-h-screen px-4 py-16"
>
  <h1 className="pb-12 text-3xl italic font-semibold text-center text-black md:text-5xl font-playfair">
   Skills <span className="font-light"> & </span>Experience
  </h1>
  

  <div className="relative flex flex-col flex-wrap justify-center w-full max-w-6xl md:flex-row md:items-start">
    
<div className="flex flex-col items-center justify-center flex-1 w-full gap-6 p-6 md:flex-row md:items-center md:justify-center md:border-r border-dotted border-[#cecdcd]">

  {/* Logos container */}
  <div className="flex flex-wrap items-center justify-center w-full gap-6">
  {logos.map((logo, i) => (
    <div key={i} className="flex flex-col items-center">
    <motion.img
      src={logo.src}
      alt={logo.alt}
      className={`rounded-full shadow-md bg-white p-2 ${logoSizeClass} h-auto`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      viewport={{ once: false }}
    />
    <p className="mt-3 text-xs font-medium text-gray-700 capitalize">
      {logo.alt}
    </p>
    </div>
  ))}
</div>


 
  
</div>


  
    <div className="flex flex-col items-center flex-1 p-6 mt-8 text-center md:mt-0">
  

  <div className="flex flex-col w-full max-w-md gap-4">
    {/* Experience Card */}
    <div className="p-4 text-left bg-[#D9D9D9] border shadow-md rounded-2xl">
      <h3 className="text-base font-semibold text-gray-800 sm:text-lg sm:mb-2">Frontend Developer Intern – GBCS</h3>
      <p className="mt-1 text-sm italic text-gray-600">
        July 2025 – Present | Designed and developed React interfaces, improving UI workflow efficiency by 40%.
      </p>
    </div>

    <div className="p-4 text-left bg-[#D9D9D9] border shadow-md rounded-2xl">
      <h3 className="text-base font-semibold text-gray-800 sm:text-lg sm:mb-2">Associate Software Developer – Capgemini</h3>
      <p className="mt-1 text-sm italic text-gray-600">
        Aug 2021 – July 2023 | Built AI-integrated web apps using React, Node.js & Tailwind CSS.
      </p>
    </div>
    <div className="p-4 text-left bg-[#D9D9D9] border shadow-md rounded-2xl">
      <h3 className="text-base font-semibold text-gray-800 sm:text-lg sm:mb-2">UI Developer Intern – DMonk's Software LLP</h3>
      <p className="mt-1 text-sm italic text-gray-600">
        Jan 2021 – July 2021 | Built AI-integrated web apps using React, Node.js & Tailwind CSS.
      </p>
    </div>

    
  </div>
</div>
  </div>
</section>

  );
};

export default SkillsWork;