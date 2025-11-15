import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    <section id="publications" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Selected Publications</h2>
          <div className="title-underline"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 animate-slide-in-left">
          {publications.map((pub, index) => (
            <Card key={index} className="hover-lift group border-l-4 border-l-transparent hover:border-l-primary transition-all">
              <CardHeader>
                <CardTitle className="text-lg leading-tight mb-3">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors flex items-start gap-2"
                  >
                    <span className="flex-1 line-clamp-3">{pub.title}</span>
                    <ExternalLink className="w-4 h-4 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">{pub.authors}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2 font-medium">{pub.venue}</p>
                <Badge variant="outline" className="text-xs">
                  {pub.publisher}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
