import { Route, Routes } from "react-router-dom";

import Carts from "./pages/cart";
import Current from "./pages/current/index";
import Grab from "./pages/grab/index";
import Home from "./pages/home";
import Login from "./pages/login/index";
import React from "react";
import Register from "./pages/register/index";
import Shop from "./pages/shop/index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/grab" element={<Grab />} />
      <Route path="/menu" element={<Current />} />
      <Route path="/carts" element={<Carts />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
