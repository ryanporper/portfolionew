import mypic from "../assets/mypic.png";
import { BsSunglasses } from "react-icons/bs";
const Intro = () => {
  return (
    <div className="flex flex-col gap-10 items-start">
      <div className="flex flex-row gap-8 items-center">
        <div className="relative w-20 h-20 group">
          {/* Profile Image */}
          <img
            src={mypic}
            alt="Profile"
            className="w-full h-full rounded-full object-cover outline-2 outline-slate-300 group-hover:outline-purple-800"
          />

          {/* Sunglasses Icon */}
          <BsSunglasses className="absolute text-black text-3xl left-[58%] -translate-x-1/2 top-[-50%] opacity-0 group-hover:top-[25%] group-hover:opacity-100 transition-all duration-500 ease-in-out" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex font-bold text-white text-2xl sm:text-4xl">
            Hey, I'm Ryan{" "}
            <p className="cursor-pointer hover:animate-spin">👋</p>
          </div>
          <div>📍 Boca Raton, FL</div>
        </div>
      </div>
      <div className="bg-[#131313] p-2">
        I'm a Web Developer with 2+ years of professional experience. I
        specialize in creating UI designs to engage users using react.{" "}
        {/* add a if you want to know more🤔 */}
      </div>
    </div>
  );
};

export default Intro;
