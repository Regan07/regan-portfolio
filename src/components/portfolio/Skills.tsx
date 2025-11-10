import { portfolioData } from "@/data/portfolioData";
import { Card } from "@/components/ui/card";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

export const Skills = () => {
  const categories = [
    { title: "Frontend", skills: portfolioData.skills.frontend, color: "from-blue-500 to-cyan-500" },
    { title: "Backend", skills: portfolioData.skills.backend, color: "from-green-500 to-emerald-500" },
    { title: "DevOps", skills: portfolioData.skills.devops, color: "from-orange-500 to-red-500" },
    { title: "Database", skills: portfolioData.skills.database, color: "from-purple-500 to-pink-500" },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <Card
              key={category.title}
              className="p-6 card-hover animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                <div className="text-white font-bold text-xl">
                  {category.title[0]}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => {
                  const Icon = Icons[skill.icon as keyof typeof Icons] as LucideIcon;
                  return (
                    <li key={skill.name} className="flex items-center gap-3 text-sm">
                      {Icon && <Icon className="h-4 w-4 text-primary" />}
                      <span className="text-muted-foreground">{skill.name}</span>
                    </li>
                  );
                })}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
