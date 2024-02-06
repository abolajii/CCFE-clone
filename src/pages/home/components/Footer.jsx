import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #2d2d2d;
  padding: 40px 30px;
  color: #ffffff;

  .inner {
    display: flex;
    max-width: 1100px;
  }

  h2 {
    font-size: 32px;
  }

  .phone {
    font-size: 13px;
    line-height: 1.3;
  }

  .email {
    font-size: 13px;
    line-height: 1.3;
  }

  .copy,
  .mobile {
    margin-top: 15px;
    font-size: 12px;
  }

  .mobile {
    border-top: 1px solid #9f9d9d;
    padding: 9px 0;
    text-align: center;
  }

  .sm-gap {
    margin: 15px 0;
  }

  .title {
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 15px;
  }

  .link {
    font-size: 14px;
    margin-bottom: 15px;
  }

  @media screen and (min-width: 768px) {
    .mobile {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    .inner {
      flex-direction: column;
    }

    .two {
      flex-direction: column;
      margin: 30px 0;
    }

    .copy {
      display: none;
    }
  }
`;

const Button = styled.button`
  color: #555;
  background-color: #fff;
  border-radius: 3px;
  padding: 9px 12px;
`;

const Icon = styled.div`
  color: #000;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #fff;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <div className="inner auto">
        <div className="flex-1 flex flex-col lg-gap">
          <h2>Clean Creations</h2>
          <div>
            <p className="phone">504-309-5427</p>
            <p className="email">customerservice@cleancreations.net</p>
          </div>
          <div className="flex sm-gap">
            <div>
              <Button>Sign Up for our Newsletter</Button>
            </div>
            <div>
              <Button>Invite a friend</Button>
            </div>
          </div>
          <div>
            <div className="flex xsm-gap">
              <Icon className="center">
                <FaTwitter size={22} />
              </Icon>
              <Icon className="center">
                <FaFacebookF size={22} />
              </Icon>
              <Icon className="center">
                <FaInstagram size={22} />
              </Icon>
            </div>
            <div className="copy">
              © 2024 Clean Creations. All Rights Reserved.
            </div>
          </div>
        </div>
        <div className="flex flex-1 two">
          <div className="flex flex-1 flex-col">
            <p className="title">Clean Creations</p>
            <div>
              <p className="link">Current Menu</p>
              <p className="link">Contact Us</p>
              <p className="link">Privacy Policy</p>
              <p className="link">F.A.Q.</p>
              <p className="link">Pickup Locations</p>
              <p className="link">Grab & Go</p>
              <p className="link">Blog</p>
            </div>
          </div>
          <div>
            <p className="title">Meal Ordering</p>
            <div>
              <p className="link">Real Time Ordering</p>
              <p className="link">Subscription Meal Selection</p>
              <p className="link">À la Carte</p>
              <p className="link">Proteins by the Pound</p>
              <p className="link">Extras</p>
              <p className="link">Gift Card</p>
            </div>
            <div className="mobile">
              © 2024 Clean Creations. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
