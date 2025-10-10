import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Stock Market System",
      description:
        "Comprehensive analysis and investment recommendation system built with SQL, Java, and PHP for intelligent stock market insights.",
      tags: ["Java", "PHP", "SQL", "Data Analysis"],
      gradient: "from-red-500/20 to-orange-500/20",
    },
    {
      title: "Smart Invest Stock System",
      description:
        "Web-based stock tracking and visualization platform featuring real-time data processing using HTML, PHP, Java, and MySQL.",
      tags: ["HTML", "PHP", "MySQL", "Java"],
      gradient: "from-red-600/20 to-pink-500/20",
    },
    {
      title: "AI-Powered Chatbot",
      description:
        "Intelligent chatbot leveraging Python and Natural Language Processing for smart query handling and conversational AI.",
      tags: ["Python", "NLP", "AI", "Machine Learning"],
      gradient: "from-red-500/20 to-red-700/20",
    },
    {
      title: "Sales Prediction Using ML",
      description:
        "Advanced predictive model with comprehensive data visualization for accurate sales forecasting and trend analysis.",
      tags: ["Python", "Machine Learning", "Data Visualization", "Analytics"],
      gradient: "from-orange-500/20 to-red-500/20",
    },
  ];

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Showcasing innovative projects combining AI, ML, and modern web technologies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group p-6 card-gradient border-border hover:border-primary transition-all duration-300 hover:glow-red animate-fade-in-up overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary text-xs rounded-full border border-border group-hover:border-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-border hover:border-primary hover:bg-primary/10"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
