import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import kreyoLogo from "@/assets/kreyo-logo.svg";

export const TopNav = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-gray-200">
      <div className="flex h-16 items-center justify-between pl-6 pr-6">
        <a href="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <img src={kreyoLogo} alt="Kreyo Logo" className="h-8 w-8" />
          <span className="font-semibold font-display text-xl tracking-tight translate-y-[3px] -translate-x-[5px]">Kreyo</span>
        </a>
        <Button onClick={() => navigate('/waitlist')} variant="default" size="sm" className="rounded-full">
          Connect with GitHub
        </Button>
      </div>
    </header>
  );
};
