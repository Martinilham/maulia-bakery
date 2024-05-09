import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import DetailPesanan from "./pages/detailPesanan";
import Pesan from "./pages/Pesan";

const App = () => {
  const isUserSignedIn = !!localStorage.getItem('token');
  
  return (
    <BrowserRouter>
      <Routes>
        {/* Rute beranda */}
        <Route path="/" element={<Home  />} />
        <Route path="/detailpesanan" element={<DetailPesanan  />} />
        <Route path="/pesan" element={<Pesan  />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;