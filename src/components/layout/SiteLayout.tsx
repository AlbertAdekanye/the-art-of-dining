import { Outlet } from "react-router-dom";
import ScrollToTop from "../ui/ScrollToTop";
import WhatsAppButton from "../ui/WhatsAppButton";
import Footer from "./Footer";
import Navbar from "./Navbar";

function SiteLayout() {
  return (
    <div className="min-h-screen bg-[#0b0d0b] text-white">
      <ScrollToTop />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default SiteLayout;
