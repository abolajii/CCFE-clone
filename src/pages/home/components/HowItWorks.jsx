import styled, { css } from "styled-components";

import React from "react";
import four from "../../../assets/four.svg";
import one from "../../../assets/one.svg";
import three from "../../../assets/three.svg";
import two from "../../../assets/two.svg";

const Container = styled.div`
  max-width: 1200px;
  padding: 70px 30px;

  h2 {
    font-size: 40px;
    margin-bottom: 20px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  justify-items: center;
  margin: auto;
  margin-top: 50px;
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const GridImageContainer = styled.div`
  ${({ id }) => {
    switch (id) {
      case 1:
        return css`
          height: 150px;
          width: 150px;
        `;
      case 2:
        return css`
          height: 150px;
          width: 150px;
          margin-top: -40px;

          @media screen and (max-width: 777px) {
            margin-top: -70px;
          }

          @media screen and (max-width: 459px) {
            margin-top: 10px;
          }
        `;
      case 3:
        return css`
          height: 150px;
          width: 150px;
        `;

      case 4:
        return css`
          height: 150px;
          width: 150px;
        `;
      default:
        return null;
    }
  }}
`;

const GridImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const GridText = styled.div`
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 5px;
  margin-top: 20px;
  ${({ sm }) => {
    return (
      sm &&
      css`
        font-size: 15px;
        line-height: 1.5;
        text-align: center;
        font-weight: 400;
      `
    );
  }};
`;

const list = [
  {
    id: 1,
    title: "PLACE ORDER",
    img: one,
    smallText:
      " Select from our wide variety of signature dishes, custom, or specialty meal options. Pick up in Baton Rouge or choose betweenin-store pickup or delivery in the New Orleans Metro Area",
  },
  {
    id: 2,
    title: "COOK",
    img: two,
    smallText:
      " Our staff will carefully prepare, cook, and package all of your meals and have them fresh and ready to go!",
  },
  {
    id: 3,
    title: "PICKUP / DELIVER",
    img: three,
    smallText:
      "You choose whether to pick up your meals in our very own brick and mortar location or even choose a delivery method in case you are busy. We never want you to miss out",
  },
  {
    id: 4,
    title: "HEAT IT & EAT IT",
    img: four,
    smallText:
      "Our meal containers are both microwavable and oven sustainable. In just minutes you will be enjoying restaurant quality meals from the comfort of your own home.",
  },
];

const HowItWorks = () => {
  return (
    <Container className="auto">
      <h2 className="title text-center">How It Works</h2>
      <Grid>
        {list.map(({ id, img, smallText, title }) => (
          <GridItem key={id}>
            <GridImageContainer id={id}>
              <GridImage src={img} />
            </GridImageContainer>
            <GridText> {title}</GridText>
            <GridText sm="true">{smallText}</GridText>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default HowItWorks;
