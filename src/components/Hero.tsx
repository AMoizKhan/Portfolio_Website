import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Home"
      className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-12 sm:pb-16 scroll-mt-20"
    >
      {/* Background gradient and shapes - smaller on mobile to avoid clutter */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-primary-50/30 to-cyan-50/40" />
      <div className="absolute top-20 right-0 sm:right-10 w-40 h-40 sm:w-72 sm:h-72 bg-primary-400/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-20 left-0 sm:left-10 w-48 h-48 sm:w-96 sm:h-96 bg-cyan-400/20 rounded-full blur-3xl animate-float animate-delay-200 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-primary-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 md:px-6 max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 w-full max-w-xl lg:max-w-none mx-auto">
            <p className="text-xs sm:text-sm text-primary-600 font-semibold uppercase tracking-widest sm:tracking-[0.2em] mb-2 sm:mb-3 animate-fade-in-up opacity-0 [animation-fill-mode:forwards]">
              Home — Hello, I am
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 mb-3 sm:mb-4 animate-fade-in-up opacity-0 animate-delay-100 [animation-fill-mode:forwards] tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-cyan-600 bg-clip-text text-transparent">
                ABDUL MOIZ KHAN
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-3 sm:mb-4 font-medium animate-fade-in-up opacity-0 animate-delay-200 [animation-fill-mode:forwards]">
              Frontend Developer · MERN Stack · React · Node · Next.js
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start mb-4 sm:mb-6 animate-fade-in-up opacity-0 animate-delay-300 [animation-fill-mode:forwards]">
              {["React", "Next.js", "Node.js", "MongoDB", "TypeScript", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs font-medium rounded-full bg-white/80 text-primary-700 border border-primary-200/60 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 break-words">
              kabdulmoiz087@gmail.com · +92 302 1587532 · Karachi, Pakistan
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in-up opacity-0 animate-delay-400 [animation-fill-mode:forwards]">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 min-h-[44px] px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-primary-600 text-white text-sm sm:text-base font-semibold shadow-lg shadow-primary-500/30 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-500/40 active:scale-[0.98] transition-all duration-300"
              >
                View Projects
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center min-h-[44px] px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl border-2 border-slate-300 text-slate-700 text-sm sm:text-base font-semibold hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50/50 active:scale-[0.98] transition-all duration-300"
              >
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/abdul-moiz-khan-3835141b3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] w-12 h-12 rounded-xl border-2 border-slate-300 text-slate-600 hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50/50 active:scale-[0.98] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/AMoizKhan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-w-[44px] min-h-[44px] w-12 h-12 rounded-xl border-2 border-slate-300 text-slate-600 hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50/50 active:scale-[0.98] transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          {/* Profile image */}
          <div className="flex-1 flex justify-center order-1 lg:order-2 w-full">
            <div className="relative animate-fade-in-up opacity-0 animate-delay-200 [animation-fill-mode:forwards]">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary-500/20 to-cyan-500/20 rounded-full blur-2xl" />
              <HeroImage />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
