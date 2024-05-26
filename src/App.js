import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import DetailPesanan from "./pages/Order/component/detailPesanan";
import Pesan from "./pages/Order/Pesan";
import FormLogin from "./components/formLogin";
import DetailOrder from "./pages/DetailOrder/DetailOrder";
import Pesananku from "./pages/pesananku";

const App = () => {
  const isUserSignedIn = !!localStorage.getItem("token");
  const pesananan = !!localStorage.getItem("pesanan");

  return (
    <BrowserRouter>
      <Routes>
        {/* Rute beranda */}
        <Route path="/login" element={<FormLogin />} />
        <Route path="/" element={<Home />} />
        <Route path="/detailpesanan" element={<DetailPesanan />} />
        <Route
          path="/pesan"
          element={isUserSignedIn ? <Pesan /> : <Navigate to="/login" />}
        />
        <Route
          path="/pesanansaya"
          element={isUserSignedIn ? <Pesananku /> : <Navigate to="/login" />}
        />
        <Route path="/detailorder" element={<DetailOrder />} />

        {/* Rute login */}
        {isUserSignedIn && <></>}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
