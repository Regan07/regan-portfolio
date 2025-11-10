import { portfolioData } from "@/data/portfolioData";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6">
              <Briefcase className="h-6 w-6 text-primary" />
              Work Experience
            </h3>
            {portfolioData.experience.map((exp, idx) => (
              <Card
                key={exp.id}
                className="p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-lg">{exp.role}</h4>
                    <p className="text-primary text-sm">{exp.company}</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {exp.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Education & Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            {portfolioData.education.map((edu, idx) => (
              <Card
                key={edu.id}
                className="p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-lg">{edu.degree}</h4>
                    <p className="text-primary text-sm">{edu.institution}</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {edu.year}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{edu.description}</p>
              </Card>
            ))}

            <h3 className="text-2xl font-semibold flex items-center gap-2 mb-6 mt-8">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>
            {portfolioData.certifications.map((cert, idx) => (
              <Card
                key={cert.id}
                className="p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${(idx + 3) * 100}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {cert.year}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
