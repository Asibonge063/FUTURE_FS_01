import { useScrollReveal } from "@/hooks/useScrollReveal";

const ExperienceSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="reveal text-2xl font-semibold tracking-[-0.02em] text-foreground">
              Resume
            </h2>
          </div>
          <div className="md:col-span-8 space-y-10">
            {/* Education */}
            <div className="reveal" style={{ transitionDelay: "80ms" }}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-5">
                Education
              </h3>
              <div className="border-l-2 border-accent/40 pl-6 space-y-6">
                <div>
                  <p className="text-xs font-mono text-accent mb-1">2022 — 2025</p>
                  <p className="font-semibold text-foreground">Diploma in Applications Development</p>
                  <p className="text-text-secondary">Durban University of Technology</p>
                </div>
              </div>
            </div>

            {/* Competencies */}
            <div className="reveal" style={{ transitionDelay: "200ms" }}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-5">
                Core Competencies
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Full-Stack Web Development",
                  "RESTful API Design & Integration",
                  "Database Architecture (SQL Server)",
                  "MVC Pattern & .NET Core",
                  "Version Control (Git/GitHub)",
                  "Problem Solving & Debugging",
                ].map((comp) => (
                  <div key={comp} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-accent-warm shrink-0" />
                    <span className="text-text-secondary text-sm">{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
