import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import kreyoLogo from "@/assets/kreyo-logo.svg";

export const TopNav = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src={kreyoLogo} alt="Kreyo Logo" className="h-8 w-8" />
            <span className="font-semibold font-display text-xl tracking-tight translate-y-[3px] -translate-x-[5px]">Kreyo</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-sans">
            <a href="/#fit" className="hover:text-foreground transition-colors">How Kreyo fits</a>
            <a href="/#services" className="hover:text-foreground transition-colors">What we do</a>
            <a href="/#how" className="hover:text-foreground transition-colors">How it works</a>
            <a href="/#trust" className="hover:text-foreground transition-colors">Why Kreyo</a>
          </nav>
          <Button onClick={() => navigate('/start')} variant="default" size="sm" className="rounded-full">
            Connect with GitHub
          </Button>
        </div>
      </div>
    </header>
  );
};
