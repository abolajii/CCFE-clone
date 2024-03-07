import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";

import { FaFire } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import React from "react";
import eight from "../../../assets/1.jpeg";
import styled from "styled-components";
import useModal from "../hook/useModal";
import useSelectedItem from "../hook/useSelectedItem";

const Container = styled.div`
  position: fixed;
  z-index: 2;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.15);
  padding-top: 39px;

  .inner {
    background: white;
    width: 800px;
    border-radius: 6px 0px 6px 6px;

    .portion {
      font-size: 12px;
      padding-top: 9px;
    }

    .ingredient {
      font-size: 15px;
      font-weight: bold;
      padding: 3px 0 4px;
      color: #2d2d2d;
    }

    .grid-ingredient {
      font-size: 13px;
      line-height: 1.4;
      margin-bottom: 9px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(4, minmax(95px, 1fr));
      place-items: center;
      margin: 9px 0 10px;

      .grid-value {
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 3px;
        color: #2d2d2d;
      }

      .grid-title {
        font-size: 10px;
        font-weight: 300;
      }
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 6px 0px 0px 6px;
  }

  .two {
    padding: 10px;
    overflow-y: scroll;
    height: 530px;

    h4 {
      color: #333;
      margin-bottom: 15px;
    }

    .group {
      border-bottom: 1px solid #efecec;

      .border {
        border: 1px solid #c7eaa6;
        height: 28px;
        width: 28px;

        &:hover {
          background-color: #efecec;
        }

        &:active {
          transform: scale(0.92);
        }
      }

      .value {
        border: 1px solid #c7eaa6;
        height: 28px;
        width: 28px;
        border-left-color: transparent;
        border-right-color: transparent;
      }

      .header {
        background: #eaeaea;
        padding: 4px 10px;
        margin-top: 9px;
        color: #2d2d2d;
        .calo {
          font-size: 15px;
          font-weight: 300;
        }

        .calo-value {
          font-size: 15px;
          font-weight: bold;
        }
      }
    }

    .type {
      background: #888;
      border-radius: 15px;
      width: fit-content;
      color: white;
      padding: 4px 5px;
      margin: 3px auto 5px;

      p {
        font-size: 12px;
      }
    }
  }

  .image-container {
    min-height: 500px;
  }

  .sub-title {
    font-size: 13px;
  }
`;

const CloseIcon = styled.button`
  position: absolute;
  right: -10px;
  top: -10px;
  background-color: red;
  border-radius: 50%;
  height: 30px;
  width: 30px;
`;

const Icon = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: #2f14b6;
  margin: 10px 0;

  p {
    font-size: 13px;
    color: white;
  }
`;

const Modal = () => {
  const { isOpen, closeModal } = useModal();
  const { selectedItem } = useSelectedItem();
  const [value, setValue] = React.useState(0);

  const handleClick = (tag) => {
    if (tag === "inc") {
      if (value >= 0) {
        setValue((prev) => prev + 1);
      }
    } else {
      if (value > 0) {
        setValue((prev) => prev - 1);
      }
    }
  };

  return (
    isOpen && (
      <Container>
        <div className="inner auto relative">
          <div className="image-container">
            <img src={eight} alt="image" />
          </div>
          <div className="two">
            <div className="group">
              <h4>{selectedItem?.title}</h4>
              <p className="sub-title">{selectedItem?.subTitle}</p>
              <div>
                <Icon className="center">
                  <p>E</p>
                </Icon>
              </div>
            </div>

            <div className="group">
              <p className="center portion">Available Portion</p>
              <div className="type flex xsm-gap auto">
                <p>Regular</p>
                <p>|</p>
                <p>$10.50</p>
              </div>
              {/*  */}
              <div className="flex center add">
                <button
                  className="border center"
                  onClick={() => handleClick("dec")}
                >
                  <IoRemoveSharp size={12} />
                </button>
                <div className="value center">{value}</div>
                <button
                  className="border center"
                  onClick={() => handleClick("inc")}
                >
                  <IoAddSharp size={12} />
                </button>
              </div>

              {/*  */}
              <div className="header flex justify-between">
                <p>TOTAL CALORIES</p>
                <div className="flex xsm-gap ai-center">
                  <FaFire />
                  <p className="calo-value">130</p>
                  <p className="calo">Calories</p>
                </div>
              </div>

              {/*  */}

              <div className="grid">
                <div>
                  <div className="grid-value text-center">4.00gr</div>
                  <div className="grid-title text-center">TOTAL PROTEIN</div>
                </div>
                <div>
                  <div className="grid-value text-center">23.00gr</div>
                  <div className="grid-title text-center">
                    TOTAL CARBOHYDRATES
                  </div>
                </div>
                <div>
                  <div className="grid-value text-center">8.00gr</div>
                  <div className="grid-title text-center">TOTAL FAT</div>
                </div>
                <div>
                  <div className="grid-value text-center">3.00gr</div>
                  <div className="grid-title text-center">DIETARY FIBER</div>
                </div>
              </div>
              <div className="grid">
                <div>
                  <div className="grid-value text-center">5.00gr</div>
                  <div className="grid-title text-center">SATURATED FAT</div>
                </div>
                <div>
                  <div className="grid-value text-center">25.00gr</div>
                  <div className="grid-title text-center">CHOLESTEROL</div>
                </div>
                <div>
                  <div className="grid-value text-center">160.00gr</div>
                  <div className="grid-title text-center">SODIUM</div>
                </div>
                <div>
                  <div className="grid-value text-center">11.00gr</div>
                  <div className="grid-title text-center">TOTAL SUGARS</div>
                </div>
              </div>
              <div className="grid">
                <div>
                  <div className="grid-value text-center">11.00gr</div>
                  <div className="grid-title text-center">INCLUDED SUGARS</div>
                </div>
              </div>
            </div>

            <div className="group">
              <p className="ingredient">Ingredients:</p>
              <p className="grid-ingredient">
                Lactation Cookies (brewers yeast, brown sugar, butter
                (unsalted), chocolate chips, cinnamon, fenugreek, salt, stevia,
                vanilla extract, egg whole shell, BAKING SODA, Wheat Flour,
                GROUND FLAX SEED, OLD FASHIONED OATS)
              </p>
              <p className="ingredient">Allergens:</p>
              <p className="grid-ingredient">Wheat (Gluten), Dairy (Lactose)</p>
            </div>
            <p className="ingredient">Heating Instructions</p>
          </div>
          <CloseIcon className="center" onClick={closeModal}>
            <MdClose size={15} color="white" />
          </CloseIcon>
        </div>
      </Container>
    )
  );
};

export default Modal;
