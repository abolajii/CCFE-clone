import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useState } from "react";

import styled from "styled-components";

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

const ReviewSliderContainer = styled.div`
  width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  background-color: blue;
`;

const ReviewCard = styled.div`
  flex: 1;
  background-color: red;
  transition: transform 0.3s ease-in-out;
  text-align: center;
`;

const ArrowButton = styled.button`
  font-size: 24px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  color: #333;
`;

const ReviewSlider = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const goToNextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const goToPrevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <ReviewSliderContainer>
      <ArrowButton onClick={goToPrevReview}>
        <FaArrowLeft />
      </ArrowButton>
      {reviews.map((review, index) => (
        <ReviewCard
          key={review.id}
          style={{ transform: `translateX(${(index - currentReview) * 100}%)` }}
        >
          <p>{review.text}</p>
          <p>- {review.author}</p>
        </ReviewCard>
      ))}
      <ArrowButton onClick={goToNextReview}>
        <FaArrowRight />
      </ArrowButton>
    </ReviewSliderContainer>
  );
};

export default ReviewSlider;
