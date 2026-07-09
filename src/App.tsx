import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import LandEstates from "./pages/LandEstates";
import HousingProjects from "./pages/HousingProjects";
import CommercialProperties from "./pages/CommercialProperties";
import InvestmentOpportunities from "./pages/InvestmentOpportunities";
import Blog from "./pages/Blog";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import EmiratesLanding from "./pages/EmiratesLanding";
import LushvilleLanding from "./pages/LushvilleLanding";
import Auth from "./pages/Auth";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/land-estates" element={<LandEstates />} />
            <Route path="/housing" element={<HousingProjects />} />
            <Route path="/commercial" element={<CommercialProperties />} />
            <Route path="/investment" element={<InvestmentOpportunities />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/emirates-parks-gardens" element={<EmiratesLanding />} />
            <Route path="/lushville-estate" element={<LushvilleLanding />} />
            <Route path="/auth" element={<Auth />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute requireAdmin>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
