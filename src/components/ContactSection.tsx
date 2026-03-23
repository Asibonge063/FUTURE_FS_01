import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useScrollReveal();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending — replace with a real backend later
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
    <section id="contact" className="relative py-24 overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url(${sectionBg})`, backgroundSize: "cover", backgroundPosition: "top" }} />
      <div className="absolute inset-0 bg-muted/70" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="reveal text-2xl font-semibold tracking-[-0.02em] text-foreground">
              Get in Touch
            </h2>
            <p className="reveal text-text-secondary mt-2" style={{ transitionDelay: "80ms" }}>
              Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
            </p>
          </div>
          <div className="md:col-span-8">
            <form
              onSubmit={handleSubmit}
              className="reveal bg-card border border-border rounded-lg p-8 space-y-6"
              style={{ transitionDelay: "120ms" }}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full h-11 px-4 text-sm bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full h-11 px-4 text-sm bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full h-11 px-4 text-sm bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 text-sm bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
                  placeholder="Tell me about your project or opportunity…"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 h-11 px-6 text-sm font-semibold bg-primary text-primary-foreground rounded-sm transition-all active:scale-[0.97] hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Sending…" : (
                  <>
                    Send Message
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
