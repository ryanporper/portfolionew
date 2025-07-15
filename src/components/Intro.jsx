import mypic from "../assets/pic.png";
import { BsSunglasses } from "react-icons/bs";

const Intro = () => {
  return (
    <section id="home" className="w-full text-white">
      <div className="flex flex-col gap-12 items-start">
        {/* Top Row */}
        <div className="flex flex-row gap-6 items-center">
          <div className="relative w-28 h-28 group">
            {/* Profile Image */}
            <img
              src={mypic}
              alt="Profile"
              className="w-full h-full rounded-full object-center border-2 border-slate-300 group-hover:border-purple-500 transition-all duration-300"
            />

            {/* Sunglasses Icon Animation */}
            <BsSunglasses className="absolute text-black text-5xl left-[55%] -translate-x-1/2 top-[-50%] opacity-0 group-hover:top-[20%] group-hover:opacity-100 transition-all duration-500 ease-in-out" />
          </div>

          {/* Name & Location */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-bold text-3xl sm:text-4xl">
              Hey, I'm Ryan{" "}
              <span className="hover:animate-spin cursor-pointer">👋</span>
            </div>
            <p className="text-sm text-gray-400">📍 Boca Raton, FL</p>
          </div>
        </div>

        {/* Intro Description */}
        <p className="text-lg leading-relaxed max-w-xl">
          I'm a Web Developer with{" "}
          <span className="font-semibold text-purple-400">3+ years</span> of
          professional experience. I specialize in building interactive,
          accessible, and modern UI experiences using{" "}
          <span className="font-semibold text-purple-400">React</span> and
          related technologies.
        </p>
      </div>
    </section>
  );
};

export default Intro;
