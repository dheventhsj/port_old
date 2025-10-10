import { Card } from "@/components/ui/card";
import { Brain, BarChart3, Layers, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Predictive Modeling",
      description:
        "Build accurate machine learning models for forecasting and prediction using advanced algorithms and techniques.",
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      description:
        "Transform raw data into actionable insights through comprehensive analysis and visualization techniques.",
    },
    {
      icon: Layers,
      title: "Deep Learning",
      description:
        "Implement complex neural networks and deep learning solutions for advanced pattern recognition and AI applications.",
    },
    {
      icon: Zap,
      title: "AI/ML Integration",
      description:
        "Seamlessly integrate AI and ML solutions into web applications for intelligent, data-driven user experiences.",
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Offering comprehensive AI/ML development services tailored to your needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 card-gradient border-border hover:border-primary transition-all duration-300 hover:glow-red hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-block p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
