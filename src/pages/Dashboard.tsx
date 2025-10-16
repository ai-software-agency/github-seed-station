import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Github, Plus, Clock, ExternalLink, ChevronRight, MoreVertical, Star, FileText, Settings, Edit2, Trash2 } from "lucide-react";
import { TopNav } from "@/components/TopNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ConnectRepositoryModal } from "@/components/ConnectRepositoryModal";

interface Project {
  id: string;
  name: string;
  repoUrl: string;
  lastScan: string;
  status: "secure" | "needs-review" | "failed";
  issuesFixed?: number;
  scans: Scan[];
  isFavorite?: boolean;
}

interface Scan {
  date: string;
  summary: string;
}

const mockProjects: Project[] = [
  {
    id: "1",
    name: "my-saas-app",
    repoUrl: "https://github.com/user/my-saas-app",
    lastScan: "Oct 13, 2025",
    status: "secure",
    issuesFixed: 2,
    scans: [
      { date: "Oct 13, 2025 - 2:30 PM", summary: "2 issues fixed" },
      { date: "Oct 10, 2025 - 1:15 PM", summary: "No vulnerabilities found" },
    ],
  },
  {
    id: "2",
    name: "portfolio-site",
    repoUrl: "https://github.com/user/portfolio-site",
    lastScan: "Oct 12, 2025",
    status: "needs-review",
    scans: [
      { date: "Oct 12, 2025 - 4:20 PM", summary: "1 issue detected" },
    ],
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [connectModalOpen, setConnectModalOpen] = useState(false);

  const handleViewHistory = (project: Project) => {
    setSelectedProject(project);
    setHistoryOpen(true);
  };

  const toggleFavorite = (projectId: string) => {
    setProjects(projects.map(p => 
      p.id === projectId ? { ...p, isFavorite: !p.isFavorite } : p
    ));
  };

  const handleRemoveProject = (projectId: string) => {
    if (confirm('Are you sure you want to remove this project?')) {
      setProjects(projects.filter(p => p.id !== projectId));
    }
  };

  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "secure":
        return <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20 text-xs">🟢 Secure</Badge>;
      case "needs-review":
        return <Badge className="bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20 text-xs">🟡 Needs review</Badge>;
      case "failed":
        return <Badge className="bg-red-500/10 text-red-600 hover:bg-red-500/20 text-xs">🔴 Action required</Badge>;
    }
  };

  const favoriteProjects = projects.filter(p => p.isFavorite);
  const regularProjects = projects.filter(p => !p.isFavorite);

  return (
    <>
      <TopNav />
      <div className="min-h-screen bg-background pt-16">
        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold font-display text-foreground mb-2">Your Projects</h2>
          <p className="text-muted-foreground font-sans">Review past scans, monitor results, or add a new project.</p>
        </div>

        {/* Projects Grid or Empty State */}
        {projects.length === 0 ? (
          // Empty State
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold font-display text-foreground mb-2">No projects yet</h3>
            <p className="text-muted-foreground font-sans mb-6 max-w-md">
              Connect your first repository to get started.
            </p>
            <Button size="lg" onClick={() => setConnectModalOpen(true)}>
              <Github className="w-5 h-5 mr-2" />
              Add a Project
            </Button>
          </div>
        ) : (
          <>
            {/* Favorites Section */}
            {favoriteProjects.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold font-display text-foreground mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  Favorites
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {favoriteProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onViewHistory={handleViewHistory}
                      onToggleFavorite={toggleFavorite}
                      onRemove={handleRemoveProject}
                      navigate={navigate}
                      getStatusBadge={getStatusBadge}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* All Projects Section */}
            {regularProjects.length > 0 && (
              <div className="mb-8">
                {favoriteProjects.length > 0 && (
                  <h3 className="text-lg font-semibold font-display text-foreground mb-4">All Projects</h3>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onViewHistory={handleViewHistory}
                      onToggleFavorite={toggleFavorite}
                      onRemove={handleRemoveProject}
                      navigate={navigate}
                      getStatusBadge={getStatusBadge}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Add New Project CTA */}
            <Card className="border-dashed border-2 hover:border-accent/50 transition-colors cursor-pointer">
              <CardContent className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plus className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold font-display text-foreground mb-2">Add a new project</h3>
                  <p className="text-muted-foreground font-sans mb-4">
                    Connect another repository to start securing it.
                  </p>
                  <Button onClick={() => setConnectModalOpen(true)}>
                    <Github className="w-4 h-4 mr-2" />
                    Connect Repository
                  </Button>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Activity Summary Footer */}
        {projects.length > 0 && (
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 animate-pulse text-primary" />
            <span>Last scan completed 2 hours ago · No new vulnerabilities detected</span>
      </div>
        )}

        {/* Floating Quick-Add Button */}
        <button
          onClick={() => setConnectModalOpen(true)}
          className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center group z-50"
          aria-label="Add new project"
        >
          <Plus className="w-6 h-6" />
        </button>
      </main>

      {/* Connect Repository Modal */}
      <ConnectRepositoryModal open={connectModalOpen} onOpenChange={setConnectModalOpen} />

      {/* Project History Dialog */}
      <Dialog open={historyOpen} onOpenChange={setHistoryOpen}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-start gap-4 mb-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <DialogTitle className="text-xl font-semibold mb-1">
                  {selectedProject?.name}
                </DialogTitle>
                <DialogDescription>
                  Security scan history and results for this repository
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

            <div className="space-y-6 mt-4">
            {/* Scan History Section */}
            <div>
              <h3 className="text-lg font-semibold font-display mb-4">Recent Scans</h3>
              <div className="space-y-4">
                {selectedProject?.scans.map((scan, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-4">
                    {/* Scan Summary */}
                    <div>
                      <h4 className="font-semibold font-display mb-2">Scan Summary</h4>
                      <p className="text-sm text-muted-foreground font-sans">
                        {scan.summary}
                      </p>
                    </div>

                    {/* Mock: What We Found Section */}
                    <div>
                      <h4 className="font-semibold font-display mb-2">What We Found</h4>
                      <p className="text-sm text-muted-foreground font-sans">
                        Our security agent analyzed your repository and identified potential vulnerabilities 
                        that could expose sensitive data or compromise application security.
                      </p>
                    </div>

                    {/* Mock: What We Fixed Section */}
                    {scan.summary.includes("fixed") && (
                      <div>
                        <h4 className="font-semibold font-display mb-2">What We Fixed</h4>
                        <p className="text-sm text-muted-foreground font-sans">
                          Security vulnerabilities were automatically resolved by implementing best practices 
                          and secure configurations. Your code is now protected.
                        </p>
                      </div>
                    )}

                    {/* Mock: Code Changes */}
                    <div>
                      <h4 className="font-semibold font-display mb-3">Code changes (for your reference)</h4>
                      
                      <div className="space-y-3">
                        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900 rounded-md p-3">
                          <div className="text-xs font-medium text-red-600 dark:text-red-400 mb-2">- Before</div>
                          <code className="text-xs font-mono text-muted-foreground block">
                            // Vulnerable code pattern detected
                          </code>
                        </div>

                        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-md p-3">
                          <div className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">+ After</div>
                          <code className="text-xs font-mono text-muted-foreground block">
                            // Secure implementation applied
                          </code>
                        </div>
                      </div>
                    </div>

                    {/* Meta Information */}
                    <div className="pt-4 border-t space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium">File:</span>
                        <code className="text-xs bg-muted px-2 py-1 rounded">
                          {selectedProject?.repoUrl.split('/').pop()}/config.js
                        </code>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium">Verified:</span>
                        <span className="text-green-600 dark:text-green-400 flex items-center gap-1">
                          <span className="w-4 h-4 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-xs">✓</span>
                          Yes
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-medium">Timestamp:</span>
                        <span className="text-muted-foreground">{scan.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4 border-t">
              <Button variant="outline" className="flex-1" onClick={() => setHistoryOpen(false)}>
                Close
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => window.open(selectedProject?.repoUrl, '_blank')}
              >
                View in GitHub
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
    </>
  );
};

// Project Card Component
interface ProjectCardProps {
  project: Project;
  onViewHistory: (project: Project) => void;
  onToggleFavorite: (projectId: string) => void;
  onRemove: (projectId: string) => void;
  navigate: (path: string) => void;
  getStatusBadge: (status: Project["status"]) => JSX.Element;
}

const ProjectCard = ({ 
  project, 
  onViewHistory, 
  onToggleFavorite, 
  onRemove, 
  navigate, 
  getStatusBadge 
}: ProjectCardProps) => {
  return (
    <Card className="hover:border-accent/50 transition-colors group">
      <CardHeader>
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <Github className="w-5 h-5 text-muted-foreground" />
            <CardTitle className="text-lg font-display">{project.name}</CardTitle>
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground" />
            </a>
          </div>
          
          {/* Three-dot menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-muted">
                <MoreVertical className="w-5 h-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={() => onToggleFavorite(project.id)}>
                <Star className={`w-4 h-4 mr-2 ${project.isFavorite ? 'fill-yellow-500 text-yellow-500' : ''}`} />
                {project.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onViewHistory(project)}>
                <FileText className="w-4 h-4 mr-2" />
                View Logs
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="w-4 h-4 mr-2" />
                Manage Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Edit2 className="w-4 h-4 mr-2" />
                Rename Project
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => onRemove(project.id)}
                className="text-red-600 focus:text-red-600"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Remove Project
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* Status badge below name */}
        <div className="mb-3">
          {getStatusBadge(project.status)}
        </div>
        
        <CardDescription className="flex items-center gap-2 text-sm">
          <Clock className="w-4 h-4" />
          Last scan: {project.lastScan}
          {project.issuesFixed && ` — ${project.issuesFixed} issues fixed`}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex gap-3">
          <Button className="flex-1" onClick={() => navigate('/scanning')}>
            Run New Scan
          </Button>
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => onViewHistory(project)}
          >
            View History
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
