import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Start from "./pages/Start";
import Waitlist from "./pages/Waitlist";
import Dashboard from "./pages/Dashboard";
import Dashboard2 from "./pages/Dashboard2";
import Dashboard3 from "./pages/Dashboard3";
import Scanning from "./pages/Scanning";
import Results from "./pages/Results";
import Website from "./pages/Website";
import AiAgency from "./pages/AiAgency";
import Aisec from "./pages/Aisec";
import Pricing from "./pages/Pricing";
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
          <Route path="/index" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* <Route path="/ai-agency" element={<AiAgency />} /> */}
          {/* <Route path="/start" element={<Start />} /> */}
          {/* <Route path="/waitlist" element={<Waitlist />} /> */}
          {/* <Route path="/aisec" element={<Aisec />} /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/dashboard2" element={<Dashboard2 />} /> */}
          {/* <Route path="/dashboard3" element={<Dashboard3 />} /> */}
          {/* <Route path="/scanning" element={<Scanning />} /> */}
          {/* <Route path="/results" element={<Results />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
