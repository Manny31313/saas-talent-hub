import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import OpenRoles from "./pages/OpenRoles.tsx";
import RoleDetail from "./pages/RoleDetail.tsx";
import DreamTeam from "./pages/DreamTeam.tsx";
import Candidates from "./pages/Candidates.tsx";
import TalentNetwork from "./pages/TalentNetwork.tsx";
import Contact from "./pages/Contact.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/open-roles" element={<OpenRoles />} />
          <Route path="/open-roles/:id" element={<RoleDetail />} />
          <Route path="/dream-team" element={<DreamTeam />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/talent-network" element={<TalentNetwork />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
