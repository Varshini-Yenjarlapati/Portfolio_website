import EducationCard from "../components/EducationCard";


const educationData = [
  {
    id: "secondary",
    title: "Secondary School",
    description: "Sri Chaitanya Techno School | Completed 10th grade with distinction.",
    image:"/ssc.avif",
  },
  {
    id: "highschool",
    title: "High School",
    description: "Narayana Junior College | Focused on Science stream, scored top 10%.",
    image:"/hsc.avif",
  },
  {
    id: "undergrad",
    title: "Undergraduate",
    description: "Bachelor of Engineering in Computer Science | Visvesvaraya Technological University, 2020.",
    image:"/download_be.png",
  },
  {
    id: "grad",
    title: "Graduate",
    description: "Master's in Computer Science | Southern Methodist University, 2025.",
    image: "/download_grad.png",
  },
];

const About = () => {
  return (
    <section id="about" className="flex flex-col items-center px-4 py-14">
      <h2 className="pb-12 text-3xl italic font-semibold text-center text-black md:text-5xl font-playfair">
        About
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {educationData.map((edu) => (
     <EducationCard
       key={edu.id}
       title={edu.title}
       description={edu.description}
       image={edu.image}
     />
     ))}
      </div>
    </section>
  );
};

export default About;
