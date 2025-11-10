import { portfolioData } from "@/data/portfolioData";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Briefcase } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {portfolioData.bio}
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <Card className="p-4 text-center card-hover">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">{portfolioData.stats.yearsOfExperience}+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </Card>
              <Card className="p-4 text-center card-hover">
                <Briefcase className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">{portfolioData.stats.projectsCompleted}+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </Card>
              <Card className="p-4 text-center card-hover">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">{portfolioData.stats.clientsSatisfied}+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </Card>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-card rounded-2xl border-2 border-primary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold gradient-text mb-2">
                    {portfolioData.name[0]}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {portfolioData.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
