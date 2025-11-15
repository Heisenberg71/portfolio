import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const WorkProjects = () => {
  const projects = [
    {
      title: "SmartGrant",
      description:
        "SmartGrant is an intelligent research budgeting and proposal assistance system designed to help investigators automatically generate, validate, and optimize grant budgets. It integrates institutional rate policies, funding agency guidelines, and project-specific parameters to produce accurate multi-year budgets with minimal manual effort. The system enhances transparency and compliance, reducing administrative workload and supporting data-driven funding decisions.",
      source: "Internal Research Tool",
      tags: ["Research Tools", "Budget Management", "AI", "Automation"],
    },
    {
      title: "CroW (Cross-domain Wrapper Generator)",
      description:
        "CroW is a modular AI-driven system for automated web wrapper generation and data extraction across heterogeneous web sources. It combines rule-based and machine learning techniques to support semi-structured and non-tabular web data, enabling rapid construction of reusable data integration pipelines. The framework powers complex bioinformatics workflows and is distributed as a standalone Python package for the research community.",
      source: "ACM/IEEE Publications",
      tags: ["Web Scraping", "AI", "Data Integration", "Python"],
    },
    {
      title: "VisFlow",
      description:
        "VisFlow is a visual workflow platform that enables scientists to design, execute, and monitor data-driven experiments through an intuitive drag-and-drop interface. It integrates data analytics, workflow automation, and visualization tools to streamline experimental pipelines in biology and environmental research. The system emphasizes usability and reproducibility, bridging the gap between data science and domain expertise.",
      source: "SmartDB Lab, University of Idaho",
      tags: ["Workflow", "Visualization", "HCI", "Data Science"],
    },
    {
      title: "FAIRBridge",
      description:
        "FAIRBridge is an AI-powered system designed to assist biologists in accessing and analyzing biological data. It interprets user queries, maps them to relevant databases, and generates executable queries to retrieve data. The system aims to enhance the FAIRness (Findability, Accessibility, Interoperability, and Reusability) of biological data, ensuring high-quality and responsive information delivery.",
      source: "arXiv",
      tags: ["Bioinformatics", "AI", "Database", "FAIR Data"],
    },
    {
      title: "Project 360",
      description:
        "Project 360 is an intelligent tutoring system focused on database education. It offers high-quality courses, interactive assignments, and tests to facilitate personalized learning experiences for students. The platform aims to connect students with the best tutors, enhancing their learning outcomes in the field of databases.",
      source: "DBLab",
      tags: ["Education", "Database", "E-Learning", "Tutoring"],
    },
    {
      title: "SoDa (Semantic Data Foraging)",
      description:
        "SoDa is a tool developed to assist biologists in discovering and accessing relevant data from the internet. It helps users identify resources based on their analysis requirements, generate resource access plans, and store cleaned data for community use. SoDa aims to address the challenges posed by unstructured and non-FAIR data on the web, facilitating efficient data retrieval and sharing within the scientific community.",
      source: "MDPI",
      tags: ["Data Discovery", "Bioinformatics", "Semantic Web"],
    },
    {
      title: "Cover Whale",
      description:
        "Cover Whale is a technology-driven commercial auto insurance provider specializing in the trucking industry. It offers a suite of insurance products, including liability, cargo, and vehicle coverage, tailored for truckers and small fleets. The company leverages technology and data to provide innovative solutions, aiming to improve safety and ease of use for agents and drivers alike.",
      source: "Cover Whale",
      tags: ["Insurance", "Full-Stack", "Web Development"],
    },
    {
      title: "FLS-Desk",
      description:
        "FLS-Desk is a web-based management tool designed for the administration and monitoring of Field Loadable Software (FLS) processes. It supports remote management, handles various aircraft types, and facilitates software updates and configuration reporting. The tool aims to streamline the management of FLS, ensuring efficient and accurate software deployment in aviation systems.",
      source: "mbs-electronics.com",
      tags: ["Aviation", "Management System", "Web Application"],
    },
    {
      title: "BrainView",
      description:
        "BrainView is a system designed for objective cognitive assessment using EEG (electroencephalography). It provides clinicians with tools to measure brain activity, reaction times, and other cognitive functions, offering insights into neurological conditions. The system aims to enhance patient care by integrating objective brain data into clinical practice, facilitating accurate diagnosis and personalized treatment plans.",
      source: "Google Scholar",
      tags: ["Healthcare", "EEG", "Cognitive Assessment", "Medical"],
    },
  ];

  return (
    <section id="work" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Work & Projects</h2>
          <div className="title-underline"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 animate-slide-in-right">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift group border-l-4 border-l-transparent hover:border-l-primary transition-all">
              <CardHeader>
                <CardTitle className="text-lg mb-3 flex items-start justify-between gap-2">
                  <span className="font-bold">{project.title}</span>
                  <ExternalLink className="w-4 h-4 flex-shrink-0 mt-1 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed line-clamp-4">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xs text-muted-foreground font-medium">
                  <span className="text-foreground">Source:</span> {project.source}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs font-medium">
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

export default WorkProjects;
