/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";

import Container from "../../components/Container";
import { IoMdCart } from "react-icons/io";
import Modal from "./components/Modal";
import eight from "../../assets/8.jpeg";
import five from "../../assets/5.jpeg";
import four from "../../assets/4.jpeg";
import one from "../../assets/1.jpeg";
import seven from "../../assets/7.jpeg";
import six from "../../assets/6.jpeg";
import styled from "styled-components";
import three from "../../assets/3.jpeg";
import two from "../../assets/2.jpeg";
import useModal from "./hook/useModal";
import useSelectedItem from "./hook/useSelectedItem";

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

const CalendarDate = styled.div`
  margin-top: 10px;
  padding: 7px 14px;
  width: fit-content;
  border: 1px solid #f8f8f8;
  border-radius: 5px;

  .day {
    color: #707070;
    font-size: 15px;
  }

  .bold {
    color: #ccc;
    font-weight: bold;
    font-size: 28px;
  }

  &:hover,
  &.active {
    border: 1px solid #8dd444;

    .day,
    .bold {
      color: #8dd444;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 7px 9px;

    .day {
      font-size: 14px;
    }

    .bold {
      font-weight: bold;
      font-size: 22px;
    }
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

const TabContainer = styled.div`
  margin-top: 40px;
  position: sticky;
  border-bottom: 1px solid #d7d5d5;
  padding: 25px 0;
  top: 70px;
  background-color: #fff;
`;

const Tab = styled.div`
  cursor: pointer;
  &.active {
    color: #8dd444;
  }
`;

const Section = styled.div`
  padding: 20px 0px;

  h3 {
    @media screen and (max-width: 768px) {
      padding: 10px 20px;
    }
  }

  .inner {
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const Box = styled.div`
  /* height: 170px; */
  box-shadow: 3px 1px 10px rgba(0, 0, 0, 0.13);

  overflow: hidden;
  border-radius: 4px;
  .one {
    flex: 1.2;
    height: 170px;

    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
    }
  }

  .two {
    flex: 1.8;
    padding: 10px;
    background-color: #fff;
  }

  .food-title {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .food-subtitle {
    font-size: 13px;
    line-height: 1.1;
  }

  .calo {
    font-size: 14px;
  }

  button {
    background: #8dd444;
    outline: none;
    border: none;
    padding: 5px 10px;
    text-transform: uppercase;
    border-radius: 3px;
    color: white;
    letter-spacing: 1px;
    cursor: pointer;

    &:hover {
      box-shadow: 0 2px 7px 0 rgb(120 137 149 / 25%);
    }
  }

  @media screen and (max-width: 768px) {
    margin: 0 20px;
  }
`;

const sectionsData = [
  { id: 1, title: "Entree" },
  { id: 2, title: "GetLean" },
  { id: 3, title: "Breakfast" },
];

const images = [one, two, three, four, five, six, seven, eight];

const CalendarDay = ({ day, date, isActive }) => (
  <CalendarDate className={`center flex-col cursor ${isActive && "active"}`}>
    <p className="day">{day}</p>
    <p className="bold">{String(date).padStart(2, "0")}</p>
  </CalendarDate>
);

const Current = () => {
  const [active, setActive] = useState(1);

  const { openModal } = useModal();

  const { setSelectedItem } = useSelectedItem();

  const refs = useRef(
    Array(sectionsData.length)
      .fill(null)
      .map(() => React.createRef())
  );

  const today = new Date();
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date);
  }

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = 60; // Height of the sticky navbar
      const scrollPosition = window.scrollY + navbarHeight;
      refs.current.forEach((ref, index) => {
        if (
          ref.current &&
          scrollPosition >= ref.current.offsetTop &&
          (index === refs.current.length - 1 ||
            scrollPosition < refs.current[index + 1].current.offsetTop)
        ) {
          setActive(index + 1);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToRef = (index) => {
    window.scrollTo({
      top: refs.current[index].current.offsetTop - 60, // Offset for fixed navbar
      behavior: "smooth", // Optional, smooth scrolling
    });
  };

  return (
    <Container>
      <Inner>
        <Notification>
          <div className="mx-auto">
            <p>Our menu for Today</p>
          </div>
        </Notification>
        <div className="mx-auto date">
          <p>March 2024</p>
          <div className="flex sm-gap">
            {dates.map((date, index) => (
              <CalendarDay
                key={index}
                day={weekDays[date.getDay()]}
                date={date.getDate()}
                isActive={date.getDate() === today.getDate()}
              />
            ))}
          </div>
          <TabContainer className="flex lg-gap">
            {sectionsData.map((section, index) => (
              <Tab
                key={section.id}
                className={active === section.id ? "active" : ""}
                onClick={() => {
                  setActive(section.id);
                  scrollToRef(index);
                }}
              >
                {section.title}
              </Tab>
            ))}
          </TabContainer>

          {sectionsData.map((section, index) => (
            <Section key={section.id} ref={refs.current[index]}>
              <Modal />
              <h3>{section.title}</h3>
              <div className="inner lg-gap">
                {[...Array(7)].map((_, i) => (
                  <Box
                    key={i}
                    className="flex cursor"
                    title="Gluten Free Bownie (2 per container)"
                  >
                    <div className="one">
                      <img src={images[i]} />
                    </div>
                    <div className="two flex flex-col lg-gap">
                      <div>
                        <p className="food-title">
                          Gluten Free Bownie (2 per container)
                        </p>
                        <p className="food-subtitle">
                          Clean Ingredients Decadent Brownie. Calorie info
                          reflects one brownie.
                        </p>
                      </div>
                      <div className="flex ai-center justify-between">
                        <div className="flex xsm-gap center">
                          <strong>130</strong>
                          <p className="calo">Calories</p>
                        </div>
                        <div>
                          <button
                            onClick={() => {
                              openModal();
                              setSelectedItem({
                                title: " Gluten Free Bownie (2 per container)",
                                subTitle:
                                  "Clean Ingredients Decadent Brownie. Calorie info reflects one brownie.",
                              });
                            }}
                          >
                            <IoMdCart size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Box>
                ))}
              </div>
            </Section>
          ))}
        </div>
      </Inner>
    </Container>
  );
};

export default Current;
