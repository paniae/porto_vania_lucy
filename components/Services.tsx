"use client";

import { ServiceItem } from "@/types/portfolio";

interface ServicesProps {
  services: ServiceItem[];
  onSelectService?: (serviceName: string) => void;
}

export default function Services({ services, onSelectService }: ServicesProps) {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "trending_up":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      case "layers":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case "laptop_mac":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case "edit":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        );
      case "photo_camera":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case "stay_current_portrait":
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      default:
        return (
          <span className="material-symbols-outlined text-[20px]">
            {iconName}
          </span>
        );
    }
  };

  return (
    <section className="w-full bg-neutral-50/70 py-24 px-6 border-t border-neutral-200/80" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-2 block">
            Offerings
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            My Services
          </h2>
          <div className="w-12 h-1 bg-neutral-900 mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService?.(service.title)}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/80 hover:border-neutral-900 transition-all duration-300 hover:shadow-md cursor-pointer group flex flex-col items-start text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white group-hover:bg-black group-hover:scale-105 transition-all flex items-center justify-center mb-5 shadow-sm">
                {renderIcon(service.icon)}
              </div>
              <h3 className="font-headline text-lg font-bold text-neutral-900 group-hover:text-black mb-2 transition-colors">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {service.description}
              </p>
              <span className="mt-5 text-xs font-semibold text-neutral-900 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Discuss Project</span>
                <span>&rarr;</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
