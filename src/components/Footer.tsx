const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center space-y-2">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="font-medium text-foreground">Asibonge Malinga</span>. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Built with <span className="text-accent">❤</span> using HTML, CSS & JavaScript
        </p>
      </div>
    </footer>
  );
};

export default Footer;
