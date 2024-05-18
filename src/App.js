import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import DetailPesanan from "./pages/detailPesanan";
import Pesan from "./pages/Pesan";
import FormLogin from "./components/formLogin";

const App = () => {
  const isUserSignedIn = !!localStorage.getItem('token');
  const pesnanan = !!localStorage.getItem('pesanan');
  
  return (
    <BrowserRouter>
      <Routes>
        {/* Rute beranda */}
        <Route path="/login" element={<FormLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/detailpesanan" element={pesnanan ? <DetailPesanan /> : <Navigate to="/pesan" />} />
        <Route path="/pesan" element={isUserSignedIn ? <Pesan /> : <Navigate to="/login" />} />
        {/* Rute login */}
        {isUserSignedIn && (
          <>
            
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;