"use client";

import { SkillItem } from "@/types/portfolio";

interface SkillsProps {
  skills: SkillItem[];
  yearsExperience?: number;
}

export default function Skills({ skills }: SkillsProps) {
  const renderCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case "layers":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case "database":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth="2" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        );
      case "build":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        );
    }
  };

  return (
    <section className="w-full bg-white py-24 px-6 border-t border-neutral-200/80" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2 block">
            Capabilities
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            My Skills
          </h2>
          <div className="w-12 h-1 bg-neutral-900 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
            Core programming languages, modern frameworks, database architectures, and developer tools aligned with my professional curriculum vitae.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.id}
              className="group p-7 rounded-2xl bg-neutral-50/70 border border-neutral-200/80 hover:border-neutral-900 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-neutral-900 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-200">
                      {renderCategoryIcon(skillGroup.icon)}
                    </div>
                    <div>
                      <h3 className="font-headline text-lg sm:text-xl font-bold text-neutral-900 leading-tight">
                        {skillGroup.category}
                      </h3>
                      <span className="text-xs font-mono-code text-neutral-500">
                        {skillGroup.items.length} {skillGroup.items.length === 1 ? "technology" : "technologies"}
                      </span>
                    </div>
                  </div>
                </div>

                {skillGroup.description && (
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                    {skillGroup.description}
                  </p>
                )}

                <div className="flex flex-wrap gap-2.5">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-neutral-200/90 text-neutral-800 text-xs sm:text-sm font-medium shadow-2xs hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all duration-200 group/chip cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover/chip:bg-white transition-colors" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
