import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
