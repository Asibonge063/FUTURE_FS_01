import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillGroups = [
  {
    title: "Languages",
    skills: ["C#", "Java", "JavaScript", "HTML", "CSS", "SQL"],
    color: "bg-accent/10 text-accent border border-accent/20",
  },
  {
    title: "Frameworks & Tools",
    skills: ["ASP.NET MVC", ".NET Core", "RESTful APIs", "Entity Framework"],
    color: "bg-accent-warm/10 text-accent-warm border border-accent-warm/20",
  },
  {
    title: "Database",
    skills: ["SQL Server (Microsoft)", "Database Design", "Stored Procedures"],
    color: "bg-accent/10 text-accent border border-accent/20",
  },
  {
    title: "Other",
    skills: ["Git & GitHub", "Visual Studio", "Agile / Scrum", "Problem Solving"],
    color: "bg-accent-warm/10 text-accent-warm border border-accent-warm/20",
  },
];

const SkillsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="reveal text-2xl font-semibold tracking-[-0.02em] text-foreground">
              Technical Skills
            </h2>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-8">
            {skillGroups.map((group, i) => (
              <div
                key={group.title}
                className="reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-3 py-1.5 text-xs font-mono font-medium rounded-sm ${group.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
