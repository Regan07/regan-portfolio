import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const skills = portfolioData.hero.typedSkills;
    const currentSkill = skills[skillIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentSkill) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setSkillIndex((prev) => (prev + 1) % skills.length);
      } else {
        setTypedText(
          isDeleting
            ? currentSkill.substring(0, typedText.length - 1)
            : currentSkill.substring(0, typedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, skillIndex, isDeleting]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwYjhkNCIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="gradient-text">{portfolioData.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              {portfolioData.title}
            </h2>
            <div className="h-8 flex items-center justify-center">
              <p className="text-lg text-foreground/80">
                Specializing in{" "}
                <span className="text-primary font-semibold">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {portfolioData.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" onClick={scrollToContact} className="gap-2 group">
              <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 group border-primary/50 hover:bg-primary/10"
            >
              <a href={portfolioData.resumeLink} download>
                <Download className="h-4 w-4 group-hover:scale-110 transition-transform" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary"
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
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary"
            >
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            {portfolioData.social.twitter && (
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10 hover:text-primary"
              >
                <a
                  href={portfolioData.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
