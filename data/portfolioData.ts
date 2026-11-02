import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Vania Lucy Syntya",
  nickname: "Vania",
  role: "Full Stack & Web Developer | Informatics",
  email: "vanialucysyntya42@gmail.com",
  location: "Indonesia",
  bio: [
    "With a strong background in Computer Science and Informatics, I specialize in Full Stack and Modern Web Development. I build reliable, performant, and user-friendly digital solutions from conception to deployment.",
    "From structuring scalable backend architectures, APIs, and databases to crafting intuitive and responsive frontend interfaces, I ensure every web application delivers seamless user experiences and robust technical integrity."
  ],
  yearsExperience: 5,
  skills: [
    {
      id: "programming-languages",
      category: "Programming Languages",
      icon: "code",
      description: "Core languages for backend, frontend, and software engineering.",
      items: ["PHP", "JavaScript", "HTML", "CSS", "C", "Java", "Dart"]
    },
    {
      id: "frameworks-libraries",
      category: "Frameworks & Libraries",
      icon: "layers",
      description: "Modern frameworks and UI libraries for scalable web applications.",
      items: ["Laravel", "React.js", "Next.js", "Express.js", "Bootstrap", "Tailwind CSS", "Prisma"]
    },
    {
      id: "databases",
      category: "Databases",
      icon: "database",
      description: "Relational and document-oriented database systems.",
      items: ["MySQL", "MongoDB"]
    },
    {
      id: "developer-tools",
      category: "Developer Tools & Technologies",
      icon: "build",
      description: "Code version control, development environments, and API architecture.",
      items: ["Git", "GitHub", "Visual Studio Code", "REST API"]
    }
  ],
  projects: [
    {
      id: "atma-library",
      title: "Atma Library — Digital Catalog & Book Management",
      category: "Full Stack Web Application",
      description: "A comprehensive digital library platform and book catalog system featuring multi-category exploration, instant search, book reservation workflows, and catalog inventory tracking.",
      images: [
        "/projects/atma-library.png",
        "/projects/atma-library-detail.png",
        "/projects/atma-library-add.png",
        "/projects/atma-library-returning.png"
      ],
      tags: ["PHP", "Laravel", "MySQL", "Bootstrap", "REST API", "JavaScript"],
      githubUrl: "https://github.com/paniae/PW_C_Library_React",
      featured: true
    },
    {
      id: "padukuhan-bruno",
      title: "Padukuhan Bruno II — Digital Village & Citizen Services Portal",
      category: "Public Sector & Community Web Portal",
      description: "A comprehensive digital information and community public services platform for Padukuhan Bruno II, Kalurahan Ngestirejo. Features village public service directories, local UMKM economic catalog, admin agenda management for Dukuh, and citizen grievance reporting with photo evidence tracking.",
      images: [
        "/projects/padukuhan-bruno-home.png",
        "/projects/padukuhan-bruno-admin.png",
        "/projects/padukuhan-bruno-pengaduan.png"
      ],
      tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "REST API", "JavaScript"],
      githubUrl: "https://github.com/paniae/TA_220711829",
      featured: true
    },
    {
      id: "webgis-uriemi",
      title: "WebGIS Uriemi — Sistem Informasi Geografis Desa",
      category: "Geographic Information System (GIS)",
      description: "Sistem Informasi Geografis berbasis web untuk Desa Uriemi, Kecamatan Rasiey, Teluk Wondama, Papua Barat. Menampilkan 10 layer peta interaktif mencakup batas administrasi desa, tutupan lahan, potensi pertanian, peternakan, perikanan, jenis tanah, topografi, pH tanah, nitrogen tanah, hingga rencana tata ruang mikro. Dibangun menggunakan Leaflet.js dengan basemap OpenStreetMap dan data spasial GeoJSON.",
      images: [
        "/projects/webgis-uriemi-topografi.png"
      ],
      tags: ["Leaflet.js", "GeoJSON", "JavaScript", "HTML", "CSS", "OpenStreetMap", "WebGIS"],
      githubUrl: "https://github.com/paniae/WEBGIS_URIEMI",
      featured: true
    },
    {
      id: "procurement-system",
      title: "Procurement System — Supply Chain & Request Management",
      category: "Enterprise Dashboard & Supply Chain",
      description: "Sistem manajemen procurement berbasis web dengan dua role dashboard: Procurement Center untuk mengelola request pengadaan barang (URGENT/PROSES/DONE), dan Teknis Dashboard untuk submit dan tracking request kebutuhan proyek. Fitur meliputi request management, status tracking, export data, pencarian, dan notifikasi read/unread per request.",
      images: [
        "/projects/procurement-dashboard.png",
        "/projects/teknis-dashboard.png"
      ],
      tags: ["Laravel", "PHP", "MySQL", "JavaScript", "Tailwind CSS", "REST API"],
      featured: true
    }
  ],
  services: [
    {
      id: "fullstack-dev",
      title: "Full Stack Web Development",
      icon: "laptop_mac",
      description: "Building end-to-end, high-performance web applications with Next.js, React, Node.js, and modern architectural principles."
    },
    {
      id: "backend-api",
      title: "Backend & RESTful APIs",
      icon: "trending_up",
      description: "Designing robust server-side logic, secure RESTful APIs, authentication workflows, and serverless route handlers."
    },
    {
      id: "database-mgmt",
      title: "Database Architecture",
      icon: "edit",
      description: "Structuring relational and NoSQL databases, optimizing queries, database normalization, and data persistence."
    },
    {
      id: "frontend-ui",
      title: "Frontend & UI/UX Engineering",
      icon: "layers",
      description: "Crafting interactive, pixel-perfect, accessible user interfaces with TypeScript, Tailwind CSS, and fluid state management."
    },
    {
      id: "responsive-design",
      title: "Responsive Web Applications",
      icon: "stay_current_portrait",
      description: "Delivering mobile-first, fluidly responsive web interfaces across devices with cross-browser compatibility."
    },
    {
      id: "performance-seo",
      title: "Performance & SEO Optimization",
      icon: "photo_camera",
      description: "Optimizing Core Web Vitals, server-side rendering, asset delivery, and search engine visibility."
    }
  ],
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/paniae",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vanialucy",
      icon: "linkedin"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/cyvanea",
      icon: "instagram"
    }
  ]
};
