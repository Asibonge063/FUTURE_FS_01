import { useScrollReveal } from "@/hooks/useScrollReveal";
import { User, Briefcase, Award } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "2+", label: "Years of Experience" },
  { icon: Award, value: "10+", label: "Projects Completed" },
  { icon: User, value: "5+", label: "Technologies" },
];

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-line mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="reveal text-muted-foreground leading-relaxed text-lg" style={{ transitionDelay: "80ms" }}>
              I'm a passionate Full Stack Developer with a degree in Applications Development from the
              Durban University of Technology. With expertise in modern web technologies and enterprise
              frameworks, I build scalable, efficient applications that solve real-world problems.
            </p>
            <p className="reveal text-muted-foreground leading-relaxed" style={{ transitionDelay: "160ms" }}>
              My journey in software development has equipped me with strong problem-solving skills
              and the ability to work with diverse technologies across the full technology stack.
              I'm dedicated to writing clean, maintainable code and staying updated with industry
              best practices.
            </p>
            <p className="reveal text-muted-foreground leading-relaxed" style={{ transitionDelay: "240ms" }}>
              Currently looking for opportunities to contribute to innovative projects and grow as a developer.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="reveal text-center p-6 bg-card rounded-xl border border-border skill-card"
                style={{ transitionDelay: `${(i + 1) * 120}ms` }}
              >
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
