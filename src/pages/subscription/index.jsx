import Container from "../../components/Container";
import React from "react";
import styled from "styled-components";

const Inner = styled.div`
  position: relative;
  top: 70px;

  .mx-auto {
    max-width: 1150px;
    margin: auto;
  }

  .date {
    padding: 20px 0;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;

const Notification = styled.div`
  padding: 20px 0;
  background-color: #8dd444;

  .mx-auto {
    p {
      font-size: 28px;
      color: white;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const Subscription = () => {
  return (
    <Container>
      <Inner>
        <Notification>
          <div className="mx-auto">
            <p>Weekly Subscription</p>
          </div>
        </Notification>
      </Inner>
    </Container>
  );
};

export default Subscription;
