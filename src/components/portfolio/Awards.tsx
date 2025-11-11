import { portfolioData } from "@/data/portfolioData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy } from "lucide-react";

export const Awards = () => {
  return (
    <section id="awards" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4">
            Recognition for excellence and outstanding contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.awards.map((award, idx) => (
            <Card
              key={award.id}
              className="p-6 card-hover animate-fade-in bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    {idx === 0 ? (
                      <Trophy className="h-6 w-6 text-white" />
                    ) : (
                      <Award className="h-6 w-6 text-white" />
                    )}
                  </div>
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold">{award.name}</h3>
                    <Badge variant="secondary" className="text-xs whitespace-nowrap">
                      {award.date}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};