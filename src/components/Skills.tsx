import { Card } from "@/components/ui/card";
import { Code2, Database, Brain, Cloud } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code2,
      skills: ["C", "C++", "Java", "Python", "JavaScript", "PHP"],
    },
    {
      title: "Web Development",
      icon: Database,
      skills: ["HTML", "CSS", "React", "MySQL", "JavaScript", "PHP"],
    },
    {
      title: "AI & ML",
      icon: Brain,
      skills: [
        "Machine Learning",
        "Deep Learning",
        "LSTM",
        "Linear Regression",
        "Random Forest",
        "Data Analysis",
      ],
    },
    {
      title: "Tools & Cloud",
      icon: Cloud,
      skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Git/GitHub", "AWS"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive skill set spanning programming, web development, AI/ML, and cloud technologies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 card-gradient border-border hover:border-primary transition-all duration-300 hover:glow-red hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-secondary text-sm rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
