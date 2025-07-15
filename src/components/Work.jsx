const Work = () => {
  return (
    <section id="work" className="w-full text-white">
      <div className="flex flex-col md:flex-row gap-16 items-start justify-between w-full max-w-7xl mx-auto">
        {/* Experience */}
        <div className="flex flex-col gap-8 w-full">
          <h2 className="text-4xl font-bold text-center text-purple-600 md:text-left mb-4">
            Professional Experience
          </h2>
          <div className="space-y-8">
            <ExperienceEntry
              role="Frontend Developer"
              company="Premier Products"
              location="Remote"
              duration="2023 - 2024"
              bullets={[
                "Led the design and development of a new website that helped creators earn $1M+ in revenue using React and C#.",
                "Collaborated remotely with developers to efficiently meet project deadlines.",
              ]}
            />
            <ExperienceEntry
              role="Customer Service Clerk"
              company="Publix"
              location="Coconut Creek, FL"
              duration="2016 - 2019"
              bullets={[
                "Nurtured customer relationships through positive interactions and clear communication.",
              ]}
            />
          </div>
        </div>

        {/* Education */}
        <div className="flex flex-col gap-8 w-full">
          <h2 className="text-4xl font-bold text-center text-purple-600 md:text-left mb-4">
            Education
          </h2>
          <div className="space-y-8">
            <ExperienceEntry
              role="Full-Stack Developer Certificate"
              company="Coding Dojo"
              location="Online"
              duration="2022"
              bullets={[
                "Immersive training in HTML, CSS, Python, Java, JavaScript, and the MERN stack.",
                "Led teams to deliver full-stack apps under tight deadlines.",
                "Built 3 full-stack applications per stack in under 5 hours each.",
              ]}
            />
            <ExperienceEntry
              role="Computer Science"
              company="Palm Beach State College"
              location="Boca Raton, FL"
              duration="2017 - 2019"
              bullets={[
                "Relevant Coursework: Programming Logic, Microcomputer Applications, C/C++ Programming.",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceEntry = ({ role, company, location, duration, bullets }) => {
  return (
    <div className="border-l-4 border-purple-700 pl-5 relative">
      <h3 className="text-xl font-semibold text-purple-300">{role}</h3>
      <p className="text-sm text-gray-400">
        {company}{" "}
        <span className="text-gray-500">
          | {location} | {duration}
        </span>
      </p>
      <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-300">
        {bullets.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
