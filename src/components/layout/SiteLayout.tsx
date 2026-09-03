import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function SiteLayout() {
  return (
    <div className="min-h-screen bg-[#0b0d0b] text-white">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default SiteLayout;
