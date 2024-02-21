import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";

const App = () => {
  return (

 
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path="/" element={<HomePage />} />

      </Routes>
      <Footer />
    </BrowserRouter>

  );
};

export default App;
