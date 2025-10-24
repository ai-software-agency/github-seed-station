import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Shield, 
  Github, 
  Plus, 
  Clock, 
  ExternalLink, 
  ChevronRight, 
  MoreVertical, 
  Star, 
  FileText, 
  Settings, 
  Edit2, 
  Trash2,
  LayoutDashboard,
  FileSearch,
  Activity,
  Filter,
  CheckCircle,
  AlertTriangle,
  Zap,
  Key,
  Lock,
  Code
} from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ConnectRepositoryModal } from "@/components/ConnectRepositoryModal";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

interface Project {
  id: string;
  name: string;
  repoUrl: string;
  lastScan: string;
  status: "secure" | "needs-review" | "scanning";
  issuesFixed?: number;
  scans: Scan[];
  isFavorite?: boolean;
  issueSummary: {
    secrets: number;
    access: number;
    input: number;
  };
}

interface Scan {
  date: string;
  summary: string;
}

interface ActivityLogEntry {
  id: string;
  timestamp: string;
  action: string;
  type: "security" | "scan" | "fix";
}

const mockProjects: Project[] = [
  {
    id: "1",
    name: "my-saas-app",
    repoUrl: "https://github.com/user/my-saas-app",
    lastScan: "Oct 22, 2025, 10:43 AM",
    status: "secure",
    issuesFixed: 2,
    issueSummary: {
      secrets: 0,
      access: 0,
      input: 0,
    },
    scans: [
      { date: "Oct 13, 2025 - 2:30 PM", summary: "2 issues fixed" },
      { date: "Oct 10, 2025 - 1:15 PM", summary: "No vulnerabilities found" },
    ],
  },
  {
    id: "2",
    name: "portfolio-site",
    repoUrl: "https://github.com/user/portfolio-site",
    lastScan: "Oct 21, 2025, 3:12 PM",
    status: "needs-review",
    issueSummary: {
      secrets: 0,
      access: 2,
      input: 1,
    },
    scans: [
      { date: "Oct 12, 2025 - 4:20 PM", summary: "1 issue detected" },
    ],
  },
  {
    id: "3",
    name: "mobile-app-backend",
    repoUrl: "https://github.com/user/mobile-backend",
    lastScan: "Oct 22, 2025, 9:15 AM",
    status: "scanning",
    issueSummary: {
      secrets: 0,
      access: 0,
      input: 0,
    },
    scans: [
      { date: "Oct 20, 2025 - 11:30 AM", summary: "Scan in progress" },
    ],
  },
];

const mockActivityLog: ActivityLogEntry[] = [
  {
    id: "1",
    timestamp: "2m",
    action: "Revoked leaked AWS key in my-saas-app",
    type: "security",
  },
  {
    id: "2",
    timestamp: "15m",
    action: "Blocked /admin request from 54.23.1.22",
    type: "security",
  },
  {
    id: "3",
    timestamp: "1h",
    action: "Added CSP headers to xyz.vercel.app",
    type: "fix",
  },
  {
    id: "4",
    timestamp: "2h",
    action: "Completed scan for portfolio-site",
    type: "scan",
  },
  {
    id: "5",
    timestamp: "3h",
    action: "Fixed input validation in mobile-backend",
    type: "fix",
  },
];

const Dashboard3 = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [projectHistoryOpen, setProjectHistoryOpen] = useState(false);
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const [activityLog] = useState<ActivityLogEntry[]>(mockActivityLog);
  const [selectedActivity, setSelectedActivity] = useState<ActivityLogEntry | null>(null);
  const [activityDetailOpen, setActivityDetailOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [scanFilter, setScanFilter] = useState<string>("all");
  const [activityProjectFilter, setActivityProjectFilter] = useState<string>("all");

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
        return <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20 text-xs">Secure</Badge>;
      case "needs-review":
        return <Badge className="bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20 text-xs">Needs Review</Badge>;
      case "scanning":
        return <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-xs">Scan Running</Badge>;
    }
  };

  const getIssueSummary = (project: Project) => {
    const totalIssues = project.issueSummary.secrets + project.issueSummary.access + project.issueSummary.input;
    if (totalIssues === 0) {
      return "No issues found";
    }
    
    const issueParts: string[] = [];
    if (project.issueSummary.secrets > 0) issueParts.push(`${project.issueSummary.secrets} Secrets`);
    if (project.issueSummary.access > 0) issueParts.push(`${project.issueSummary.access} Access`);
    if (project.issueSummary.input > 0) issueParts.push(`${project.issueSummary.input} Input`);
    
    return `${totalIssues} issue${totalIssues > 1 ? 's' : ''}: ${issueParts.join(', ')}`;
  };

  const getRelativeTime = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays}d ago`;
    return dateStr;
  };

  const handleActivityClick = (activity: ActivityLogEntry) => {
    setSelectedActivity(activity);
    setActivityDetailOpen(true);
  };

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const statusMatch = statusFilter === "all" || project.status === statusFilter;
    const scanMatch = scanFilter === "all" || 
      (scanFilter === "recent" && new Date(project.lastScan).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000) ||
      (scanFilter === "old" && new Date(project.lastScan).getTime() <= Date.now() - 7 * 24 * 60 * 60 * 1000);
    return statusMatch && scanMatch;
  });

  // Calculate metrics
  const secureApps = projects.filter(p => p.status === "secure").length;
  const needsReviewApps = projects.filter(p => p.status === "needs-review").length;
  const totalIssues = projects.reduce((sum, p) => sum + p.issueSummary.secrets + p.issueSummary.access + p.issueSummary.input, 0);
  const totalActionsToday = 3; // Mock data

  // Get currently scanning projects
  const scanningProjects = projects.filter(p => p.status === "scanning");
  
  // Filter activity log by project
  const filteredActivityLog = activityProjectFilter === "all" 
    ? activityLog 
    : activityLog.filter(activity => 
        activity.action.toLowerCase().includes(activityProjectFilter.toLowerCase())
      );

  const handleViewProjectHistory = (project: Project) => {
    setSelectedProject(project);
    setProjectHistoryOpen(true);
  };

  const handleCancelScan = (projectId: string) => {
    if (confirm('Are you sure you want to cancel this scan?')) {
      setProjects(projects.map(p => 
        p.id === projectId ? { ...p, status: "secure" as const } : p
      ));
    }
  };

  return (
    <>
      <TopNav />
      <div className="pt-16">
        <SidebarProvider>
          <div className="min-h-screen flex w-full bg-background">
            {/* Left Navigation Sidebar */}
            <Sidebar className="border-r border-border w-44 flex-shrink-0 h-[calc(100vh-4rem)] sticky top-16 bg-muted/20">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <button
                          onClick={() => navigate('/dashboard3')}
                          className="flex items-center gap-3 w-full px-3 py-2 text-sidebar-foreground bg-sidebar-accent rounded-md"
                        >
                          <LayoutDashboard className="w-5 h-5 text-primary" />
                          <span className="text-sm">Dashboard</span>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <button
                          onClick={() => navigate('/results')}
                          className="flex items-center gap-3 w-full px-3 py-2 text-sidebar-foreground hover:bg-sidebar-accent rounded-md"
                        >
                          <FileSearch className="w-5 h-5 text-primary" />
                          <span className="text-sm">Scan Reports</span>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <button
                          onClick={() => navigate('/activity')}
                          className="flex items-center gap-3 w-full px-3 py-2 text-sidebar-foreground hover:bg-sidebar-accent rounded-md"
                        >
                          <Settings className="w-5 h-5 text-primary" />
                          <span className="text-sm">Settings</span>
                        </button>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>

          {/* Main Content Area */}
          <div className="flex-1 flex">
            <main className="flex-1 pl-4 pr-8 py-8 overflow-auto max-w-[1400px]">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold font-display text-foreground mb-2">Dashboard</h2>
                <p className="text-muted-foreground font-sans">Monitor your security posture and recent activity</p>
              </div>
              
              {/* Condensed Top Metrics */}
              <div className="mb-8 pb-6 border-b border-border">
                <div className="flex items-center justify-between px-6 py-4 bg-muted/20 rounded-lg border border-border">
                  <div className="flex items-center gap-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-medium text-muted-foreground">Projects:</span>
                      <span className="text-2xl font-bold font-display text-foreground">{projects.length}</span>
                    </div>
                    <Separator orientation="vertical" className="h-8" />
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-medium text-muted-foreground">Issues:</span>
                      <span className="text-2xl font-bold font-display text-foreground">{totalIssues}</span>
                    </div>
                    <Separator orientation="vertical" className="h-8" />
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-medium text-muted-foreground">Actions:</span>
                      <span className="text-2xl font-bold font-display text-foreground">{totalActionsToday}</span>
                    </div>
                    <Separator orientation="vertical" className="h-8" />
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-medium text-muted-foreground">Secure:</span>
                      <span className="text-xl font-bold font-display text-green-600">{secureApps}</span>
                      <span className="text-muted-foreground">/</span>
                      <span className="text-xl font-bold font-display text-yellow-600">{needsReviewApps}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lightweight Scan Status Bar */}
              {scanningProjects.length > 0 && (
                <div className="mb-8 px-4 py-2 bg-primary/5 border-l-4 border-primary rounded flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </div>
                    <span className="text-sm text-foreground">
                      Scanning <span className="font-semibold">{scanningProjects[0].name}</span> — 45% complete
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="h-7 text-xs"
                      onClick={() => navigate('/scanning')}
                    >
                      View Progress
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="h-7 text-xs"
                      onClick={() => handleCancelScan(scanningProjects[0].id)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}

              {/* Unified Filter Bar */}
              <div className="flex items-center gap-3 mb-8 p-3 bg-muted/20 rounded-lg border border-border">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[160px] bg-background">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="secure">Secure</SelectItem>
                    <SelectItem value="needs-review">Needs Review</SelectItem>
                    <SelectItem value="scanning">Scanning</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={scanFilter} onValueChange={setScanFilter}>
                  <SelectTrigger className="w-[160px] bg-background">
                    <SelectValue placeholder="Last Scan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Time</SelectItem>
                    <SelectItem value="recent">Last 7 days</SelectItem>
                    <SelectItem value="old">&gt; 7 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Projects Grid or Empty State */}
              {filteredProjects.length === 0 ? (
                // Empty State
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                    <Shield className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold font-display text-foreground mb-2">No projects match filters</h3>
                  <p className="text-muted-foreground font-sans mb-6 max-w-md">
                    Try adjusting your filters or connect a new repository.
                  </p>
                  <Button size="lg" onClick={() => setConnectModalOpen(true)}>
                    <Github className="w-5 h-5 mr-2" />
                    Add a Project
                  </Button>
                </div>
              ) : (
                <>
                  {/* Projects Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8 auto-rows-fr">
                    {filteredProjects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        onViewHistory={handleViewHistory}
                        onViewProjectHistory={handleViewProjectHistory}
                        onToggleFavorite={toggleFavorite}
                        onRemove={handleRemoveProject}
                        navigate={navigate}
                        getStatusBadge={getStatusBadge}
                        getIssueSummary={getIssueSummary}
                        getRelativeTime={getRelativeTime}
                      />
                    ))}
                  </div>

                  {/* Add New Project CTA */}
                  <Card className="border-dashed border-2 hover:border-accent/50 transition-colors cursor-pointer mb-8" onClick={() => setConnectModalOpen(true)}>
                    <CardContent className="flex items-center justify-center py-12">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Plus className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold font-display text-foreground mb-2">Add a new project</h3>
                        <p className="text-muted-foreground font-sans mb-4">
                          Connect another repository to start securing it.
                        </p>
                        <Button onClick={(e) => { e.stopPropagation(); setConnectModalOpen(true); }}>
                          <Github className="w-4 h-4 mr-2" />
                          Connect Repository
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </main>

            {/* Right Sidebar - Activity Feed */}
            <aside className="w-80 border-l border-border bg-muted/20 overflow-hidden flex flex-col">
              <div className="px-6 py-6 pb-4 border-b border-border bg-background">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold font-display">Activity Feed</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Recent security actions</p>
                
                {/* Activity Filter */}
                <Select value={activityProjectFilter} onValueChange={setActivityProjectFilter}>
                  <SelectTrigger className="w-full bg-background">
                    <SelectValue placeholder="All Projects" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Projects</SelectItem>
                    {projects.map(project => (
                      <SelectItem key={project.id} value={project.name}>
                        {project.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <ScrollArea className="flex-1 bg-background">
                <div className="px-6 py-4">
                  {/* Today Section */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3 px-1">Today</h4>
                    <div className="space-y-2">
                      {filteredActivityLog.filter(a => ['2m', '15m', '1h', '2h', '3h'].includes(a.timestamp)).map((activity) => (
                        <button
                          key={activity.id}
                          onClick={() => handleActivityClick(activity)}
                          className="w-full text-left p-3 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 transition-all group"
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-1.5 rounded-md flex-shrink-0 ${
                              activity.type === "security" 
                                ? "bg-red-500/10 text-red-600" 
                                : activity.type === "fix"
                                ? "bg-green-500/10 text-green-600"
                                : "bg-primary/10 text-primary"
                            }`}>
                              {activity.type === "security" ? (
                                <Shield className="w-3.5 h-3.5" />
                              ) : activity.type === "fix" ? (
                                <CheckCircle className="w-3.5 h-3.5" />
                              ) : (
                                <FileSearch className="w-3.5 h-3.5" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                                {activity.action}
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">
                                {activity.timestamp}
                              </p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {filteredActivityLog.length === 0 && (
                    <div className="text-center py-8">
                      <p className="text-sm text-muted-foreground">No activity for this project</p>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </aside>
          </div>
        </div>
        </SidebarProvider>
      </div>

      {/* Connect Repository Modal */}
      <ConnectRepositoryModal open={connectModalOpen} onOpenChange={setConnectModalOpen} />

      {/* Activity Detail Dialog */}
      <Dialog open={activityDetailOpen} onOpenChange={setActivityDetailOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">Activity Details</DialogTitle>
            <DialogDescription>
              Detailed information about this security action
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div>
              <h4 className="font-semibold font-display mb-2">Action</h4>
              <p className="text-sm text-muted-foreground">{selectedActivity?.action}</p>
            </div>
            <div>
              <h4 className="font-semibold font-display mb-2">Type</h4>
              <Badge className={
                selectedActivity?.type === "security" 
                  ? "bg-red-500/10 text-red-600"
                  : selectedActivity?.type === "fix"
                  ? "bg-green-500/10 text-green-600"
                  : "bg-primary/10 text-primary"
              }>
                {selectedActivity?.type}
              </Badge>
            </div>
            <div>
              <h4 className="font-semibold font-display mb-2">Timestamp</h4>
              <p className="text-sm text-muted-foreground">{selectedActivity?.timestamp}</p>
            </div>
            <div>
              <h4 className="font-semibold font-display mb-2">Details</h4>
              <p className="text-sm text-muted-foreground">
                This is a mock detail view. In production, this would show comprehensive information
                about the security action taken, including affected files, specific changes made, and
                verification status.
              </p>
            </div>
            <div className="pt-4 border-t">
              <Button variant="outline" onClick={() => setActivityDetailOpen(false)} className="w-full">
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Project History Drawer - Lightweight Version */}
      <Dialog open={projectHistoryOpen} onOpenChange={setProjectHistoryOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Scan History — {selectedProject?.name}
            </DialogTitle>
            <DialogDescription>
              Recent scans for this project
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 mt-4">
            {selectedProject?.scans.map((scan, index) => (
              <button
                key={index}
                onClick={() => {
                  setProjectHistoryOpen(false);
                  handleViewHistory(selectedProject);
                }}
                className="w-full text-left p-4 rounded-lg border border-border hover:border-accent/50 hover:bg-accent/5 transition-all group"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{scan.date}</span>
                  {scan.summary.includes("fixed") ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : scan.summary.includes("No vulnerabilities") ? (
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-2">{scan.summary}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  <span>View full report</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t mt-4">
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {
                setProjectHistoryOpen(false);
                navigate('/results');
              }}
            >
              View All Reports
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Project History Dialog - Full Version */}
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
    </>
  );
};

// Project Card Component
interface ProjectCardProps {
  project: Project;
  onViewHistory: (project: Project) => void;
  onViewProjectHistory: (project: Project) => void;
  onToggleFavorite: (projectId: string) => void;
  onRemove: (projectId: string) => void;
  navigate: (path: string) => void;
  getStatusBadge: (status: Project["status"]) => JSX.Element;
  getIssueSummary: (project: Project) => string;
  getRelativeTime: (dateStr: string) => string;
}

const ProjectCard = ({ 
  project, 
  onViewHistory,
  onViewProjectHistory, 
  onToggleFavorite, 
  onRemove, 
  navigate, 
  getStatusBadge,
  getIssueSummary,
  getRelativeTime
}: ProjectCardProps) => {
  const isScanning = project.status === "scanning";
  return (
    <Card 
      className={`hover:border-accent/50 transition-colors group flex flex-col h-full ${
        isScanning ? 'ring-2 ring-primary/20 animate-pulse cursor-pointer' : ''
      }`}
      onClick={isScanning ? () => navigate('/scanning') : undefined}
    >
      <CardHeader className="flex-1 pb-4">
        {/* Top Row: Project Name + Status Badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3 flex-1">
            <CardTitle className="text-lg font-display text-foreground">{project.name}</CardTitle>
            {getStatusBadge(project.status)}
          </div>
          
          {/* Three-dot menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button 
                className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-muted"
                onClick={(e) => e.stopPropagation()}
              >
                <MoreVertical className="w-4 h-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-popover z-50">
              <DropdownMenuItem onClick={(e) => { e.stopPropagation(); onViewProjectHistory(project); }}>
                <FileText className="w-4 h-4 mr-2" />
                View History
              </DropdownMenuItem>
              <DropdownMenuItem onClick={(e) => { e.stopPropagation(); onViewHistory(project); }}>
                <FileSearch className="w-4 h-4 mr-2" />
                View Logs
              </DropdownMenuItem>
              <DropdownMenuItem onClick={(e) => e.stopPropagation()}>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={(e) => { e.stopPropagation(); onRemove(project.id); }}
                className="text-red-600 focus:text-red-600"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Project
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* Middle Row: Last Scanned + Issue Summary */}
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">
            Last scanned {getRelativeTime(project.lastScan)}
          </p>
          <p className="text-sm font-medium text-foreground">
            {getIssueSummary(project)}
          </p>
        </div>
      </CardHeader>
      
      {/* Bottom Row: Primary Action Button */}
      <CardContent className="pt-0 pb-6">
        <Button
          className="w-full" 
          onClick={(e) => {
            e.stopPropagation();
            navigate(isScanning ? '/scanning' : '/scanning');
          }}
          disabled={isScanning}
        >
          {isScanning ? (
            <>
              <div className="relative flex h-4 w-4 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-background opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-background"></span>
              </div>
              View Progress
            </>
          ) : (
            <>
              <Zap className="w-4 h-4 mr-2" />
              Run Quick Scan
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Dashboard3;
