"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ProjectItem } from "@/types/portfolio";

interface ProjectsProps {
  projects: ProjectItem[];
  onSelectProject?: (projectName: string) => void;
}

export default function Projects({ projects, onSelectProject }: ProjectsProps) {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentProject = projects[selectedProjectIndex] || projects[0];
  const images = currentProject?.images || [];
  const totalImages = images.length;

  const handleNextImage = useCallback(() => {
    if (totalImages <= 1) return;
    setCurrentImageIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const handlePrevImage = useCallback(() => {
    if (totalImages <= 1) return;
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  const handleSelectProject = (index: number) => {
    setSelectedProjectIndex(index);
    setCurrentImageIndex(0);
  };

  const handleNextProject = () => {
    setSelectedProjectIndex((prev) => (prev + 1) % projects.length);
    setCurrentImageIndex(0);
  };

  const handlePrevProject = () => {
    setSelectedProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setCurrentImageIndex(0);
  };

  if (!projects || projects.length === 0) return null;

  return (
    <section
      className="w-full bg-neutral-50/70 py-8 sm:py-10 px-4 sm:px-6 border-t border-neutral-200/80 scroll-mt-16"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-row items-center justify-between mb-4 sm:mb-5 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-neutral-500 font-semibold block leading-tight">
              Portfolio Showcase
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Featured Projects
            </h2>
            <div className="w-10 h-0.5 bg-neutral-900 mt-1.5 rounded-full" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-neutral-500 mr-1 hidden sm:inline">
              Project <span className="text-neutral-900 font-bold text-xs">0{selectedProjectIndex + 1}</span> / 0{projects.length}
            </span>

            <button
              onClick={handlePrevProject}
              aria-label="Previous project"
              className="w-8 h-8 rounded-full border border-neutral-300 hover:border-black bg-white hover:bg-neutral-900 text-neutral-800 hover:text-white flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNextProject}
              aria-label="Next project"
              className="w-8 h-8 rounded-full border border-neutral-300 hover:border-black bg-white hover:bg-neutral-900 text-neutral-800 hover:text-white flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 mb-4 no-scrollbar">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => handleSelectProject(idx)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${selectedProjectIndex === idx
                ? "bg-black text-white shadow-xs"
                : "bg-white text-neutral-600 hover:text-black border border-neutral-200/90 hover:border-neutral-400"
                }`}
            >
              {proj.title.split("—")[0].trim()}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl lg:rounded-3xl border border-neutral-200/90 shadow-[0_6px_30px_rgba(0,0,0,0.04)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            <div className="lg:col-span-7 bg-neutral-100 relative min-h-[280px] sm:min-h-[340px] lg:min-h-[400px] flex items-center justify-center group overflow-hidden select-none">
              <div className="relative w-full h-full min-h-[280px] sm:min-h-[340px] lg:min-h-[400px]">
                <Image
                  key={`${currentProject.id}-${currentImageIndex}`}
                  src={images[currentImageIndex] || images[0]}
                  alt={`${currentProject.title} screenshot ${currentImageIndex + 1}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className={`transition-all duration-300 ${['padukuhan-bruno', 'procurement-system'].includes(currentProject.id) ? 'object-cover object-top' : 'object-contain'}`}
                />
              </div>

              {totalImages > 1 && (
                <button
                  onClick={handlePrevImage}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-neutral-900 shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer z-20 backdrop-blur-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {totalImages > 1 && (
                <button
                  onClick={handleNextImage}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-neutral-900 shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer z-20 backdrop-blur-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {totalImages > 1 && (
                <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-mono font-medium text-white shadow-xs z-10">
                  {currentImageIndex + 1} / {totalImages}
                </div>
              )}

              {totalImages > 1 && (
                <div className="absolute bottom-3 left-0 right-0 flex justify-center items-center gap-1.5 z-10 pointer-events-auto">
                  <div className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5">
                    {images.map((_, imgIdx) => (
                      <button
                        key={imgIdx}
                        onClick={() => setCurrentImageIndex(imgIdx)}
                        aria-label={`View image ${imgIdx + 1}`}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${currentImageIndex === imgIdx
                          ? "w-5 bg-white"
                          : "w-1.5 bg-white/40 hover:bg-white/80"
                          }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-5 p-5 sm:p-6 lg:p-6 flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 border border-neutral-200 text-[11px] font-semibold text-neutral-800">
                    {currentProject.category}
                  </span>
                  {currentProject.featured && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="font-headline text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 tracking-tight mb-2 leading-snug">
                  {currentProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3 line-clamp-3">
                  {currentProject.description}
                </p>

                <div className="mb-3">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1.5 block">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-700 text-[11px] font-medium border border-neutral-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {totalImages > 1 && (
                  <div className="pt-2 border-t border-neutral-100">
                    <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold mb-1.5 block">
                      Screenshots ({totalImages})
                    </span>
                    <div className="flex gap-1.5">
                      {images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`relative w-12 h-8 rounded-md overflow-hidden border-2 transition-all cursor-pointer ${currentImageIndex === idx
                            ? "border-black scale-105 shadow-xs"
                            : "border-neutral-200 opacity-60 hover:opacity-100"
                            }`}
                        >
                          <Image
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            fill
                            sizes="48px"
                            className="object-contain"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-3 mt-2 border-t border-neutral-100 flex flex-wrap items-center gap-2.5">
                {currentProject.liveUrl && (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-4 py-2 text-xs font-medium tracking-wide flex items-center gap-1.5 shadow-xs transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>Live Demo</span>
                  </a>
                )}
                {currentProject.githubUrl && (
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-black hover:bg-neutral-800 text-white rounded-full px-4 py-2 text-xs font-medium tracking-wide flex items-center gap-1.5 shadow-xs transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                    </svg>
                    <span>Repository</span>
                  </a>
                )}

                <button
                  onClick={() => onSelectProject?.(currentProject.title)}
                  className="bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 hover:border-black rounded-full px-4 py-2 text-xs font-medium tracking-wide flex items-center gap-1 transition-all cursor-pointer"
                >
                  <span>Discuss Project</span>
                  <span className="text-neutral-400">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
