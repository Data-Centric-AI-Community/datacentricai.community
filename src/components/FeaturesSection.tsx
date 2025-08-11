import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dataProfilingIcon from "@/assets/data-profiling.png";
import syntheticDataIcon from "@/assets/synthetic-data.png";
import dataLabelingIcon from "@/assets/data-labeling.png";

const FeaturesSection = () => {
  const features = [
    {
      icon: dataProfilingIcon,
      title: "Data Profiling",
      description: "Understanding the existing data is the first step. Profile your data in a few lines of code.",
      link: "https://github.com/ydataai/ydata-profiling",
      linkText: "Explore your data with ydata-profiling!"
    },
    {
      icon: syntheticDataIcon,
      title: "Synthetic Data",
      description: "Synthetic data is artificially created data that keeps the original data properties, ensuring its business value while being privacy compliant.",
      link: "https://github.com/ydataai/ydata-synthetic",
      linkText: "Expand your data with ydata-synthetic!"
    },
    {
      icon: dataLabelingIcon,
      title: "Data Labeling",
      description: "Isn't it one of your biggest pain points in data quality? The DCAI Community cultivates meaningful discussions around this and other topics!",
      link: null,
      linkText: "Coming soon"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          The Data-Centric AI Community is the place to discuss
        </h2>
        <p className="text-xl md:text-2xl text-center mb-16 gradient-text font-semibold">
          data quality for data science.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-3xl p-8 shadow-card border border-border hover:shadow-elegant transition-all duration-300 group">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center p-4">
                  <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-center">{feature.title}</h3>
              <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                {feature.description}
              </p>
              
              <div className="text-center">
                {feature.link ? (
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary-foreground hover:bg-primary group-hover:translate-x-1 transition-all duration-300"
                    onClick={() => window.open(feature.link, '_blank')}
                  >
                    {feature.linkText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <span className="text-muted-foreground italic">{feature.linkText}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;