import Container from "../../components/Container";
import Footer from "../home/components/Footer";
import { MdArrowDropDown } from "react-icons/md";
/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import useCartStore from "../../hook/useCart";
import useSubscriptionStore from "./hook/useSubscription";

const Inner = styled.div`
  position: relative;
  top: 70px;

  .banner {
    height: 60px;
    background: #eee;
    border-radius: 2px;
  }

  .mx-auto {
    display: flex;
    max-width: 1150px;
    align-items: start;
    margin: auto;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      padding: 10px 0;
    }
  }

  .one {
    // flex-grow: 1;
    overflow-y: auto;
    padding: 10px;
    margin-top: 10px;

    .selected-info {
      font-size: 13px;
      padding: 10px 0;
    }
    .title {
      margin-bottom: 15px;
    }
    .date {
      margin-bottom: 20px;
    }
  }

  aside {
    box-shadow: 3px 3px 9px rgba(0, 0, 0, 0.25);
  }

  .two {
    position: sticky;
    top: 95px;
    flex-shrink: 0;
    margin-top: 10px;
    overflow: hidden;
    border-radius: 0 0 9px 9px;

    .tag {
      font-size: 13px;
    }

    .value {
      font-size: 14px;
      font-weight: 500;
    }

    .bottom {
      background: #8dd444;
      padding: 20px;
    }

    .empty {
      background: #8dd444;
      padding: 8px 9px;
      border-radius: 4px;
      color: white;

      p {
        font-size: 14px;
      }

      &:hover {
        background: #7fc836;
      }
      &:active {
        transform: scale(0.98);
      }
    }

    .details {
      width: 400px;
      background: #fff;
      padding: 10px;
      border-radius: 3px;
      max-height: 60px;
      transition: max-height 0.5s ease;
      overflow: hidden;

      &.visible {
        max-height: 400px;
        transition: max-height 0.5s ease;
        /* Adjust the value based on your needs */
      }
    }

    .selectedOptions {
      margin: 10px 0;

      .single {
        border-bottom: 1px solid #ccc;
        padding: 13px 0px;
      }
    }
  }

  .btn {
    border: 1px solid #ccc;
    padding: 8px;
    font-size: 14px;
    border-radius: 3px;

    &:hover {
      background: #eee;
      border: 1px solid #7fc836;
    }

    &.selected {
      background: #8dd444;

      color: white;
    }
  }
`;

const Notification = styled.div`
  padding: 20px 0;
  background-color: #8dd444;
  margin-bottom: 15px;

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

const options = [
  {
    id: 1,
    tag: "Plan",
    name: "Choose your plan",
    options: [
      {
        id: "Get Lean (Gluten Free)",
        desc: "Expertly designed meals and ready to blend smoothies to get you lean and toned. Meals and smoothies in this plan are under under 500 calories and are gluten and dairy free. *This plan includes one premium menu option per week, additional premium options are available with a surcharge",
      },
      {
        id: "The Everything Plan",
        desc: "This plan combines every menu option we offer. It's perfect if you love to mix your meal preferences like low carb, vegan, vegetarian, pescatarian or lifestyle. ***PLEASE NOTE: IN ORDER TO AVOID DUPLICATES OF VARIATIONS YOU MUST SELECT YOUR MEALS WITHIN THE PLAN***",
      },
      {
        id: "The Lifestyle Plan",
        desc: "Every meal in this plan was created to promote a healthy lifestyle. Select from the Normal portion (4-5 oz of lean protein, 2-4 oz of complex carbohydrates and 4-6 oz of nutrient rich vegetables) or Muscle Builder portion (6-8 oz of lean protein, 3-6 oz of complex carbohydrates and 6-8 oz of nutrient rich vegetables)",
      },

      {
        id: "The Low Carb Plan",
        desc: "Our low carb selections are completely grain free and packed with nutrient dense vegetable swaps like zucchini noodles, Cauliflower Corn Grits and Turnip Mash. Menus from this plan include top sellers like Shrimp and Cauliflower Grits, Hickory Burger with Caramelized Onions and Mixed Vegetables and Thai Turkey Lettuce Wrap over Cauliflower Rice.",
      },
    ],
  },
  {
    id: 2,
    tag: "Portion Size",
    name: "Choose your Portion Size",
    options: [
      {
        id: "Regular",
      },
      {
        id: "Muscle Builder (Large)",
      },
    ],
  },
  {
    id: 3,
    tag: "Billing Renewal Cycle",
    name: "Choose your Billing Renewal Cycle",
    options: [
      {
        id: "1 week",
      },
      {
        id: "2 weeks",
      },
      {
        id: "4 weeks",
      },
    ],
  },
  {
    id: 4,
    tag: "Billing Plan",
    name: "Choose your plan",
    options: [
      {
        id: "1 Week Plan without Breakfast",
      },
      {
        id: "1 Week Plan with Breakfast",
      },
    ],
  },
  {
    id: 5,
    tag: "Days per week",
    name: "How many days per week do you want food?",
    options: [
      {
        id: "5 Days per Week",
      },
      {
        id: "6 Days per Week",
      },
      {
        id: "7 Days per Week",
      },
    ],
  },
  {
    id: 6,
    tag: "Meals per day",
    name: "How many meals per day?",
    options: [
      {
        id: "1 meal",
      },

      {
        id: "2 meals",
      },

      {
        id: "3 meals",
      },

      {
        id: "4 meals",
      },
    ],
  },
  {
    id: 7,
    tag: "Starting on",
    name: "Choose your starting delivery date",
  },
];

const CalendarDay = ({ day, date, isActive, onClick }) => (
  <CalendarDate
    onClick={onClick}
    className={`center flex-col cursor ${isActive && "active"}`}
  >
    <p className="day">{day}</p>
    <p className="bold">{String(date).padStart(2, "0")}</p>
  </CalendarDate>
);

const Subscription = () => {
  const [active, setActive] = React.useState(1);
  const { selectedDetails, setSelectedDetails } = useSubscriptionStore();
  const [selectedOptionDesc, setSelectedOptionDesc] = React.useState("");
  const [activeDate, setActiveDate] = React.useState(null);
  const [detailsVisible, setDetailsVisible] = React.useState(true);
  const { setCartItems } = useCartStore();

  const today = new Date();
  const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date);
  }

  const handleClick = (each, option, index) => {
    const selectedDetailsClone = [...selectedDetails];
    if (index <= active) {
      const filterOptions = selectedDetailsClone.filter(
        (selectedOption) => selectedOption?.tag === each?.tag
      );

      if (filterOptions.length === 0) {
        setSelectedDetails([
          ...selectedDetails,
          { id: each.id, tag: each.tag, value: option.id },
        ]);
      } else {
        const finalDetails = selectedDetailsClone.map((selectedOption) => {
          if (selectedOption.tag === each.tag) {
            return {
              ...selectedOption,
              value: option.id,
            };
          } else {
            return selectedOption;
          }
        });

        setSelectedDetails(finalDetails);
      }
      if (option.desc) {
        setSelectedOptionDesc(option.desc);
      }
      setActive(index + 1);

      if (index >= 6) {
        setCartItems([selectedDetails]);
      }
    }
  };

  const handleDateClick = (each, date) => {
    const selectedDetailsClone = [...selectedDetails];
    const filterOptions = selectedDetailsClone.filter(
      (selectedOption) => selectedOption?.tag === each?.tag
    );
    if (filterOptions.length === 0) {
      setSelectedDetails([
        ...selectedDetails,
        { id: each.id, tag: each.tag, value: date.getDate() },
      ]);
    } else {
      const finalDetails = selectedDetailsClone.map((selectedOption) => {
        if (selectedOption.tag === each.tag) {
          return {
            ...selectedOption,
            value: date.getDate(),
          };
        } else {
          return selectedOption;
        }
      });
      setSelectedDetails(finalDetails);
    }
  };

  const handleToggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  return (
    <>
      <Container>
        <Inner>
          <Notification>
            <div className="mx-auto">
              <p>Weekly Subscription</p>
            </div>
          </Notification>

          <div className="banner mx-auto" />
          <div className="mx-auto">
            <div className="one flex-1 flex flex-col lg-gap">
              {options.map((each, index) => {
                return (
                  <div
                    key={each.id}
                    style={{
                      opacity: index < active ? 1 : 0.4,
                    }}
                  >
                    <div className="flex xsm-gap title">
                      <h3>{each.id}.</h3>
                      <h3>{each.name}</h3>
                    </div>
                    <div className="flex md-gap flex-wrap">
                      {each.id === 7 && (
                        <div className="flex flex-col">
                          <div>February 2024</div>
                          <div className="flex sm-gap date">
                            {dates.map((date, index) => (
                              <CalendarDay
                                onClick={() => {
                                  if (each.id <= active) {
                                    handleDateClick(each, date);
                                    setActiveDate(date);
                                  }
                                }}
                                key={index}
                                day={weekDays[date.getDay()]}
                                date={date.getDate()}
                                isActive={
                                  activeDate?.getDate() === date.getDate()
                                }
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {each.options?.map((option, optionIndex) => {
                        return (
                          <div key={optionIndex} className="flex flex-col">
                            <button
                              className={`btn ${
                                selectedDetails.find(
                                  (selectedOption) =>
                                    selectedOption?.tag === each.tag &&
                                    selectedOption.value === option.id
                                ) && "selected"
                              }`}
                              onClick={() => {
                                // setActive(each.id + 1);
                                handleClick(each, option, each.id);
                              }}
                            >
                              {option.id}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                    {each.id === 1 && selectedOptionDesc && (
                      <p className="selected-info">{selectedOptionDesc}</p>
                    )}
                  </div>
                );
              })}
            </div>
            <aside className="two">
              {/* Render details for 'two' */}
              <div className={`details ${detailsVisible ? "visible" : ""}`}>
                <div className="flex justify-between ai-center">
                  <div className="flex">
                    <div>
                      <h3>Overview</h3>
                    </div>
                    <div className="cursor" onClick={handleToggleDetails}>
                      <MdArrowDropDown />
                    </div>
                  </div>
                  <button
                    className="flex xsm-gap ai-center empty"
                    onClick={() => {
                      setSelectedDetails([]);
                      setActive(1);
                      setSelectedOptionDesc("");
                    }}
                  >
                    <p>Start Over</p>
                  </button>
                </div>
                <div className="selectedOptions">
                  {selectedDetails.map((option, index) => {
                    return (
                      <div
                        key={index}
                        className="single flex ai-center justify-between"
                      >
                        <p className="tag">{option?.tag}:</p>
                        <p className="value">{option?.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="bottom" />
            </aside>
          </div>
          <Footer />
        </Inner>
      </Container>
    </>
  );
};

export default Subscription;
