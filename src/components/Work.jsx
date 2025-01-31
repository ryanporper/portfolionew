const Work = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 px-6 md:px-20">
      {/* Experience Section */}
      <div className="flex flex-col gap-10 w-full">
        <h2 className="text-3xl font-bold text-center md:text-left">
          Professional Experience
        </h2>
        <div className="w-full max-w-3xl space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold">Frontend Developer</h3>
            <p className="">Premier Products | Remote | 2023-2024</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ">
              <li>
                Led the design and development of a brand new website from the
                ground up which brought in creators $1m+ in revenue and created
                exponential growth using React and C#.
              </li>
              <li>
                Collaborated remotely to efficiently meet project deadlines.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-semibold">Customer Service Clerk</h3>
            <p className="">Publix | Coconut Creek, FL | 2016-2019</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ">
              <li>
                Nurtured customer relationships through positive interactions
                and clear communication.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="flex flex-col gap-10 w-full">
        <h2 className="text-3xl font-bold text-center md:text-left pt-10 md:pt-0">
          Education
        </h2>
        <div className="w-full max-w-3xl space-y-6">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-semibold">Coding Dojo</h3>
            <p className="">Full-Stack Developer Certificate | Online | 2022</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Immersive Full-Stack training: HTML, CSS, Python, Java,
                JavaScript, MERN.
              </li>
              <li>
                Led multiple teams to complete projects under tight deadlines.
              </li>
              <li>
                Delivered 3 full-stack applications in under 5 hours for each
                stack.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-semibold">Palm Beach State College</h3>
            <p className="">Computer Science | Boca Raton, FL | 2017-2019</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                Relevant Coursework: Intro to Programming Logic, Microcomputer
                Applications, Intro to Programming in C, Programming in C++.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
