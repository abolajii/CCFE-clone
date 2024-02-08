import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import React from "react";
import { SiVega } from "react-icons/si";
import styled from "styled-components";
import useMediaQuery from "../hook/useMediaQuery";
import { useState } from "react"; // Import useState

const Container = styled.nav`
  padding: 15px 40px;
  position: fixed;
  width: 100%;
  z-index: 2;
  border-bottom: 1px solid #e7e7e7;
  background-color: white;
  .link {
    font-size: 15px;
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

const Navbar = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown state
  };

  return isDesktop ? (
    <Container className="flex ai-center justify-between">
      <div className="flex flex-1 ai-center md-gap">
        <div className="link">
          <Link to={"/menu"}>Current Menu</Link>
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
            <li
              title="Hello"
              onClick={() => {
                toggleDropdown();
              }}
            >
              <Link to={"/subscription"}>Subscription Meal Selection</Link>
            </li>
            <li title="Hello">A la Carte</li>
            <li title="Hello">Proteins by the Pounds</li>
            <li title="Hello">Extras</li>
            <li title="Hello">Gift Card</li>
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
          <Link to={"/grab"}>Grab & Go</Link>
        </div>
        <div className="link">
          <Link to={"/carts"}>
            <HiOutlineShoppingBag size={20} />
          </Link>
        </div>
        <div className="link">
          <Link to={"/register"}>Sign up</Link>
        </div>
        <div className="link">
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
    </Container>
  ) : (
    <Container>Nav</Container>
  );
};

export default Navbar;
