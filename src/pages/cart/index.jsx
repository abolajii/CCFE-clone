import Container from "../../components/Container";
import { GrSecure } from "react-icons/gr";
import { HiArrowLeft } from "react-icons/hi2";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import React from "react";
import styled from "styled-components";

const Inner = styled.div`
  position: relative;
  top: 70px;
  padding: 20px 40px;

  .top {
    padding-top: 10px;
  }

  .link {
    font-size: 14px;
  }

  .safe {
    color: #5c6468;
    font-size: 17px;
    font-weight: 600;
  }

  .stripe {
    color: #9fa4a6;
    font-size: 13px;
  }

  .mx-auto {
    max-width: 1150px;
    margin: auto;
    margin-top: 50px;
  }

  .confirm {
    font-size: 20px;
    font-weight: 600;
    color: #484848;
  }

  .payment {
    padding-bottom: 20px;
  }

  button {
    background: #8dd444;
    outline: none;
    border: none;
    padding: 15px;
    border-radius: 3px;
    color: white;
    cursor: pointer;

    &:hover {
      box-shadow: 0 2px 7px 0 rgb(120 137 149 / 25%);
    }
  }

  .title {
    color: #484848;
    margin-bottom: 20px;
  }

  .edit {
    text-decoration: underline;
  }

  .price {
    color: #333333;
  }
`;

const Carts = () => {
  return (
    <Container>
      <Inner>
        <div className="top flex ai-center justify-between">
          <Link to={"/"} title="Home">
            <div className="flex ai-center xsm-gap">
              <div className="center">
                <HiArrowLeft size={13} />
              </div>
              <p className="link">Back to Homepage</p>
            </div>
          </Link>
          <div className="flex xsm-gap">
            <div>
              <GrSecure size={40} color={"#ebd6b6"} />
            </div>
            <div className="flex flex-col xsm-gap">
              <p className="safe">SAFE AND SECURE CHECKOUT</p>
              <p className="stripe">Stripe AES-256 encryption</p>
            </div>
          </div>
        </div>

        <div className="mx-auto">
          <div className="flex flex ai-center justify-between payment">
            <h3 className="confirm">Confirm Your Cart</h3>
            <div>
              <button>Proceed to checkout</button>
            </div>
          </div>

          {/*  */}
          <div className="title flex sm-gap">
            <IoMdTime size={28} />
            <h2>Order for Wednesday, March 06, 2024</h2>
          </div>

          {/*  */}
          <div className="flex ai-center justify-between">
            <div className="flex ai-center md-gap">
              <MdDelete color={"red"} className="cursor" size={17} />
              <p>Weekly Subscription</p>
              <Link to="/subscription" className="edit">
                Edit
              </Link>
            </div>
            <p className="price">$999.9</p>
          </div>

          {/*  */}
        </div>
      </Inner>
    </Container>
  );
};

export default Carts;
