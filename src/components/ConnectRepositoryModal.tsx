import { useState } from "react";
import { Shield, Github, Check, Cog, Lock, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface ConnectRepositoryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ConnectRepositoryModal = ({ open, onOpenChange }: ConnectRepositoryModalProps) => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [accessType, setAccessType] = useState("all");
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    // Simulate connection process
    setTimeout(() => {
      setIsConnecting(false);
      setIsSuccess(true);
      // Auto-close and navigate after success
      setTimeout(() => {
        setIsSuccess(false);
        onOpenChange(false);
      }, 2000);
    }, 2000);
  };

  const handleClose = () => {
    setIsSuccess(false);
    setIsConnecting(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[640px]">
        {!isConnecting && !isSuccess ? (
          <>
            <DialogHeader className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center animate-pulse">
                    <Shield className="w-9 h-9 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-background">
                    <span className="text-primary-foreground text-xs font-bold">+</span>
                  </div>
                </div>
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold">Secure another app in seconds.</DialogTitle>
                <DialogDescription className="mt-2 text-base">
                  Your agent will perform a safe, read-only scan of this new repository — nothing changes in your code.
                </DialogDescription>
              </div>
            </DialogHeader>

            <div className="space-y-6 py-6">
              {/* Primary Action */}
              <div className="space-y-3">
                <Button 
                  size="lg" 
                  className="w-full text-base h-12"
                  onClick={handleConnect}
                >
                  <Github className="w-5 h-5 mr-2" />
                  Connect with GitHub
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Takes less than a minute. You'll return here when the connection is complete.
                </p>
              </div>

              {/* Advanced Options (Collapsible) */}
              <div className="border-t pt-4">
                <button
                  onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-full"
                >
                  {isAdvancedOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                  Choose specific repo access
                </button>
                
                {isAdvancedOpen && (
                  <div className="mt-4 space-y-3 pl-6">
                    <RadioGroup value={accessType} onValueChange={setAccessType}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="all" id="all" />
                        <Label htmlFor="all" className="cursor-pointer">
                          Grant access to all repositories
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="select" id="select" />
                        <Label htmlFor="select" className="cursor-pointer">
                          Select repositories manually
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                )}
              </div>

              {/* Reassurance Badges */}
              <div className="border-t pt-6 space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-xs font-medium">Read-only access</p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                      <Cog className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-xs font-medium">Zero-config setup</p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center">
                      <Lock className="w-5 h-5 text-purple-600" />
                    </div>
                    <p className="text-xs font-medium">Enterprise secure</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Your agent never modifies code without your approval.
                </p>
              </div>
            </div>
          </>
        ) : isConnecting ? (
          <div className="py-12 space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center animate-pulse">
                <Shield className="w-9 h-9 text-primary-foreground" />
              </div>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-xl font-semibold">Connecting to GitHub...</h3>
              <div className="w-3/5 mx-auto bg-muted rounded-full h-2 overflow-hidden">
                <div className="h-full bg-primary animate-[slide-in-right_2s_ease-in-out]" style={{ width: '60%' }} />
              </div>
            </div>
          </div>
        ) : (
          <div className="py-12 space-y-6">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                  <Check className="w-9 h-9 text-white" />
                </div>
                {/* Optional: Add confetti effect here */}
              </div>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-xl font-semibold">Repository connected successfully.</h3>
              <p className="text-muted-foreground">
                Your agent will begin the first scan automatically.
              </p>
              <Button onClick={handleClose} className="mt-4">
                Return to Dashboard
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
