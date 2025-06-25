import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import ComingSoon from "./components/ComingSoon";
import WorkshopRegistration from "./components/WorkshopRegistration";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import ScrollToTop from "./components/ScrollToTop";

// Helper component to refresh AOS on every route change
const AOSRefreshOnRouteChange = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.refresh(); // Re-initialize animations on route change
  }, [location.pathname]);

  return null;
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Run every time on scroll, change to true if you want only once
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AOSRefreshOnRouteChange /> {/* Refresh AOS on route change */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/workshop-register" element={<WorkshopRegistration />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
