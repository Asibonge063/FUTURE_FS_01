import { useScrollReveal } from "@/hooks/useScrollReveal";
import sectionBg from "@/assets/section-bg.jpg";

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${sectionBg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 bg-muted/70" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="reveal text-2xl font-semibold tracking-[-0.02em] text-foreground">About Me</h2>
          </div>
          <div className="md:col-span-8 space-y-5">
            <p className="reveal text-lg leading-relaxed text-text-secondary" style={{ transitionDelay: "80ms" }}>
              I am a dedicated Applications Development graduate from the Durban University of Technology
              with a strong foundation in building scalable, maintainable web applications.
              My expertise spans the full development lifecycle — from database design and API architecture
              to responsive front-end interfaces.
            </p>
            <p className="reveal text-lg leading-relaxed text-text-secondary" style={{ transitionDelay: "160ms" }}>
              I specialise in the Microsoft technology ecosystem, working extensively with C#, ASP.NET MVC,
              .NET Core, and SQL Server. I am passionate about writing clean, well-structured code and
              continuously learning new technologies to solve real-world problems.
            </p>
            <div className="reveal pt-4" style={{ transitionDelay: "240ms" }}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">Education</h3>
              <p className="font-medium text-foreground">Diploma in Applications Development</p>
              <p className="text-text-secondary">Durban University of Technology (DUT)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
