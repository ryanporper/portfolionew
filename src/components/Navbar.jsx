import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail, IoIosPaper } from "react-icons/io";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 shadow-md px-6 md:px-20 lg:px-40 py-4 flex items-center justify-between text-base">
      <div className="font-bold text-purple-500 text-xl tracking-tight">
        Ryan Porper
      </div>

      <div className="hidden md:flex gap-6">
        {["home", "projects", "work"].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="text-white font-medium hover:text-purple-500 transition-colors duration-200 cursor-pointer"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex gap-4 items-center">
        <a
          href="https://github.com/ryanporper"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-500 hover:scale-105 transition-transform duration-200"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/ryan-porper/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-500 hover:scale-105 transition-transform duration-200"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="mailto:ryan_porper@aol.com?subject=Contact%20Inquiry"
          className="text-white hover:text-purple-500 hover:scale-105 transition-transform duration-200"
        >
          <IoMdMail size={22} />
        </a>
        <a
          href={`${import.meta.env.BASE_URL}resume.pdf`}
          download
          className="text-white hover:text-purple-500 hover:scale-105 transition-transform duration-200"
        >
          <IoIosPaper size={22} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
