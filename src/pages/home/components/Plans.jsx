import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* max-width: 1200px; */
  padding: 70px 30px;

  h2 {
    font-size: 40px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 30px;
  }
`;

const Text = styled.div`
  font-weight: 500;
  color: #000000;
  font-size: 48px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

const SmallText = styled.div`
  font-size: 17px;
  line-height: 1.5;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 50px;
  max-width: 80%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const PlanGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
`;

const PlanGridItem = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px rgb(0 0 0 / 10%);
  align-items: center;
  justify-content: center;
  padding: 50px 40px;
  border-radius: 7px;

  @media screen and (max-width: 768px) {
    padding: 30px;
  }
`;

const GridText = styled.div`
  color: #484848;
  font-size: 17px;
  margin: 10px 0;
  font-weight: bold;
`;

const LightText = styled.div`
  margin: 10px 0;
`;

const PriceText = styled.div`
  margin: 10px 0;
`;

const ButtonContainer = styled.div`
  margin: 10px 0;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  font-size: 16px;
  padding: 13px 51px;
  text-transform: uppercase;
  outline: none;
  border: none;
  border-radius: 3px;
  background: #8dd444;
  color: white;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 7px 0 rgb(120 137 149);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Plans = () => {
  //
  const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  return (
    <Container>
      <Text>Plans for Everyone</Text>
      <SmallText className="auto">
        Consistency in your diet starts with a plan. Choose from 2,3, or 4 meals
        per day for 5,6, or 7 days. Plans are subscription based but can be
        changed at any time to meet your needs.
      </SmallText>
      <PlanGrid>
        {data.map(({ id }) => (
          <PlanGridItem key={id}>
            <GridText>The Lifestyle Plan</GridText>
            <LightText>as low as possible</LightText>
            <PriceText>$9.76 per meal</PriceText>
            <ButtonContainer>
              <Button>CHOOSE</Button>
            </ButtonContainer>
          </PlanGridItem>
        ))}
      </PlanGrid>
    </Container>
  );
};

export default Plans;
