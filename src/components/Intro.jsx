import mypic from "../assets/mypic.png";
const Intro = () => {
  return (
    <div className="flex flex-col gap-10 items-start">
      <div className="flex flex-row gap-8 items-center">
        <img
          src={mypic}
          alt="Profile"
          className="w-20 h-20 rounded-full outline-2 outline-slate-300 hover:outline-purple-800 object-cover"
        />
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
