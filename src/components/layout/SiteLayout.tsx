import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function SiteLayout() {
  return (
    <div className="min-h-screen bg-[#0b0d0b] text-white">
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default SiteLayout;
