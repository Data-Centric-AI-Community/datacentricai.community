import { Button } from "@/components/ui/button";
import { Github, MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rotate-45"></div>
          </div>
          <span className="font-bold text-lg">Data-Centric AI Community</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <MessageCircle className="w-4 h-4 mr-2" />
            Discord
          </Button>
          <Button variant="secondary" size="sm">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;