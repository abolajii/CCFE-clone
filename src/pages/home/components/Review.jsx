import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  20%, 80% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const Container = styled.div`
  padding: 40px 30px;
  background: #eff9e6;
  position: relative;

  .sub-text,
  .author {
    animation: ${fadeInOut} 15s linear infinite;
  }

  h2 {
    margin: 20px 0;
  }

  .sub-text {
    font-size: 19px;
    max-width: 90%;
    line-height: 1.5;
  }

  .author {
    margin-top: 10px;
  }
`;

const ReviewCard = styled.div`
  text-align: center;
  position: absolute;
  inset: 0;
`;

const Review = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      text: "Great product! I love it.",
      author: "John Doe",
    },
    {
      id: 2,
      text: "Awesome service and fast delivery.",
      author: "Jane Smith",
    },
    // Add more reviews as needed
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNextReview();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentReview]);

  const goToNextReview = () => {
    setCurrentReview((prevReview) => (prevReview + 1) % reviews.length);
  };

  const goToPrevReview = () => {
    setCurrentReview((prevReview) =>
      prevReview === 0 ? reviews.length - 1 : prevReview - 1
    );
  };

  return (
    <Container>
      <h2 className="center">What people are saying</h2>

      <div className="inner center flex-col">
        <ReviewCard>
          <p className="sub-text">{reviews[currentReview].text}</p>
          <p className="author">{reviews[currentReview].author}</p>
        </ReviewCard>
      </div>

      <ArrowButton className="left" onClick={goToPrevReview}>
        <FaArrowLeft />
      </ArrowButton>
      <ArrowButton className="right" onClick={goToNextReview}>
        <FaArrowRight />
      </ArrowButton>
    </Container>
  );
};

const ArrowButton = styled.button`
  font-size: 24px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  color: #333;
  position: absolute;
  z-index: 2;

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

export default Review;
