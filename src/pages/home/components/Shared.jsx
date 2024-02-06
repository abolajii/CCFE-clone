import styled, { css } from "styled-components";

/* eslint-disable react/prop-types */
import React from "react";
import bg from "../../../assets/cc.jpeg";

const Container = styled.div`
  background-color: white;
  width: 100%;
  max-width: 1200px;

  padding: 50px;
  ${({ sp }) => {
    return (
      sp &&
      css`
        padding-bottom: 150px;
      `
    );
  }}
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;

const Details = styled.div`
  background-color: white;
  height: 550px;
  position: relative;
  width: 60%;
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgb(0 0 0 / 0%);

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    height: 500px;
  }

  ${({ sp }) => {
    return (
      sp &&
      css`
        border-radius: 0px;
        box-shadow: 0px 0px 20px rgb(0 0 0 / 10%);
        padding: 60px 30px;

        @media screen and (max-width: 768px) {
          width: 100%;
          padding: 20px;
          height: auto;
        }
      `
    );
  }}
  @media screen and (max-width: 768px) {
    width: 100%;
    /* padding: 20px; */
    height: auto;
  }

  @media screen and (max-width: 768px) {
    img {
      display: none;
    }
  }
`;

const BackgroundImage = styled.div`
  background-color: white;
  height: 450px;
  position: absolute;
  transform: translate(100%, 0%);
  top: 50px;
  width: 80%;
  top: 50px;
  right: 0;
  bottom: 50px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &.p2 {
    padding: 30px;
    width: 100%;
    height: fit-content;
    top: 90px;
    transform: translate(90%, 0%);

    @media screen and (max-width: 768px) {
      transform: translate(0%, 0%);
      padding: 30px;
    }
  }

  .no-margin {
    margin-bottom: 0;
  }

  ${({ sp }) => {
    return (
      sp &&
      css`
        transform: translate(80%, 0%);
        width: 100%;
        border-radius: 5px;
        box-shadow: 0px 0px 20px rgb(0 0 0 / 10%);
      `
    );
  }}

  @media screen and (max-width: 768px) {
    display: none;
  }

  ${({ show }) => {
    return (
      show &&
      css`
        @media screen and (max-width: 768px) {
          display: block;
          position: static;
        }
      `
    );
  }}
`;

const BigText = styled.h2`
  font-size: 35px;
  color: #030403;
  margin-bottom: 15px;

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

const LightText = styled.p`
  color: #484848;
  line-height: 1.5;
  font-size: 19px;
`;

const Button = styled.button`
  background: #8dd444;
  color: white;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 13px 51px;
  text-transform: uppercase;
  border-radius: 3px;
  margin-top: 30px;

  &:hover {
    box-shadow: 0 2px 7px 0 rgb(120 137 149);
    color: #fff;
  }
`;

const Shared = ({ opp }) => {
  if (opp) {
    return (
      <Container className="auto margin">
        <Details>
          <img src={bg} />
          <BackgroundImage sp className="p2" show>
            <BigText className="no-margin">Get Started </BigText>
            <BigText>With a Healthier You</BigText>

            <LightText>
              The convenience of a well prepared, healthy, flavorful meal with
              no shopping, preparing, or clean up is a total game changer for
              your lifestyle!
            </LightText>
            <Button>SIGN UP NOW</Button>
          </BackgroundImage>
        </Details>
      </Container>
    );
  }
  return (
    <Container className="auto" sp>
      <Details sp>
        <BigText>
          Our mission is to make clean eating delicious and convenient for
          everyone.
        </BigText>

        <LightText>
          Our mission is to make clean eating simple and convenient. You should
          never have to sacrifice quality, flavor or nutrition when it comes to
          your, which is why we offer the highest quality ingredients in our
          meals. Every meal we prepare is created with passion and care by our
          incredible chef and culinary team. We are more passionate than ever
          that we can truly change people’s lives with clean eating!
        </LightText>
        <Button>LEARN MORE</Button>
        <BackgroundImage>
          <img src={bg} />
        </BackgroundImage>
      </Details>
    </Container>
  );
};

export default Shared;
