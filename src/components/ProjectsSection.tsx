import { ExternalLink, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import sectionBg from "@/assets/section-bg.jpg";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce web application built with ASP.NET MVC and C#. Features product listings, shopping cart functionality, user authentication, and order management — all backed by SQL Server.",
    tech: ["C#", "ASP.NET MVC", "SQL Server", "HTML", "CSS"],
    github: "https://github.com/Asibonge063/Ecommerce.git",
    languages: "C# 63.4% · HTML 35.5%",
    accent: "border-l-accent",
  },
  {
    title: "PetCare System",
    description:
      "A pet care management system built with ASP.NET MVC featuring pet registration, owner management, appointment scheduling, and image uploads. Utilises Entity Framework with Code-First migrations.",
    tech: ["C#", "ASP.NET MVC", "JavaScript", "SQL Server", "Entity Framework"],
    github: "https://github.com/Asibonge063/PetCare_system.git",
    languages: "HTML 60.8% · C# 21.5% · JavaScript 17.7%",
    accent: "border-l-accent-warm",
  },
];

const ProjectsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${sectionBg})`, backgroundSize: "cover", backgroundPosition: "bottom" }} />
      <div className="absolute inset-0 bg-muted/70" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="reveal text-2xl font-semibold tracking-[-0.02em] text-foreground">
              Featured Projects
            </h2>
            <p className="reveal text-text-secondary mt-2" style={{ transitionDelay: "80ms" }}>
              Proof of work — real applications solving real problems.
            </p>
          </div>
          <div className="md:col-span-8 space-y-8">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className={`reveal group bg-card rounded-lg border border-border border-l-4 ${project.accent} p-8 transition-shadow hover:shadow-md`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors flex items-center gap-1.5 text-sm"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github size={16} />
                    <span className="hidden sm:inline">Source</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
                <p className="text-text-secondary leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs font-mono font-medium bg-accent/10 text-accent border border-accent/20 rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs font-mono text-muted-foreground">{project.languages}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
