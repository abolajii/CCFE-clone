import React from "react";
import bg from "../../../assets/allmenu.png";
import { css } from "styled-components";
import eight from "../../../assets/8.jpeg";
import five from "../../../assets/5.jpeg";
import four from "../../../assets/4.jpeg";
import nine from "../../../assets/9.jpeg";
import one from "../../../assets/1.jpeg";
import seven from "../../../assets/7.jpeg";
import six from "../../../assets/6.jpeg";
import styled from "styled-components";
import three from "../../../assets/3.jpeg";
import two from "../../../assets/2.jpeg";

const BackgroundContainer = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Inner = styled.div`
  background: white;
  width: 85%;
  padding: 80px 10px;
  margin-top: 130px;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Text = styled.div`
  font-weight: 500;
  color: #000000;
  font-size: 48px;
  text-align: center;
`;

const SmallText = styled.div`
  font-size: 17px;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 50px;
`;

const InnerScroll = styled.div`
  margin: auto;
  overflow: scroll;
  height: 500px;
`;

const Scroll = styled.div`
  width: 96%;
  margin: auto;
  display: grid;
  gap: 30px;
  padding: 50px 0;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const Card = styled.div`
  display: flex;
  box-shadow: -1px 4px 10px 0px rgb(0 0 0 / 21%);
  border-radius: 5px;
  overflow: hidden;
`;

const CardText = styled.div`
  padding: 5px 8px;
  width: 100%;
  position: relative;
`;

const Bold = styled.div`
  font-size: 13px;
  font-weight: 600;
  text-overflow: ellipsis;
  line-height: 1.3;

  ${({ right }) =>
    right &&
    css`
      font-size: 15px;
      margin-right: 4px;
      font-weight: 700;
    `}
`;

const Light = styled.div`
  font-size: 13px;
  text-overflow: ellipsis;
  line-height: 1.3;
  color: #484848;

  ${({ right }) =>
    right &&
    css`
      font-size: 15px;
    `}
`;

const CardImageContainer = styled.div`
  width: 220px;
  height: 140px;
  position: relative;
`;

const Premium = styled.div`
  position: absolute;
  right: -20px;
  top: 25px;
  height: 25px;
  width: 90px;
  border-radius: 0px 25px 25px 0px;
  background-color: #fc0d1c;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
  box-shadow: 3px 1px 7px rgba(0, 0, 0, 0.5);
  font-size: 12.8px;
`;

const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

const Left = styled.div``;

const Right = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 7px;
  right: 7px;
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ViewButton = styled.button`
  background: #8dd444;
  outline: none;
  border: none;
  padding: 13px 51px;
  text-transform: uppercase;
  border-radius: 3px;
  color: white;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 7px 0 rgb(120 137 149 / 25%);
  }
`;

const GridContainer = styled.div``;

const GridItem = styled.div``;

const OnlineMenu = () => {
  //
  const data = [
    { id: 1, img: one },
    { id: 2, img: two },
    { id: 3, img: three },
    { id: 4, img: four },
    { id: 5, premium: true, img: five },
    { id: 6, img: one },
    { id: 7, img: six, premium: true },
    { id: 8, img: four },
    { id: 9, img: seven },
    { id: 10, img: one, premium: true },
    { id: 11, img: eight, premium: true },
    { id: 12, img: four },
    { id: 13, img: three },
    { id: 14, img: nine },
    { id: 15, img: two },
    { id: 16, img: one, premium: true },
    { id: 17, img: three },
    { id: 18, img: one },
  ];

  return (
    <BackgroundContainer>
      <Inner>
        <Text>Online Menu</Text>
        <SmallText>
          Not interested in a plan? Shop our online menu and pick as many or few
          meals as you need.
        </SmallText>
        <InnerScroll>
          <Scroll>
            {data.map(({ id, premium, img }) => (
              <Card key={id}>
                <CardImageContainer>
                  <CardImage src={img} alt="One" />
                  {premium && <Premium>Premium</Premium>}
                </CardImageContainer>
                <CardText>
                  <Left>
                    <Bold>Balsamic Chicken Salad (16 oz)</Bold>
                    <Light>gluten free, dairy free, nut free</Light>
                  </Left>

                  <Right>
                    <Bold right="true">960</Bold>{" "}
                    <Light right="true">Calories</Light>
                  </Right>
                </CardText>
              </Card>
            ))}
          </Scroll>
        </InnerScroll>
        <ButtonContainer>
          <ViewButton>view entire menu</ViewButton>
        </ButtonContainer>
      </Inner>
    </BackgroundContainer>
  );
};

export default OnlineMenu;
