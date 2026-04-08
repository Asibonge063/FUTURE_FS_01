import { ExternalLink, Github } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A comprehensive e-commerce application built with C# and .NET framework, featuring product management, shopping cart functionality, and secure payment processing with SQL Server database integration.",
    tech: ["C#", ".NET", "MVC", "SQL Server", "RESTful API"],
    tags: ["C#", ".NET", "SQL Server"],
    tagColor: "bg-accent/10 text-accent border-accent/20",
    github: "https://github.com/Asibonge063/Ecommerce.git",
  },
  {
    title: "PetCare Management System",
    description:
      "A full-featured pet care management system that allows users to track pet health records, appointments, and medical history. Built with HTML, CSS, and JavaScript with dynamic data management capabilities.",
    tech: ["HTML5", "CSS3", "JavaScript", "Database Management"],
    tags: ["JavaScript", "HTML/CSS", "Database"],
    tagColor: "bg-accent-warm/10 text-accent-warm border-accent-warm/20",
    github: "https://github.com/Asibonge063/PetCare_system.git",
  },
  {
    title: "RESTful API Development",
    description:
      "Built production-ready RESTful APIs using .NET Core with proper authentication, error handling, and database integration. Followed best practices for API design and security.",
    tech: [".NET Core", "C#", "SQL Server", "JWT Authentication"],
    tags: [".NET Core", "API", "SQL"],
    tagColor: "bg-accent/10 text-accent border-accent/20",
    github: null,
  },
];

const ProjectsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-line mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="reveal project-card bg-card rounded-xl border border-border overflow-hidden flex flex-col"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Header with tags */}
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 text-xs font-medium rounded-full border ${project.tagColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="px-6 pb-4 flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground/80">Tech Stack:</span>{" "}
                  {project.tech.join(", ")}
                </p>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-accent to-accent-warm text-accent-foreground rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20 active:scale-[0.97]"
                  >
                    <Github size={16} />
                    View Code
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-muted-foreground bg-muted rounded-lg">
                    Coming Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
