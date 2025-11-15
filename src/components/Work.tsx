import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Work = () => {
  const projects = [
    {
      title: "WriteAssist",
      description:
        "A personalized generative AI system for autonomous authoring of scholarly literature reviews using advanced NLP techniques.",
      tags: ["AI", "NLP", "Research Tools", "GenAI"],
    },
    {
      title: "VisFlow 2.0",
      description:
        "Abstract visual scientific workflow design platform enabling scientists to create and manage complex data workflows intuitively.",
      tags: ["Data Visualization", "Workflow", "HCI"],
    },
    {
      title: "EcoManure",
      description:
        "Machine learning framework for nitrogen level prediction and classification in sustainable manure waste management.",
      tags: ["Machine Learning", "Environmental Science", "Prediction"],
    },
    {
      title: "FAIR Database Integration",
      description:
        "GenAI-powered system for improved FAIR (Findable, Accessible, Interoperable, Reusable) independent biological database integration.",
      tags: ["Bioinformatics", "GenAI", "Database"],
    },
    {
      title: "SQL Tutoring System",
      description:
        "LLM-based intelligent tutoring and assessment system for SQL education using state-of-the-art language models.",
      tags: ["Education", "LLM", "Assessment"],
    },
    {
      title: "FAIR Resource Recommender",
      description:
        "Smart recommendation system for open scientific inquiries following FAIR data principles.",
      tags: ["Recommender System", "Open Science", "AI"],
    },
  ];

  return (
    <section id="work" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Research Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
