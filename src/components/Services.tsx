const SKILLS_LIST = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Material UI"],
  },
  {
    category: "Backend",
    items: ["Node.js", "ASP.NET", "Django", "RESTful APIs"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools & Deploy",
    items: ["Git", "Vercel", "VS Code"],
  },
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C#"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-14 sm:py-20 md:py-24 lg:py-28 bg-slate-50/50 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 max-w-6xl w-full">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">What I do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">Technologies I use to deliver high-quality solutions</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="divide-y divide-slate-100">
              {SKILLS_LIST.map((group) => (
                <div
                  key={group.category}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 px-6 sm:px-8 py-5 sm:py-6 hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex items-center gap-2 min-w-0 sm:w-44 flex-shrink-0">
                    <span className="w-1 h-8 rounded-full bg-primary-500 flex-shrink-0" />
                    <span className="font-semibold text-slate-900 text-base tracking-tight">
                      .{group.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-0 sm:pl-0">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm text-slate-600 bg-slate-100 border border-slate-200/80 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
