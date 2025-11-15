import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Research Areas",
      skills: [
        "Bioinformatics",
        "Machine Learning",
        "Human-Computer Interaction",
        "Database Management",
        "AI-driven Tools",
        "Natural Language Processing",
      ],
    },
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "R", "C++"],
    },
    {
      category: "Frameworks & Tools",
      skills: [
        "React",
        "Node.js",
        "TensorFlow",
        "PyTorch",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "Git",
      ],
    },
    {
      category: "Academic",
      skills: [
        "Research Writing",
        "Peer Review",
        "Conference Presentations",
        "Scientific Communication",
        "Teaching & Mentoring",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
