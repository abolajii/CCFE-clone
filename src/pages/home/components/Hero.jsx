import React from "react";
import bg from "../../../assets/bg.jpeg";
import styled from "styled-components";

const BackgroundContainer = styled.div`
  height: 790px;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 737px) {
    height: 650px;
  }
`;

const BackgroundInner = styled.div`
  background: rgba(255, 255, 255, 0.6);
  max-width: 1130px;
  padding: 70px 50px;
  width: 100%;

  @media screen and (max-width: 737px) {
    width: 100%;
    padding: 1.8rem;
  }
`;

const Title = styled.h2`
  font-size: 70px;
  font-family: "poppins", sans-serif;
  font-weight: 500;
  color: #030403;

  @media screen and (max-width: 737px) {
    font-size: 45px;
  }

  @media screen and (max-width: 476px) {
    font-size: 30px;
  }
`;

const SmallText = styled.p`
  font-size: 22px;
  margin: 30px 0 20px;

  @media screen and (max-width: 1028px) {
    margin: 20px 0 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 15px;
  }
`;

const GetStartedButton = styled.button`
  background: #8dd444;
  color: white;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;

  padding: 13px 51px;
  text-transform: uppercase;
  border-radius: 3px;

  &:hover {
    box-shadow: 0 2px 7px 0 rgb(120 137 149);
    color: #fff;
  }
`;

const Hero = () => {
  return (
    <BackgroundContainer>
      <BackgroundInner>
        <Title>Get Started</Title>
        <Title>With a Healthier You</Title>

        <SmallText>
          We make eating healthy convenient and delicious so you can have more
          time to do the things you love.
        </SmallText>
        <GetStartedButton>GET STARTED</GetStartedButton>
      </BackgroundInner>
    </BackgroundContainer>
  );
};

export default Hero;
