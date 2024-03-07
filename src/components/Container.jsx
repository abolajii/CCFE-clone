import { MdClose } from "react-icons/md";
/* eslint-disable react/prop-types */
import Navbar from "./Navbar";
import React from "react";
import styled from "styled-components";
import useCartStore from "../hook/useCart";
import { useLocation } from "react-router-dom";

const Bottom = styled.div`
  position: fixed;
  bottom: 40px;
  height: 80px;
  width: 130px;
  border-radius: 8px;
  right: 50px;
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
`;

const CloseIcon = styled.button`
  position: absolute;
  right: -10px;
  top: -10px;
  background-color: red;
  border-radius: 50%;
  height: 20px;
  width: 20px;
`;

const Container = ({ children }) => {
  const location = useLocation();
  const { cartItems } = useCartStore();

  const showCart =
    location.pathname !== "/subscription" &&
    location.pathname !== "/cart" &&
    cartItems.length > 0;

  return (
    <div>
      <Navbar />
      {children}
      {showCart && (
        <Bottom>
          <CloseIcon className="center">
            <MdClose size={15} color="white" />
          </CloseIcon>
        </Bottom>
      )}
    </div>
  );
};

export default Container;
