import { portfolioData } from "@/data/portfolioData";
import { Card } from "@/components/ui/card";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

export const HighlightWorks = () => {
  const sections = [
    {
      title: "Backend",
      items: portfolioData.highlightWorks.backend,
      color: "from-green-500 to-emerald-500",
      icon: "Server",
    },
    {
      title: "Frontend",
      items: portfolioData.highlightWorks.frontend,
      color: "from-blue-500 to-cyan-500",
      icon: "Monitor",
    },
  ];

  return (
    <section id="highlight-works" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key Features & Modules
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4">
            Highlight works I've built across backend and frontend
          </p>
        </div>

        <div className="space-y-12">
          {sections.map((section) => {
            const SectionIcon = Icons[section.icon as keyof typeof Icons] as LucideIcon;
            return (
              <div key={section.title} className="animate-fade-in">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center`}
                  >
                    {SectionIcon && (
                      <SectionIcon className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold">{section.title}</h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {section.items.map((item, idx) => {
                    const ItemIcon = Icons[item.icon as keyof typeof Icons] as LucideIcon;
                    return (
                      <Card
                        key={item.title}
                        className="p-5 card-hover animate-fade-in"
                        style={{ animationDelay: `${idx * 80}ms` }}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br ${section.color} bg-opacity-10 flex items-center justify-center`}
                          >
                            {ItemIcon && (
                              <ItemIcon className="h-5 w-5 text-white" />
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1">{item.title}</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
