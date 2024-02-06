import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import React from "react";
import { SiVega } from "react-icons/si";
import styled from "styled-components";
import useMediaQuery from "../hook/useMediaQuery";

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

const ShopNow = styled.button`
  background-color: #68a368;
  padding: 10px 15px;
  font-size: 15px;

  color: white;
`;

const Navbar = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? (
    <Container className="flex ai-center justify-between">
      <div className="flex flex-1 ai-center md-gap">
        <div className="link">
          <Link to={"/menu"}>Current Menu</Link>
        </div>
        <ShopNow className="flex ai-center">
          <Link to={"/shop"}>
            <span>Shop</span>
            <span>
              <MdArrowDropDown size={14} />
            </span>
          </Link>
        </ShopNow>
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
