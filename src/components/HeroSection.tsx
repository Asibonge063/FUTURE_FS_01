import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />

      {/* Animated floating circles */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent-warm/8 blur-3xl animate-float-delayed pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl animate-float-slow pointer-events-none" />

      {/* Small decorative circles */}
      <div className="absolute top-32 right-1/4 w-4 h-4 rounded-full bg-accent/30 animate-float" />
      <div className="absolute bottom-40 left-1/4 w-3 h-3 rounded-full bg-accent-warm/30 animate-float-delayed" />
      <div className="absolute top-1/2 right-20 w-2 h-2 rounded-full bg-accent/40 animate-float-slow" />

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-sm font-mono font-medium text-accent tracking-wider mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
          >
            👋 Welcome to my portfolio
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-foreground mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            Hi, I'm{" "}
            <span className="gradient-text">Asibonge Malinga</span>
          </h1>

          <p
            className="text-xl sm:text-2xl font-medium text-accent mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "250ms" }}
          >
            Full Stack Developer | DUT Graduate in Applications Development
          </p>

          <p
            className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "350ms" }}
          >
            Specialized in C#, .NET, Java, JavaScript & RESTful APIs
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "450ms" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center h-12 px-8 text-sm font-semibold bg-gradient-to-r from-accent to-accent-warm text-accent-foreground rounded-lg transition-all active:scale-[0.97] hover:shadow-lg hover:shadow-accent/25"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center h-12 px-8 text-sm font-semibold border border-accent text-accent rounded-lg transition-all hover:bg-accent hover:text-accent-foreground active:scale-[0.97]"
            >
              Get In Touch
            </a>
          </div>

          {/* Social links */}
          <div
            className="flex items-center justify-center gap-5 mt-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "600ms" }}
          >
            <a
              href="https://github.com/Asibonge063"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:asibonge@example.com"
              className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all"
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
