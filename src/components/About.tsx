import ProfileImage from "./ProfileImage";

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 md:py-24 lg:py-28 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 max-w-6xl w-full">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Get to know me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Professional summary and background</p>
        </div>
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-10 lg:gap-12">
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-400 to-cyan-400 rounded-2xl blur opacity-30" />
              <div className="relative w-52 h-52 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <ProfileImage alt="Abdul Moiz Khan" className="object-cover" sizes="224px 288px" />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Abdul Moiz Khan</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Innovative Front-end Developer with hands-on experience crafting responsive, high-performance web applications using React.js, Next.js, Node.js, and MongoDB. Adept at transforming designs into seamless user experiences with Tailwind CSS and Material UI, while building robust RESTful APIs and optimizing front-end performance.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Passionate about creating dynamic, user-focused solutions, reducing bugs, and enhancing efficiency through clean, maintainable code. Experienced collaborator in cross-functional teams, delivering projects that combine creativity, functionality, and impact.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">Education</h4>
                <p className="text-slate-600 text-sm">BSc Computer Science — KIET (2020–2024), CGPA 3/4. PAF College (2018–2020).</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">Strengths</h4>
                <p className="text-slate-600 text-sm">Problem-solving · Communication · Adaptability (8+ zero-downtime migrations).</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-4">Certifications: MERN Stack (Coursera 2022), Python for Data Science (Computer Collegiate 2023).</p>
          </div>
        </div>
      </div>
    </section>
  );
}
