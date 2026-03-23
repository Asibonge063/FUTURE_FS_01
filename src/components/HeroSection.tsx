import { ArrowDown, Github, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/50 to-transparent" />

      {/* Accent color wash — top-right */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-warm/8 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-3xl">
          <p
            className="text-sm font-mono font-medium text-accent tracking-wide mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
          >
            Applications Developer · DUT Graduate
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-[4.25rem] font-bold leading-[1.1] tracking-[-0.04em] text-foreground mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            Building robust systems
            <br />
            <span className="text-accent">with .NET & C#</span>
          </h1>

          <p
            className="text-lg text-text-secondary leading-relaxed max-w-xl mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            Applications Development graduate from Durban University of Technology, focused on scalable
            RESTful APIs, enterprise-grade MVC architecture, and full-stack web solutions.
          </p>

          <div
            className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "450ms" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center h-11 px-6 text-sm font-semibold bg-accent text-accent-foreground rounded-sm transition-all active:scale-[0.97] hover:brightness-110 shadow-md shadow-accent/25"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center h-11 px-6 text-sm font-semibold border border-foreground text-foreground rounded-sm transition-colors hover:bg-foreground hover:text-background active:scale-[0.97]"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div
            className="flex items-center gap-5 mt-12 opacity-0 animate-fade-up"
            style={{ animationDelay: "600ms" }}
          >
            <a
              href="https://github.com/Asibonge063"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:asibonge@example.com"
              className="text-text-secondary hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}>
        <a href="#about" className="text-accent hover:text-foreground transition-colors">
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
