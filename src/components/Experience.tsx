const EXPERIENCE = [
  {
    role: "Junior Software Developer",
    company: "Forti Core System (SMC-PVT) Ltd",
    location: "Karachi, Pakistan",
    period: "Nov 2024 – Present",
    points: [
      "Developed and maintained responsive web applications using React.js, Tailwind CSS, and JavaScript.",
      "Crafted interactive UI components, ensuring consistency and an engaging user experience.",
      "Applied modern styling techniques with Tailwind CSS for efficient and scalable designs.",
      "Integrated RESTful APIs, enabling seamless communication between front-end and back-end systems.",
      "Optimized and debugged front-end code, improving performance and usability.",
      "Collaborated in team projects, contributing to planning, code reviews, and quality assurance.",
    ],
  },
  {
    role: "Junior Software Developer",
    company: "Esanad",
    location: "Dubai, UAE",
    period: "Apr 2025 – Aug 2025",
    points: [
      "Developed and maintained web applications using Next.js, Node.js, and MongoDB.",
      "Designed RESTful APIs and optimized database schemas for improved performance.",
      "Created responsive user interfaces with cross-device compatibility.",
      "Implemented authentication, authorization, and security measures.",
      "Collaborated with the team on debugging, testing, and deployment processes.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-slate-50 to-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 max-w-6xl w-full">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">Career</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Roles and key contributions</p>
        </div>
        <div className="space-y-8">
          {EXPERIENCE.map((job) => (
            <div
              key={job.company}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-primary-100 transition-all duration-300"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary-500 to-cyan-500" />
              <div className="p-6 md:p-8 pl-8">
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                  <span className="text-primary-600 font-semibold">{job.company}</span>
                  <span className="text-slate-500 text-sm">{job.location}</span>
                </div>
                <p className="text-sm text-slate-500 mb-4">{job.period}</p>
                <ul className="space-y-2 text-slate-600 text-sm">
                  {job.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
