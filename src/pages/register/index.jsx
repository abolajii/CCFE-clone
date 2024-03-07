import Calendar from "./components/Calendar";
import { Link } from "react-router-dom";
import React from "react";
import { TiArrowLeft } from "react-icons/ti";
import bg from "../../assets/img_files/227.jpg";
import styled from "styled-components";

const Container = styled.div`
  a {
    font-size: 15px;
    color: #8dd444;
    text-decoration: underline;
  }
  .terms {
    margin: 20px 0;

    p {
      color: #616060;

      font-size: 14px;
      line-height: 1.5;
    }
  }

  .register-title {
    color: #2d2d2d;
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .form-container {
    width: 450px;
    padding-top: 50px;
    height: 100vh;

    overflow-y: scroll;
  }

  form {
    border: 1px solid #eeeeee;
    padding: 30px;
    border-radius: 3px;

    label {
      color: #2d2d2d;
      font-size: 12px;
      margin: 3px 0;
    }

    .input-container {
      border: 1px solid #eeeeee;
      border-radius: 2px;
      margin-bottom: 10px;

      input {
        width: 100%;
        padding: 9px 9px;
      }
      &:focus-within {
        border: 1px solid #8dd444;
      }
    }
  }

  button {
    width: 100%;
    background-color: #8dd444;
    margin: 30px 0;
    padding: 12px 10px;
    color: #fff;
    font-size: 15px;
    border-radius: 2px;
  }
`;

const BackgroundImage = styled.div`
  height: 100vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Register = () => {
  const [date, setDate] = React.useState(new Date());
  const [selectedDate, setSelectedDate] = React.useState(new Date().getDate());
  const [showModal, setShowModal] = React.useState(false);

  return (
    <Container>
      <div className="flex">
        <div className="flex-1">
          <BackgroundImage>
            <img src={bg} />
          </BackgroundImage>
        </div>
        <div className="flex-1">
          <div className="form-container auto">
            <div className="flex jc-end ai-center">
              <TiArrowLeft size={18} color="#8dd444" />
              <Link to={"/"}>Back to Homepage</Link>
            </div>
            <p className="register-title">Sign Up to Clean Creations</p>

            {/* FORM */}
            <form>
              <div className="flex flex-col xsm-gap">
                <label>First Name *</label>
                <div className="input-container">
                  <input />
                </div>
              </div>
              <div className="flex flex-col xsm-gap">
                <label>Last Name *</label>
                <div className="input-container">
                  <input />
                </div>
              </div>
              <div className="flex flex-col xsm-gap">
                <label>Email *</label>
                <div className="input-container">
                  <input />
                </div>
              </div>
              <div className="flex flex-col xsm-gap">
                <label>Phone *</label>
                <div className="input-container">
                  <input />
                </div>
              </div>
              <div className="flex flex-col xsm-gap relative">
                <label>Birthday *</label>
                <div className="input-container">
                  <input onFocus={() => setShowModal(true)} value={showModal} />
                </div>
                {showModal && (
                  <Calendar
                    setDate={setDate}
                    date={date}
                    close={() => setShowModal(false)}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                  />
                )}
              </div>
              <div className="flex flex-col xsm-gap">
                <label>Password *</label>
                <div className="input-container">
                  <input />
                </div>
              </div>
              <div className="flex flex-col xsm-gap">
                <label>Confirm Password *</label>
                <div className="input-container">
                  <input />
                </div>
              </div>
            </form>

            {/* TERMS */}
            <div className="terms">
              <div className="flex sm-gap">
                <div>
                  <input type="checkbox" name="" id="" />
                </div>
                <p>
                  I agree to receiving periodic messages sent to my phone for
                  alerts and notifications. Message and data rates may apply.
                </p>
              </div>
              <div className="flex sm-gap">
                <div>
                  <input type="checkbox" name="" id="" />
                </div>
                <p>
                  I agree to receiving periodic messages sent to my email for
                  alerts and notifications.
                </p>
              </div>
              <div className="flex sm-gap ai-center">
                <div>
                  <input type="checkbox" name="" id="" />
                </div>
                <p>I have read and agree to the Terms & Conditions. *</p>
              </div>
            </div>

            <button>Register</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
