import { motion } from "framer-motion";
import {ReactTyped} from "react-typed";


export default function Homes() {
  return (
    <section id="Homes"
    className="grid w-full min-h-screen grid-cols-1 overflow-hidden xl:grid-cols-2 place-items-center">
      

<motion.div
  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
  transition={{ duration: 0.5 }}
  viewport={{ once: false }}
  className="relative flex flex-col items-center justify-center w-full h-full p-6 text-center xl:text-left"
>
 
  <div className="flex flex-col w-full max-w-md gap-4">
 
    <div className="flex items-center justify-center gap-2 text-3xl font-semibold xl:justify-start lg:text-4xl font-playfair">
      <p>Hey There</p>
      <motion.span
        animate={{ rotate: [0, 20, -20, 20, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="inline-block"
      >
        👋
      </motion.span>
    </div>

 
    <h1 className="text-3xl font-semibold leading-snug text-center font-playfair lg:text-4xl xl:text-left">
      I’m Varshini Yenjarlapati
    </h1>

   
    <div className="mt-2 text-center xl:text-left">
      <ReactTyped
        strings={["Frontend Developer","Software Engineer", "Web Developer"]}
        typeSpeed={80}
        backSpeed={50}
        backDelay={1000}
        loop
        showCursor={false}
        className="text-xl italic font-semibold sm:text-lg lg:text-xl font-playfair"
        style={{ display: "inline-block", width: "100%" }}
      />
    </div>
    <div className="hidden mt-6 xl:block">
            <a
              href="#contact"
              className="
                inline-block px-6 py-3 text-base font-medium text-white transition-all
                duration-300 rounded-full bg-[#f5a6a0] hover:bg-[#F2C6C2]
                font-roboto shadow-md
              "
            >
              LET’S TALK
            </a>
          </div>
  </div>
</motion.div>

      
        
      {/* MIDDLE: Profile Picture */}
<div className="relative flex items-center justify-center w-full h-full p-4">
  <div className="relative">

    <motion.div
  className="rounded-[35%_35%_0%_35%] bg-white w-[15rem] h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem]"
  animate={{
    scale: [1, 1.05, 1],      
    rotate: [0, 5, -5, 0],    
  }}
  transition={{
    duration: 5,              
    repeat: Infinity,        
    ease: "easeInOut",
  }}
    />          
          {/* Profile Image */}
     <div className="absolute bottom-1 right-0 w-[12rem] h-[12rem] md:w-[18rem] md:h-[18rem] lg:w-[20rem] lg:h-[20rem] xl:w-[23rem] xl:h-[23rem] overflow-hidden rounded-[35%_35%_0%_35%]">
        <img
              src="../Profile_picture1.png"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* RIGHT: Tech Logos */}
      {/* <div className="flex flex-wrap items-center justify-center gap-6 p-8 m-2 xl:flex-col xl:items-start xl:-translate-x-[96px] md:justify-center">
  {frontendLogos.map((logo, i) => (
    <motion.img
      key={i}
      src={logo.src}
      alt={logo.alt}
      className={`rounded-full shadow-md bg-white p-2 ${logo.size} h-auto`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      viewport={{ once: false }}
    />
  ))}
</div> */}
    </section>
  );
}
"../Profile_picture1.png"
