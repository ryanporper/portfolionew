// import { useState } from "react";
import statify from "../assets/statify.png";
import soshow from "../assets/soshow.png";
import ecom from "../assets/ecom.png";

// update images to show a slide show of multiple pictures

const projects = [
  {
    id: 1,
    name: "Statify",
    role: "Full Stack Developer",
    link: "https://github.com/ryanporper/dashboard",
    image: statify,
    description: "Admin Dashboard to view statistics and manage users.",
    details: `
      Built with: React.js, Redux Toolkit, Redux Toolkit Query, Material UI 5, Nivo, Mongoose, Express.js, Node.js.
    `,
  },
  {
    id: 2,
    name: "E's Electronics",
    role: "Full Stack Developer",
    link: "https://yourwebsite.com",
    image: ecom,
    description:
      "A fully responsive modern ecommerce website with full cart functionality and checkout.",
    details: `
      Built with: Next.js, Sanity CSM, Stripe.
    `,
  },
  {
    id: 3,
    name: "SoShow",
    role: "Full Stack Developer",
    link: "https://github.com",
    image: soshow,
    description: "A social media website for sharing posts and images.",
    details: `
      Built with: React.js, Redux Toolkit, Material UI 5, Mongoose, Express.js, Node.js, Bcrypt, JSON Web Token.
    `,
  },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="text-3xl font-bold">Projects</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border hover:border-blue-400 rounded-lg shadow-lg p-5 w-80 hover:bg-[#242424] hover:shadow-xl transition"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
              <p className="">{project.role}</p>
              <p className="text-sm mt-2">{project.description}</p>
              <p className="mt-3 text-sm">{project.details}</p>
            </a>
          </div>
        ))}
      </div>
      <a
        href="https://github.com/ryanporper"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-bold underline hover:text-blue-400"
      >
        More Projects
      </a>
    </div>
  );
};

export default Projects;
