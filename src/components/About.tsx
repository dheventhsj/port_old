import { GraduationCap, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      school: "SRM University",
      degree: "BTech CSE - AI & ML",
      period: "2023 - Present",
    },
    {
      school: "KSR Akshara Academy",
      degree: "12th Grade",
      period: "Completed",
    },
    {
      school: "KSR Akshara Academy",
      degree: "10th Grade",
      period: "Completed",
    },
  ];

  const experience = [
    {
      company: "Deforay Technology",
      role: "Web Development Intern",
      period: "June 2024 - August 2024",
      description: "Developed responsive web applications using modern frameworks and technologies.",
    },
    {
      company: "OptimSpace",
      role: "AI & Cloud Virtual Intern",
      period: "May 2024 - July 2024",
      description: "Worked on AI model deployment and cloud infrastructure optimization.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            I'm Dheventh Senthil, a BTech CSE student specializing in Artificial Intelligence and Machine Learning at SRM University.
            Passionate about developing intelligent systems, exploring real-world applications of AI, and creating modern web solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 card-gradient border-border hover:border-primary transition-all duration-300 hover:glow-red"
              >
                <h4 className="text-xl font-semibold text-primary mb-2">{edu.school}</h4>
                <p className="text-foreground font-medium mb-1">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </Card>
            ))}
          </div>

          {/* Experience */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="p-6 card-gradient border-border hover:border-primary transition-all duration-300 hover:glow-red"
              >
                <h4 className="text-xl font-semibold text-primary mb-2">{exp.company}</h4>
                <p className="text-foreground font-medium mb-1">{exp.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                <p className="text-sm text-muted-foreground">{exp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
