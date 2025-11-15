import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const Resume = () => {
  const workExperience = [
    {
      period: "2024 - Current",
      title: "Graduate Research Assistant",
      organization: "University of Idaho, Moscow, Idaho, USA",
      description:
        "Focused on conducting cutting-edge research in bioinformatics and human-computer interaction, working closely with faculty and other researchers. Developed AI-driven tools for data integration and visualization using Python, R, SQL, and ReactJS. Collaborated on research publications, grant proposals, and experimental workflow optimization.",
    },
    {
      period: "2021 - 2024",
      title: "Graduate Teaching Assistant",
      organization: "University of Idaho, Moscow, Idaho, USA",
      description:
        "Contributed to the academic environment by teaching Database Management Systems and C++ programming. Assisted in curriculum design, grading, and mentoring students. Utilized tools such as MySQL, PostgreSQL, Python, and Visual Studio to support lab exercises and hands-on projects.",
    },
    {
      period: "2020 - 2021",
      title: "Remote Full-Stack Developer",
      organization: "Cover Whale Trucking Insurance, USA",
      description:
        "Developed and enhanced web-based insurance software solutions for commercial trucking. Built responsive user interfaces and robust backend systems using modern frameworks.",
    },
  ];

  const education = [
    {
      period: "2021 - 2026",
      degree: "PhD in Computer Science",
      institution: "University of Idaho, Moscow, Idaho, USA",
      description:
        "Pursuing a Doctor of Philosophy degree specializing in Bioinformatics, Human-Computer Interaction, Database Systems, and Machine Learning. Engaged in research focusing on AI-driven tools for biological and clinical data analysis, workflow optimization, and interactive visualization platforms. Developed advanced prototypes using Python, R, SQL, ReactJS, and cloud technologies while contributing to multiple publications and conference presentations.",
      cgpa: "4.00 / 4.00",
    },
    {
      period: "2014 - 2016",
      degree: "Master in Computer Engineering",
      institution: "Universitat Rovira I Virgili, Tarragona, Spain",
      description:
        "Completed a Master of Science degree with focus on Data Mining, Artificial Intelligence, and Software Engineering. Conducted research on machine learning models and web-based systems, gaining hands-on experience with Python, MATLAB, Java, and database systems. Published a thesis on intelligent systems and actively participated in academic workshops and seminars.",
      cgpa: "7.91 / 10.00",
    },
    {
      period: "2003 - 2008",
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "Shahjalal University of Science and Technology, Sylhet, Bangladesh",
      description:
        "Earned a Bachelor of Science degree, building a strong foundation in Software Development, Algorithms, Networking, and Database Management. Completed multiple projects in C, C++, Java, and MySQL, gaining practical experience in problem-solving, system design, and teamwork. Graduated with distinction and actively participated in coding competitions and technical clubs.",
      cgpa: "3.64 / 4.00",
    },
  ];

  return (
    <section id="resume" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">My Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">Work Experience</h3>
          </div>
          <div className="space-y-6">
            {workExperience.map((work, index) => (
              <Card key={index} className="hover-lift transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-1">{work.title}</CardTitle>
                      <CardDescription className="text-base">{work.organization}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="flex-shrink-0">
                      {work.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{work.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover-lift transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-1">{edu.degree}</CardTitle>
                      <CardDescription className="text-base">{edu.institution}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="flex-shrink-0">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-semibold">
                      CGPA: {edu.cgpa}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
