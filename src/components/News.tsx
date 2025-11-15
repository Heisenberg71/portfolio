import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      date: "January 2025",
      title: "Presenting at USDA Waste to Worth Conference",
      description:
        "Excited to present our work on EcoManure at the USDA Waste to Worth Conference 2025.",
    },
    {
      date: "December 2024",
      title: "Paper Accepted at ACM HT",
      description:
        "Our paper on WriteAssist has been accepted at the 36th ACM Conference on Hypertext and Social Media.",
    },
    {
      date: "November 2024",
      title: "Reviewer for IEEE ICALT",
      description:
        "Serving as a reviewer for the IEEE International Conference on Advanced Learning Technologies.",
    },
    {
      date: "October 2024",
      title: "Publication in JDIQ",
      description:
        "Our work on FAIR biological database integration has been published in the Journal of Data and Information Quality.",
    },
  ];

  return (
    <section id="news" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Latest News</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {newsItems.map((item, index) => (
            <Card key={index} className="hover-lift transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
