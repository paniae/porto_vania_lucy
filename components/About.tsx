interface AboutProps {
  onOpenContact?: () => void;
}

export default function About({ onOpenContact }: AboutProps) {
  return (
    <section className="w-full bg-neutral-50/70 py-24 px-6 border-t border-neutral-200/80" id="about">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2 block">
            Get To Know Me
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-1 bg-neutral-900 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Quick Profile Highlights (Clean Typography, no box, no circle) */}
          <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-7 text-left border-b lg:border-b-0 lg:border-r border-neutral-200 pb-8 lg:pb-0 lg:pr-8">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold block mb-1">
                Role &amp; Specialization
              </span>
              <p className="text-base sm:text-lg font-bold text-neutral-900 font-headline">
                Full Stack &amp; Web Developer
              </p>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold block mb-1">
                Academic Background
              </span>
              <p className="text-sm sm:text-base font-semibold text-neutral-800">
                Informatics &amp; Computer Science
              </p>
              <p className="text-xs text-neutral-500 mt-0.5">
                Software Engineering &amp; System Architecture
              </p>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold block mb-1">
                Core Stack
              </span>
              <p className="text-sm sm:text-base font-semibold text-neutral-800">
                React, Next.js, Laravel, Node.js
              </p>
              <p className="text-xs text-neutral-500 mt-0.5">
                TypeScript, MySQL, RESTful APIs
              </p>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold block mb-1">
                Availability
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-semibold text-neutral-900">
                  Open for Opportunities
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Bio & Actions */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
              Vania Lucy Syntya &bull; Vania
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold text-neutral-900 mb-4 tracking-tight">
              Building Scalable Full Stack &amp; Web Solutions
            </h3>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-4">
              With an academic background in Computer Science &amp; Informatics, I have built a solid foundation in software engineering, algorithms, and clean system architecture. My primary focus is on Full Stack &amp; Web Development, bridging frontend aesthetics with high-performance backend engineering.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
              I specialize in crafting end-to-end web applications using modern stacks like React, Next.js, Node.js, and TypeScript, combined with relational databases and robust RESTful APIs. From designing accessible user interfaces to structuring scalable server logic and efficient data pipelines, I strive to deliver web solutions that are reliable, fast, and user-friendly.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/CV_Vania_Lucy_Syntya.pdf"
                download="CV_Vania_Lucy_Syntya.pdf"
                className="bg-black hover:bg-neutral-800 text-white rounded-full px-7 py-2.5 text-xs sm:text-sm font-medium tracking-wide shadow-sm inline-flex items-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Download CV</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>

              <a
                href="#skills"
                className="bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300 rounded-full px-6 py-2.5 text-xs sm:text-sm font-medium transition-colors"
              >
                Explore Skills &amp; Stack
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
