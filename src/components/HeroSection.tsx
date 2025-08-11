import { Button } from "@/components/ui/button";
import { MessageCircle, Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Welcome to
          <br />
          the <span className="gradient-text">Data-Centric AI</span> Community
        </h1>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Are you intrigued by the possibilities of Data-Centric AI, and you want more?
          </p>
          <p className="text-lg md:text-xl text-muted-foreground">
            Join like-minded experts, thought-leaders and peers at the Data-Centric Community!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="btn-glow bg-gradient-primary hover:bg-gradient-primary/90 text-white px-8 py-4 text-lg"
            onClick={() => window.open('https://discord.gg/Z73kKJBRyv', '_blank')}
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            Join us on Discord
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
            onClick={() => window.open('https://github.com/Data-Centric-AI-Community', '_blank')}
          >
            <Github className="w-5 h-5 mr-3" />
            Join us on Github
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;