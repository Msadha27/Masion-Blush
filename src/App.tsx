import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// Capitalized component imports
import Fashion from "./pages/Fashion";
import Books from "./pages/Books";
import Finds from "./pages/Finds";
import Necklaces from "./pages/Necklaces";
import Watch from "./pages/Watch";
import Bags from "./pages/Bags";
import Footwear from "./pages/Footwear";
import OutfitStyling from "./pages/OutfitStyling";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/books" element={<Books />} />
          <Route path="/finds" element={<Finds />} />
          <Route path="/necklaces" element={<Necklaces />} />
          <Route path="/watches" element={<Watch />} /> 
          <Route path="/bags" element={<Bags />} />
          <Route path="/footwear" element={<Footwear />} />
          <Route path="/outfit-styling" element={<OutfitStyling />} />
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;