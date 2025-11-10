import { portfolioData } from "@/data/portfolioData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4">
            Have a project in mind? Let's work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8 card-hover">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
              <Button type="submit" className="w-full gap-2">
                <Mail className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href={`mailto:${portfolioData.social.email}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {portfolioData.social.email}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-hover">
              <h4 className="font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-3">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary hover:border-primary"
                >
                  <a
                    href={portfolioData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary hover:border-primary"
                >
                  <a
                    href={portfolioData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary hover:border-primary"
                >
                  <a
                    href={portfolioData.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <h4 className="font-semibold mb-3">Available for Opportunities</h4>
              <p className="text-sm text-muted-foreground mb-4">
                I'm currently open to freelance projects and full-time opportunities.
                Let's build something amazing together!
              </p>
              <Button asChild variant="outline" className="w-full">
                <a href={portfolioData.resumeLink} download>
                  Download Resume
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
