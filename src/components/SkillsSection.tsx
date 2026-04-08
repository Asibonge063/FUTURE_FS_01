import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Server, Monitor, Database, Layers, Wrench, Users } from "lucide-react";

const skillGroups = [
  {
    title: "Backend Development",
    icon: Server,
    skills: [".NET Core", ".NET Framework", "C#", "Java", "Node.js"],
  },
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js"],
  },
  {
    title: "Database & Data",
    icon: Database,
    skills: ["SQL Server", "MySQL", "MongoDB", "SQL"],
  },
  {
    title: "Architecture & Patterns",
    icon: Layers,
    skills: ["MVC Pattern", "RESTful APIs", "Microservices", "Design Patterns"],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Visual Studio", "Git/GitHub", "VS Code", "SSMS"],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Problem Solving", "Communication", "Teamwork", "Attention to Detail"],
  },
];

const SkillsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-line mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <div
              key={group.title}
              className="reveal skill-card bg-card rounded-xl border border-border p-6"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-accent/10">
                  <group.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
