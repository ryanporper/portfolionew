import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import AWS from "../assets/AWS.png";
import cssIcon from "../assets/css.png";
import jsIcon from "../assets/javascript.png";
import reactIcon from "../assets/react.png";
import nodeIcon from "../assets/node.png";
import mongoIcon from "../assets/mongodb.png";
import gitIcon from "../assets/git.png";
import mu5Icon from "../assets/mu5.png";
import figma from "../assets/figma.png";
import redux from "../assets/redux.png";
import nextjs from "../assets/nextjs.png";
import sass from "../assets/sass.png";

const skills = [
  { id: 1, name: "AWS", image: AWS },
  { id: 2, name: "CSS", image: cssIcon },
  { id: 3, name: "JavaScript", image: jsIcon },
  { id: 4, name: "React", image: reactIcon },
  { id: 5, name: "Node.js", image: nodeIcon },
  { id: 6, name: "MongoDB", image: mongoIcon },
  { id: 7, name: "Git", image: gitIcon },
  { id: 8, name: "MU5", image: mu5Icon },
  { id: 9, name: "Figma", image: figma },
  { id: 10, name: "Redux", image: redux },
  { id: 11, name: "Next.js", image: nextjs },
  { id: 12, name: "Sass", image: sass },
];

const Skills = () => {
  const containerRef = useRef(null);
  const [constraints, setConstraints] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });

  // Set dynamic drag constraints based on container size
  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setConstraints({
        left: -offsetWidth / 2 + 50,
        right: offsetWidth / 2 - 50,
        top: -offsetHeight / 2 + 50,
        bottom: offsetHeight / 2 - 50,
      });
    }
  }, []);

  return (
    <div className="flex flex-col gap-6 items-center px-4 md:px-20">
      <div className="text-3xl font-bold text-center">Skills</div>
      <div
        ref={containerRef}
        className="h-auto w-full flex flex-wrap justify-center gap-6 overflow-hidden relative"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="flex flex-col items-center"
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{
              y: Math.random() * 20 - 10, // Random initial Y offset
              rotate: Math.random() * 10 - 5, // Slight random rotation
            }}
            animate={{
              y: [0, 5, -5, 0], // Floating effect
              transition: {
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            {/* Bubble */}
            <div className="w-16 h-16 bg-[#1f1f1f] rounded-full flex items-center justify-center shadow-sm shadow-white hover:shadow-blue-400 cursor-grab">
              <img
                src={skill.image}
                alt={skill.name}
                draggable={false}
                className="w-12 h-12 object-contain"
              />
            </div>
            {/* Skill Name */}
            <p className="mt-2 text-sm text-white font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
