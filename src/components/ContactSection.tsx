import { useState, FormEvent } from "react";
import { Send, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useScrollReveal();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="reveal text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="section-line mx-auto mb-4" />
          <p className="reveal text-muted-foreground" style={{ transitionDelay: "80ms" }}>
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="reveal bg-card border border-border rounded-xl p-8 space-y-5"
            style={{ transitionDelay: "120ms" }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name</label>
              <input
                id="name" name="name" type="text" required
                className="w-full h-12 px-4 text-sm bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
              <input
                id="email" name="email" type="email" required
                className="w-full h-12 px-4 text-sm bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Subject</label>
              <input
                id="subject" name="subject" type="text" required
                className="w-full h-12 px-4 text-sm bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition"
                placeholder="What's this about?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                id="message" name="message" rows={5} required
                className="w-full px-4 py-3 text-sm bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 h-12 text-sm font-semibold bg-gradient-to-r from-accent to-accent-warm text-accent-foreground rounded-lg transition-all active:scale-[0.97] hover:shadow-lg hover:shadow-accent/25 disabled:opacity-50"
            >
              {loading ? "Sending…" : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </button>
          </form>

          {/* Contact Info */}
          <div className="reveal space-y-8" style={{ transitionDelay: "200ms" }}>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:asibonge@example.com" className="text-muted-foreground hover:text-accent transition-colors">
                      asibonge@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+27 (123) 456-789</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Durban, South Africa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Asibonge063"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:asibonge@example.com"
                className="p-3 rounded-lg bg-card border border-border text-muted-foreground hover:text-accent hover:border-accent transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
