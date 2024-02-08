import { Route, Routes } from "react-router-dom";

import Carts from "./pages/cart";
import Current from "./pages/current/index";
import Grab from "./pages/grab/index";
import Home from "./pages/home";
import Login from "./pages/login/index";
import React from "react";
import Register from "./pages/register/index";
import Subscription from "./pages/subscription/index";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/grab" element={<Grab />} />
      <Route path="/menu" element={<Current />} />
      <Route path="/carts" element={<Carts />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
