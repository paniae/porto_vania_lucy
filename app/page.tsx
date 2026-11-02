"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";
import { portfolioData } from "@/data/portfolioData";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [initialScope, setInitialScope] = useState("");

  const handleOpenContact = (scope = "") => {
    setInitialScope(scope);
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
    setInitialScope("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Floating Pill Navbar */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          socials={portfolioData.socials}
          onOpenContact={() => handleOpenContact()}
        />

        {/* 3. About Me Section */}
        <About onOpenContact={() => handleOpenContact()} />

        {/* 4. Selected Projects Section with Carousel */}
        <Projects
          projects={portfolioData.projects}
          onSelectProject={(projectTitle) => handleOpenContact(projectTitle)}
        />

        {/* 5. My Skills Section */}
        <Skills
          skills={portfolioData.skills}
          yearsExperience={portfolioData.yearsExperience}
        />

        {/* 6. My Services Section */}
        <Services
          services={portfolioData.services}
          onSelectService={(serviceTitle) => handleOpenContact(serviceTitle)}
        />

        {/* 7. Contact Me Section */}
        <Contact onOpenModal={() => handleOpenContact()} />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Contact / Let's Chat Modal connected to /api/contact */}
      <ContactModal
        key={`${isContactOpen ? "open" : "closed"}-${initialScope}`}
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        initialScope={initialScope}
      />
    </div>
  );
}
