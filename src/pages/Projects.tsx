import {useEffect,  useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import MazeImg from "../images/Maze_image.webp";
import VaccumeImg from "../images/Vaccume_robot.jpg"
import nQueensImg from "../images/N-Queen_image.png";
import ConnectImg from "../images/Connect_image.webp";
import MovieSearchImg from "../images/Movie_search.png"; 
import PortfolioImg from "../images/Portfolio.png"; 

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built using React, TypeScript, Tailwind CSS, and Framer Motion. It features a responsive design, smooth animations, and showcases various projects with interactive project cards and reusable components.",
    image: PortfolioImg,
    githubLink: "https://github.com/Varshini-Yenjarlapati/Portfolio_website",
    liveLink: "https://varshiniyenjarlapati-portfolio.netlify.app/",
  },
  {
    title: "Movie Explorer",
    description: "A fast, modern movie discovery app built with React, Vite, and Tailwind CSS. It features real-time search using the TMDB API and a Netflix-style Trending Now section. Appwrite handles search analytics, and the app is deployed globally on Vercel for top-tier performance.",
    image: MovieSearchImg,
    githubLink: "https://github.com/Varshini-Yenjarlapati/Moive-Search-app",
    liveLink: "https://moive-search-app-delta.vercel.app/",
  },
  
  {
    title: "AI Game Agent for Connect Four",
    description: "Developed an AI-driven Connect Four agent that applies search algorithms such as Minimax, Alpha-Beta Pruning to determine optimal moves in real time. Implemented heuristic evaluation and pruning techniques to enhance decision-making speed and gameplay performance.",
    image: ConnectImg,
    // githubLink: "",
  },
  {
    title: "Reflex-Based Smart Vacuum Cleaner ",
    description: "Simulated an autonomous vacuum-cleaning robot using reflex-based agent architecture in a grid environment. The agent employs multiple cleaning strategies to compare efficiency based on energy consumption and area coverage, reflecting real-world smart home and robotic automation systems.",
    image: VaccumeImg,
    // githubLink: "",
    
  },
  {
    title: "Adaptive N-Queens Problem Solver",
    description: "Designed and implemented an N-Queens problem solver leveraging both classical and heuristic search methods Backtracking, Simulated Annealing, and Genetic Algorithms—to evaluate performance trade-offs between solution accuracy and computational efficiency.",
    image: nQueensImg,
    // githubLink: "",
    
  },
  {
    title: "Goal-Based Maze Solving Agent",
    description: "Built an autonomous pathfinding agent that navigates mazes using search algorithms like BFS, DFS, Greedy Best-First Search, and A*. It measures performance through nodes expanded, path cost, and runtime, while visualizing the optimal route to demonstrate efficient navigation.",
    image: MazeImg,
    // githubLink: "",
   
  },
  
];

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { x: -50, opacity: 0 }, // start from left
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, type: "spring", stiffness: 80 } },
  };

  const headingVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };
  return (
    <section
      id="projects"
      className="flex flex-col items-center"
    >
      <motion.h1
        className="px-2 pb-8 text-3xl italic font-semibold text-center text-black md:pb-12 md:text-4xl font-playfair sm:text-4xl lg:text-4xl"
        variants={headingVariants}
        initial="hidden"
        animate={controls}
      >
        Innovative Projects I've Built
        
        
      </motion.h1>
      

      <motion.div
        ref={ref}
        className="grid justify-center max-w-6xl grid-cols-1 px-4 py-8 mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {projects.map((project, idx) => (
          <motion.div key={idx} variants={cardVariants} className="flex-shrink-0">
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
