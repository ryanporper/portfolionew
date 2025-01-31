import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#131313] py-4 px-6 md:px-20 lg:px-40 flex items-center justify-between z-50 text-xl">
      {/* Left Side - Name */}
      <div className="font-bold text-white text-lg">Ryan Porper</div>

      {/* Center - Navigation (Hidden on mobile) */}
      <div className="hidden md:flex gap-6">
        <button
          onClick={() => scrollToSection("home")}
          className="font-semibold text-white hover:text-purple-800 cursor-pointer"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="font-semibold text-white hover:text-purple-800 cursor-pointer"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("work")}
          className="font-semibold text-white hover:text-purple-800 cursor-pointer"
        >
          Experience
        </button>
      </div>

      {/* Right Side - Social Links (Always Visible) */}
      <div className="flex gap-4 items-center">
        <a
          href="https://github.com/ryanporper"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-800 cursor-pointer text-white hover:scale-90"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/ryan-porper/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-800 cursor-pointer text-white hover:scale-90"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:ryan_porper@aol.com?subject=Contact%20Inquiry"
          className="hover:text-purple-800 cursor-pointer text-white hover:scale-90"
        >
          <IoMdMail size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
