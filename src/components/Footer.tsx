import { Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[12rem] font-bold text-muted/60 leading-none tracking-tighter">
          AM
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-sm text-text-secondary">
              Designed & developed by <span className="font-medium text-foreground">Asibonge Malinga</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {new Date().getFullYear()} · All rights reserved
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Asibonge063"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:asibonge@example.com"
              className="text-text-secondary hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
