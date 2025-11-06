import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import kreyoLogo from "@/assets/kreyo-logo.svg";

export const TopNav = () => {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    // Check if we're on the home page
    if (window.location.pathname !== '/') {
      // Navigate to home page with hash
      navigate(`/#${id}`);
      return;
    }
    
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-gray-200">
      <div className="flex h-16 items-center justify-between pl-6 pr-6">
        <a href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <img src={kreyoLogo} alt="Kreyo Logo" className="h-8 w-8" />
          <span className="font-semibold font-display text-xl tracking-tight translate-y-[3px] -translate-x-[5px]">Kreyo</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('fit')} 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            How it fits
          </button>
          <button 
            onClick={() => scrollToSection('services')} 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('how')} 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            How it works
          </button>
          <button 
            onClick={() => scrollToSection('trust')} 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Why Kreyo
          </button>
          <button 
            onClick={() => navigate('/pricing')} 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </button>
        </nav>

        <Button 
          onClick={() => window.location.href = 'https://app.kreyo.ai'} 
          variant="default" 
          size="sm" 
          className="rounded-full"
        >
          Connect with GitHub
        </Button>
      </div>
    </header>
  );
};
