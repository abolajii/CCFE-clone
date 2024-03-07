import Calendar from "./components/Calendar";
import React from "react";
import bg from "../../assets/img_files/227.jpg";
import styled from "styled-components";

const Container = styled.div`
  .register-title {
    color: #2d2d2d;
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 28px;
  }

  .form-container {
    width: 550px;
    padding-top: 50px;
    /* height: 100vh; */

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

  const formatSelectedDate = () => {
    const formattedDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      selectedDate
    ).toLocaleString("default", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return formattedDate;
  };
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
            <p className="register-title">Sign Up to Clean creations</p>
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
                  <input
                    onFocus={() => setShowModal(true)}
                    // onBlur={() => setShowModal(false)}
                    value={formatSelectedDate()}
                  />
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
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
