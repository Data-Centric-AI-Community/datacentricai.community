import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Stay updated on <span className="gradient-text">Discord</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12">
            Join the Data-Centric AI Community on Discord and be part of the conversation!
          </p>
          
          <Button 
            size="lg"
            className="btn-glow bg-gradient-secondary hover:bg-gradient-secondary/90 text-white px-12 py-6 text-xl"
            onClick={() => window.open('https://discord.gg/Z73kKJBRyv', '_blank')}
          >
            <MessageCircle className="w-6 h-6 mr-4" />
            Join Discord
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;