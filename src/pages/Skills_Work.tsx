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
    <div key={logo.alt} className="flex flex-col items-center">
      <motion.img
        src={logo.src}
        alt={logo.alt}
        className={`rounded-full shadow-md bg-white p-2 ${logoSizeClass} h-auto`}
        loading="lazy"
        decoding="async"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: i * 0.02 }}
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
        July 2025 – Present | Built responsive React interfaces with AI-assisted workflows, integrated REST APIs, and deployed features on Vercel to improve UI accuracy and development speed by 40%.
      </p>
    </div>

    <div className="p-4 text-left bg-[#D9D9D9] border shadow-md rounded-2xl">
      <h3 className="text-base font-semibold text-gray-800 sm:text-lg sm:mb-2">Associate Software Developer – Capgemini</h3>
      <p className="mt-1 text-sm italic text-gray-600">
        Aug 2021 – July 2023 | Developed responsive React UI modules and integrated Django workflows for an onboarding platform supporting 5,000+ users annually.
      </p>
    </div>
    <div className="p-4 text-left bg-[#D9D9D9] border shadow-md rounded-2xl">
      <h3 className="text-base font-semibold text-gray-800 sm:text-lg sm:mb-2">UI Developer Intern – DMonk's Software LLP</h3>
      <p className="mt-1 text-sm italic text-gray-600">
        Aug 2020 – July 2021 | Developed a responsive healthcare website using React, HTML, CSS, and Node.js with interactive components, improved accessibility, and ensured cross-browser reliability.
      </p>
    </div>

    
  </div>
</div>
  </div>
</section>

  );
};

export default SkillsWork;
