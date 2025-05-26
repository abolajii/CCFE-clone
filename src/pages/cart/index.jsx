import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import Container from "../../components/Container";
import { GrSecure } from "react-icons/gr";
import { IoMdTime } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { arrayToKeyValuePairs } from "../../utils";
import empty from "../../assets/empty.svg";
// import React from "react";
import styled from "styled-components";
import useCartStore from "../../hook/useCart";
import useSubscriptionStore from "../subscription/hook/useSubscription";

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

  .grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(300px, 1fr));
    margin-top: 20px;

    &__title {
      color: #333333;
      font-size: 16px;
      font-weight: bold;
    }

    &__sub-title {
      color: #646c70;
      font-size: 15px;
    }
  }

  .delivery {
    margin-top: 20px;
    &__title {
      color: #333333;
      font-size: 16px;
      font-weight: bold;
    }

    &__sub-title {
      color: #090909;
      font-size: 14px;
    }
  }

  .mt-45 {
    margin-top: 45px;
  }

  .mt-20 {
    margin-top: 20px;
  }

  .empty-cart {
    h3 {
      color: #333333;
    }
    .empty {
      max-width: 18%;
      color: #090909;
    }

    img {
      margin-top: 50px;
      margin-bottom: 30px;
      height: 200px;
    }
  }
`;

const Carts = () => {
  const { cartItems } = useCartStore();
  const { selectedDetails } = useSubscriptionStore();

  const result = arrayToKeyValuePairs(selectedDetails || []);

  if (cartItems.length === 0) {
    return (
      <Container>
        <Inner>
          <div className="empty-cart center flex-col md-gap">
            <img src={empty} />
            <h3>Empty cart</h3>
            <p className="empty text-center">
              Looks like you haven’t added anything to your cart
            </p>
          </div>
        </Inner>
      </Container>
    );
  }
  return (
    <Container>
      <Inner>
        <div className="top flex ai-center justify-between">
          <Link to={"/"} title="Home">
            <div className="flex ai-center xsm-gap">
              <div className="center">
                <FaLongArrowAltLeft size={13} />
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
              <MdDelete color={"red"} className="cursor" size={19} />
              <p>Weekly Subscription</p>
              <Link to="/subscription" className="edit">
                Edit
              </Link>
            </div>
            <p className="price">$999.9</p>
          </div>

          {/*  */}
          <div className="grid mt-45">
            <div className="flex flex-col xsm-gap">
              <p className="grid__title">Renewal preferences</p>
              <p className="grid__sub-title">Automatic Renewal</p>
            </div>
            <div className="flex flex-col xsm-gap">
              <p className="grid__title">Plan</p>
              <p className="grid__sub-title">{result?.plan}</p>
            </div>
            <div className="flex flex-col xsm-gap">
              <p className="grid__title">Billing Plan</p>
              <p className="grid__sub-title">{result?.billing_plan}</p>
            </div>
            <div className="flex flex-col xsm-gap">
              <p className="grid__title">Portion Size</p>
              <p className="grid__sub-title">{result?.portion_size}</p>
            </div>
          </div>
          {/*  */}
          <div className="grid">
            <div className="flex flex-col xsm-gap">
              <p className="grid__title">Billing Renewal Cycle</p>
              <p className="grid__sub-title">{result?.billing_renewal_cycle}</p>
            </div>
            <div className="flex flex-col xsm-gap">
              <p className="grid__title">Days per Week</p>
              <p className="grid__sub-title">{result?.days_per_week}</p>
            </div>
            <div className="flex flex-col xsm-gap">
              <p className="grid__title">Meals per Day</p>
              <p className="grid__sub-title">{result?.meals_per_day}</p>
            </div>
            <div className="flex flex-col xsm-gap">
              <p className="grid__title">Starting Date</p>
              <p className="grid__sub-title">{result?.starting_on}</p>
            </div>
          </div>
          {/*  */}
          <div className="delivery">
            <div className="flex flex-col xsm-gap">
              <p className="delivery__title">Deliveries scheduled for</p>
              <div className="flex ai-center xsm-gap delivery__sub-title">
                <div>Sun, Mar 10, 2024</div>
                <FaLongArrowAltRight color="black" size={15} />
                <div>Wed, Apr 03, 2024</div>
              </div>
            </div>
          </div>

          <div className="flex jc-end mt-20">
            <div>
              <button>Proceed to checkout</button>
            </div>
          </div>
        </div>
      </Inner>
    </Container>
  );
};

export default Carts;
