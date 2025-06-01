import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteScrollToTop from "./layout/ScrollToTop";

import About from "./pages/About";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
    <Toaster />
      <RouteScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
