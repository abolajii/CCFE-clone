import { Link, NavLink } from "react-router-dom";

import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdArrowDropDown } from "react-icons/md";
// import React from "react";
import { SiVega } from "react-icons/si";
import styled from "styled-components";
import useCartStore from "../hook/useCart";
import useMediaQuery from "../hook/useMediaQuery";
import { useState } from "react"; // Import useState

const Container = styled.nav`
  padding: 15px 40px;
  position: fixed;
  width: 100%;
  z-index: 2;
  border-bottom: 1px solid #e7e7e7;
  background-color: white;

  transition: all 0.3s ease;
  a {
    &:hover {
      color: #8dd444;
      transition: all 0.15s ease-in;
    }

    &.active {
      color: #8dd444;
      transition: all 0.15s ease-in;
    }
  }

  .link {
    font-size: 15px;
    position: relative;
    .alert {
      background-color: red;
      position: absolute;
      top: -9px;
      right: -8px;
      font-size: 12px;
      height: 18px;
      width: 18px;
      border-radius: 50%;
      color: white;
      font-weight: 600;
    }
  }
`;

const HomeLogo = styled.div`
  width: 43px;
  height: 43px;
  border-radius: 50%;

  &:hover {
    background-color: #eee;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const ShopNow = styled.div`
  background-color: #68a368;
  padding: 10px 15px;
  font-size: 15px;
  color: white;
  cursor: pointer; /* Add cursor pointer */
`;

const DropDown = styled.ul`
  width: 220px;
  background-color: white;
  position: absolute;
  top: 44px;
  border-radius: 4px;
  list-style: none;
  padding: 5px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  opacity: ${({ isOpen }) =>
    isOpen ? 1 : 0}; /* Apply opacity based on isOpen state */
  pointer-events: ${({ isOpen }) =>
    isOpen ? "auto" : "none"}; /* Disable pointer events when closed */
  transform: translateY(
    ${({ isOpen }) => (isOpen ? "0" : "-10px")}
  ); /* Apply translateY based on isOpen state */
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out; /* Add transition */

  li {
    padding: 9px 0px;
    font-size: 14px;
    padding-left: 10px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      background-color: #9cf69c;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
      border-radius: 4px;
    }
  }
`;

const navLinks = [
  {
    title: "Subscription Meal Selection",
    to: "/subscription",
  },
  {
    title: "A la Carte",
    to: "/a-la-carte",
  },
  {
    title: "Proteins by the Pounds",
    to: "/proteins",
  },
  {
    title: "Extras",
    to: "/extras",
  },
  {
    title: "Gift Card",
    to: "/gift-card",
  },
];
const Navbar = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown state
  };

  const { cartItems } = useCartStore();

  return isDesktop ? (
    <Container className="flex ai-center justify-between">
      <div className="flex flex-1 ai-center md-gap">
        <div className="link">
          <NavLink to={"/menu"}>Current Menu</NavLink>
        </div>
        <div className="relative">
          <ShopNow className="flex ai-center" onClick={toggleDropdown}>
            <div>
              <span>Shop</span>
              <span>
                <MdArrowDropDown size={14} />
              </span>
            </div>
          </ShopNow>
          <DropDown isOpen={isDropdownOpen}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  title={link.title}
                  onClick={() => {
                    toggleDropdown();
                  }}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </DropDown>
        </div>
      </div>
      <div className="flex flex-1 center">
        <Link to={"/"}>
          <HomeLogo className="center cursor">
            <SiVega size={28} />
          </HomeLogo>
        </Link>
      </div>
      <div className="flex flex-1 jc-end lg-gap">
        <div className="link">
          <NavLink to={"/cart"}>
            <HiOutlineShoppingBag size={22} />
          </NavLink>
          {cartItems.length > 0 && (
            <div className="alert center">{cartItems.length}</div>
          )}
        </div>
        <div className="link">
          <NavLink to={"/register"}>Sign up</NavLink>
        </div>
        <div className="link">
          <NavLink to={"/login"}>Login</NavLink>
        </div>
      </div>
    </Container>
  ) : (
    <Container>Nav</Container>
  );
};

export default Navbar;
