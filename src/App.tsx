import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Dashboard from "./pages/Dashboard";
import Scanning from "./pages/Scanning";
import Results from "./pages/Results";
import Activity from "./pages/Activity";
import Done from "./pages/Done";
import Website from "./pages/Website";
import Aisec from "./pages/Aisec";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Website />} />
          <Route path="/start" element={<Start />} />
          <Route path="/aisec" element={<Aisec />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scanning" element={<Scanning />} />
          <Route path="/results" element={<Results />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/done" element={<Done />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
