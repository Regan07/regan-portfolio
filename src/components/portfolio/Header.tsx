import { Moon, Sun, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolioData";

export const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [scrolled, setScrolled] = useState(false);

  // Initialize dark mode as default and handle persistence
  useEffect(() => {
    // Check if user has a saved preference, otherwise default to dark
    const savedTheme = localStorage.getItem("portfolio-theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "dark";
    
    setTheme(initialTheme);
    
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    // Save preference to localStorage
    localStorage.setItem("portfolio-theme", newTheme);
    
    // Toggle dark class
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8 lg:px-16 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
        >
          {portfolioData.name}
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("awards")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Awards
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </button>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>

          <Button asChild size="sm" className="gap-2">
            <a href={portfolioData.resumeLink} download>
              <Download className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>
      </nav>
    </header>
  );
};
