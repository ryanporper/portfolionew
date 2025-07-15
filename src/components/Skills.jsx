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
import tailwind from "../assets/tailwind.png";
import vue from "../assets/vue.png";
import typescript from "../assets/typescript.png";

const skills = [
  { id: 1, name: "JavaScript", image: jsIcon },
  { id: 2, name: "TypeScript", image: typescript },
  { id: 3, name: "React", image: reactIcon },
  { id: 4, name: "Next.js", image: nextjs },
  { id: 5, name: "Vue", image: vue },
  { id: 6, name: "Node.js", image: nodeIcon },
  { id: 7, name: "MongoDB", image: mongoIcon },
  { id: 8, name: "Figma", image: figma },
  { id: 9, name: "Redux", image: redux },
  { id: 10, name: "MU5", image: mu5Icon },
  { id: 11, name: "Sass", image: sass },
  { id: 12, name: "Tailwind", image: tailwind },
  { id: 13, name: "CSS", image: cssIcon },
  { id: 14, name: "AWS", image: AWS },
  { id: 15, name: "Git", image: gitIcon },
];

const speechPhrases = [
  "Throw me!",
  "Throw me!",
  "Throw me!",
  "Weee!",
  "Catch me!",
  "Aaagghh!",
];

const Skills = () => {
  const containerRef = useRef(null);
  const [constraints, setConstraints] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });
  const [speechBubbles, setSpeechBubbles] = useState({});

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

  useEffect(() => {
    const interval = setInterval(() => {
      const randomSkill = skills[Math.floor(Math.random() * skills.length)].id;
      const randomPhrase =
        speechPhrases[Math.floor(Math.random() * speechPhrases.length)];
      setSpeechBubbles((prev) => ({ ...prev, [randomSkill]: randomPhrase }));

      setTimeout(() => {
        setSpeechBubbles((prev) => {
          const newState = { ...prev };
          delete newState[randomSkill];
          return newState;
        });
      }, 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="text-3xl font-bold text-center text-purple-600">
        Skills
      </div>
      <div
        ref={containerRef}
        className="h-auto w-full border rounded-lg p-4 flex flex-wrap justify-center gap-6 overflow-hidden relative"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="flex flex-col items-center relative"
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{
              y: Math.random() * 20 - 10,
              rotate: Math.random() * 10 - 5,
            }}
            animate={{
              y: [0, 5, -5, 0],
              transition: {
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            {/* Speech Bubble */}
            {speechBubbles[skill.id] && (
              <motion.div
                className="absolute -top-6 right-0 bg-[#1f1f1f] text-white text-xs px-2 py-1 rounded shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                {speechBubbles[skill.id]}
              </motion.div>
            )}

            {/* Bubble */}
            <div className="w-16 h-16 bg-[#1f1f1f] rounded-full flex items-center justify-center shadow-sm shadow-white hover:shadow-purple-600 cursor-grab">
              <img
                src={skill.image}
                alt={skill.name}
                draggable={false}
                className="w-10 h-10 object-contain"
              />
            </div>

            {/* Skill Name */}
            <p className="mt-2 text-sm text-purple-300 font-medium">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
