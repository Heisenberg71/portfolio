import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "A GenAI System for Improved FAIR Independent Biological Database Integration",
      authors: "SN Sakib, K Naha, SY Rubaiat, HM Jamil",
      venue: "Journal of Data and Information Quality",
      publisher: "ACM",
      url: "https://dl.acm.org/doi/10.1145/3770753",
    },
    {
      title: "WriteAssist: A Personalized Generative AI System for Autonomous Authoring of Scholarly Literature Reviews",
      authors: "K Naha, SY Rubaiat, SN Sakib, HM Jamil",
      venue: "Proceedings of the 36th ACM Conference on Hypertext and Social Media",
      publisher: "ACM",
      url: "https://dl.acm.org/doi/full/10.1145/3720553.3746679",
    },
    {
      title: "A FAIR Resource Recommender System for Smart Open Scientific Inquiries",
      authors: "SN Sakib, SY Rubaiat, K Naha, HH Rahman, HM Jamil",
      venue: "Journal of Applied Sciences 15 (15), 8334",
      publisher: "MDPI",
      url: "https://doi.org/10.3390/app15158334",
    },
    {
      title: "Are Large Language Models Smart Enough for SQL Tutoring and Assessment?",
      authors: "K Naha, S Rubaiat, H Jamil",
      venue: "Proceedings of the 25th IEEE International Conference on Advanced Learning Technologies",
      publisher: "IEEE",
      url: "https://par.nsf.gov/biblio/10631964",
    },
    {
      title: "Abstract Visual Scientific Workflow Design using VisFlow 2.0",
      authors: "K Naha, HM Jamil",
      venue: "Proceedings of the 37th ACM International Conference on Scalable Scientific Data Management",
      publisher: "ACM",
      url: "https://dl.acm.org/doi/full/10.1145/3733723.3733746",
    },
    {
      title: "EcoManure: A Machine Learning Framework for Nitrogen Level Prediction and Classification of Sustainable Manure Waste Management",
      authors: "K Naha, H Jamil",
      venue: "Proceedings of the USDA Waste to Worth Conference, 2025",
      publisher: "USDA",
      url: "https://lpelc.org/ecomanure-a-machine-learning-framework-for-nitrogen-level-prediction-and-classification-of-sustainable-manure-waste-management/",
    },
  ];

  return (
    <section id="publications" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Selected Publications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {publications.map((pub, index) => (
            <Card key={index} className="hover-lift transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl leading-tight mb-2">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors flex items-start gap-2 group"
                  >
                    <span className="flex-1">{pub.title}</span>
                    <ExternalLink className="w-5 h-5 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </CardTitle>
                <CardDescription className="text-sm">{pub.authors}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-1">{pub.venue}</p>
                <p className="text-xs text-muted-foreground">Publisher: {pub.publisher}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
