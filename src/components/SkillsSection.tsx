import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skills = [
    { name: "Python", level: 95 },
    { name: "ReactJS", level: 97 },
    { name: "PHP", level: 93 },
    { name: "MySQL", level: 95 },
    { name: "Java", level: 94 },
    { name: "AngularJS", level: 80 },
    { name: "HTML", level: 99 },
    { name: "CSS", level: 99 },
    { name: "Machine Learning", level: 92 },
    { name: "Data Science & Visualization", level: 90 },
    { name: "NLP & LLM Integration", level: 88 },
    { name: "API Design & Integration", level: 91 },
    { name: "Docker & Cloud Deployment", level: 85 },
    { name: "Prompt Engineering & Generative AI Systems", level: 86 },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-foreground font-medium">{skill.name}</span>
                <span className="text-muted-foreground text-sm">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
