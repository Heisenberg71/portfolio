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
    <section id="resume" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">My Resume</h2>
          <div className="title-underline"></div>
        </div>

        {/* Work Experience */}
        <div className="mb-20 animate-slide-in-left">
          <div className="flex items-center gap-3 mb-10">
            <Briefcase className="w-7 h-7 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">Work Experience</h3>
          </div>
          <div className="space-y-6">
            {workExperience.map((work, index) => (
              <Card key={index} className="hover-lift border-l-4 border-l-primary/50">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{work.title}</CardTitle>
                      <CardDescription className="text-base font-medium">{work.organization}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="flex-shrink-0 font-medium">
                      {work.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">{work.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20 animate-slide-in-right">
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap className="w-7 h-7 text-primary" />
            <h3 className="text-3xl font-bold text-foreground">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover-lift border-l-4 border-l-primary/50">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                      <CardDescription className="text-base font-medium">{edu.institution}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="flex-shrink-0 font-medium">
                      {edu.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed text-sm">{edu.description}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="font-semibold text-primary border-primary">
                      CGPA: {edu.cgpa}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="animate-fade-in">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-7 h-7 flex items-center justify-center">
              <div className="w-5 h-5 rounded bg-primary"></div>
            </div>
            <h3 className="text-3xl font-bold text-foreground">Skills</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill, index) => (
              <Card key={index} className="hover-lift border-l-4 border-l-primary/30">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-foreground font-semibold">{skill.name}</span>
                    <Badge variant="secondary" className="font-bold">
                      {skill.level}%
                    </Badge>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-primary to-primary/70 h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
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
