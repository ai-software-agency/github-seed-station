import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TopNav } from "@/components/TopNav";
import { CheckCircle2, Key, Shield, Eraser, RefreshCw, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const allFixes = [
  {
    id: 1,
    icon: "🔑",
    IconComponent: Key,
    title: "Removed exposed AWS key",
    timestamp: "10:21 AM",
    description: "Removed hardcoded AWS key from config.js and moved it to environment variables.",
    affectedFile: "config.js",
    status: "Verified successfully",
  },
  {
    id: 2,
    icon: "🛡️",
    IconComponent: Shield,
    title: "Added authentication to /admin",
    timestamp: "10:23 AM",
    description: "Added authentication middleware to protect admin routes from unauthorized access.",
    affectedFile: "/routes/admin.js",
    status: "Verified successfully",
  },
  {
    id: 3,
    icon: "🧹",
    IconComponent: Eraser,
    title: "Sanitized user inputs",
    timestamp: "10:25 AM",
    description: "Implemented input sanitization to prevent XSS vulnerabilities in user-submitted content.",
    affectedFile: "/controllers/user.js",
    status: "Verified successfully",
  },
  {
    id: 4,
    icon: "🔄",
    IconComponent: RefreshCw,
    title: "Updated vulnerable dependencies",
    timestamp: "10:27 AM",
    description: "Updated outdated packages with known security vulnerabilities to their latest secure versions.",
    affectedFile: "package.json",
    status: "Verified successfully",
  },
];

const Activity2 = () => {
  const navigate = useNavigate();
  const [selectedFixes, setSelectedFixes] = useState<Set<number>>(
    new Set(allFixes.map(f => f.id))
  );
  const [currentFix, setCurrentFix] = useState(allFixes[0]);

  const toggleFix = (id: number) => {
    const newSelected = new Set(selectedFixes);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedFixes(newSelected);
  };

  const selectedCount = selectedFixes.size;
  const totalCount = allFixes.length;
  const isCurrentFixSelected = selectedFixes.has(currentFix.id);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <TopNav />
      
      <div className="pt-20 md:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 animate-fade-in">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold font-display text-foreground mb-2">
            Security Review Summary
          </h1>
          <p className="text-muted-foreground font-sans">
            All fixes have been prepared and verified. Review and choose which ones you want to include in your secure version.
          </p>
        </div>

        {/* Two-column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
          {/* Left Panel - Fix List with Selection */}
          <Card className="lg:col-span-2 p-6 bg-card border-border">
            <h2 className="text-lg font-semibold font-display text-foreground mb-4">Fixes Ready to Apply</h2>
            <ScrollArea className="max-h-[500px] pr-4">
              <div className="space-y-3">
                {allFixes.map((fix) => {
                const isSelected = selectedFixes.has(fix.id);
                return (
                  <Card
                    key={fix.id}
                    className={`p-4 transition-all cursor-pointer ${
                      currentFix.id === fix.id
                        ? "border-accent/50 shadow-sm"
                        : "bg-card border-border hover:border-accent/20"
                    } ${!isSelected ? "opacity-50" : ""}`}
                    onClick={() => setCurrentFix(fix)}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-xl flex-shrink-0">{fix.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground mb-1">
                          {fix.title}
                        </p>
                        <div className="flex items-center gap-2 text-xs">
                          <span className={`inline-flex items-center gap-1 ${isSelected ? 'text-accent' : 'text-muted-foreground'}`}>
                            {isSelected ? (
                              <>
                                verified
                                <CheckCircle2 className="w-3 h-3" />
                              </>
                            ) : (
                              'Skipped'
                            )}
                          </span>
                          {isSelected && (
                            <>
                              <span className="text-muted-foreground">•</span>
                              <span className="text-muted-foreground">{fix.timestamp}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <Label 
                        htmlFor={`toggle-${fix.id}`} 
                        className="text-xs text-muted-foreground cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Include fix
                      </Label>
                      <Switch
                        id={`toggle-${fix.id}`}
                        checked={isSelected}
                        onCheckedChange={() => toggleFix(fix.id)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                  </Card>
                );
                })}
              </div>
            </ScrollArea>
          </Card>

          {/* Right Panel - Selected Fix Detail */}
          <Card className="lg:col-span-3 p-6 bg-card border-border">
            <div className="mb-6">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4 ${
                isCurrentFixSelected 
                  ? 'bg-accent/20 text-accent' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                <CheckCircle2 className="w-4 h-4" />
                {isCurrentFixSelected 
                  ? 'Fix verified — ready to deploy'
                  : 'Fix will be skipped in deployment'}
              </div>
              <h2 className="text-xl font-semibold font-display text-foreground mb-3">
                {currentFix.title}
              </h2>
              <p className="text-muted-foreground font-sans mb-6">
                {currentFix.description}
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">Affected File:</span>
                <code className="text-sm bg-secondary px-2 py-1 rounded text-foreground">
                  {currentFix.affectedFile}
                </code>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">Timestamp:</span>
                <span className="text-sm text-muted-foreground">Today at {currentFix.timestamp}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">Status:</span>
                <span className="text-sm inline-flex items-center gap-1.5 text-accent">
                  <CheckCircle2 className="w-4 h-4" />
                  {currentFix.status}
                </span>
              </div>
            </div>

            <Button variant="link" className="px-0">
              View on GitHub
              <ExternalLink className="w-4 h-4 ml-1" />
            </Button>
          </Card>
        </div>

        {/* Bottom Banner */}
        <Card className="p-6 border-border bg-card">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-accent/10">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
              </div>
              <div>
                <h3 className="text-lg font-semibold font-display text-foreground mb-1">
                  Your secure version is ready to go live.
                </h3>
                <p className="text-sm text-muted-foreground font-sans">
                  You've selected {selectedCount} of {totalCount} verified fixes.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button 
                variant="ghost" 
                className="whitespace-nowrap"
                onClick={() => navigate("/results")}
              >
                Skip deployment for now
              </Button>
              <Button 
                size="lg" 
                className="whitespace-nowrap"
                disabled={selectedCount === 0}
                onClick={() => navigate("/done")}
              >
                Deploy Selected Fixes to Vercel
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
  );
};

export default Activity2;
