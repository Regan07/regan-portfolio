import { portfolioData } from "@/data/portfolioData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, GlobeIcon } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4">
            A collection of projects I've built and contributed to
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, idx) => (
            <Card
              key={project.id}
              className="overflow-hidden card-hover animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwYjhkNCIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
                <div className="text-6xl font-bold text-primary/30">
                  {project.title[0]}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.tenure && (
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                      <span className="inline-block w-1 h-1 bg-primary rounded-full"></span>
                      {project.tenure}
                    </p>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.contributions && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">My Contributions:</h4>
                    <ul className="space-y-1">
                      {project.contributions.map((contribution, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start">
                          <span className="mr-2 text-primary">•</span>
                          <span>{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  {project.website && (
                    <Button asChild variant="outline" size="sm" className="gap-2">
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                      <GlobeIcon className="h-4 w-4" />
                        Website
                      </a>
                    </Button>
                  )}

                  <Button asChild size="sm" className="gap-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
