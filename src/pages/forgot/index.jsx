import { Link } from "react-router-dom";
import { TiArrowLeft } from "react-icons/ti";
import bg from "../../assets/img_files/227.jpg";
import styled from "styled-components";

const Container = styled.div`
  .link {
    font-size: 15px;
    color: #8dd444;
    text-decoration: underline;
  }

  a {
    text-decoration: underline;
    color: #616060;
    font-size: 14px;
  }

  .register-subtitle {
    color: #2d2d2d;
    font-size: 16px;
    margin-bottom: 30px;
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
    margin-top: 70px;
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
    margin-bottom: 20px;

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

const ForgotPassword = () => {
  return (
    <Container>
      <div className="flex">
        <div className="flex-1">
          <BackgroundImage>
            <img src={bg} />
          </BackgroundImage>
        </div>
        <div className="flex-1">
          <div className="form-container auto ">
            <div className="flex jc-end ai-center">
              <TiArrowLeft size={18} color="#8dd444" />
              <Link className="link" to={"/"}>
                Back to Homepage
              </Link>
            </div>
            <p className="register-title">Recover your password</p>

            {/* FORM */}
            <form>
              <div className="flex flex-col xsm-gap">
                <label>Username or email *</label>
                <div className="input-container">
                  <input />
                </div>
              </div>
            </form>
            <div className="flex ai-center justify-between">
              <div>
                <Link to={"/register"}>Don't have an account ?</Link>
              </div>
              <div>
                <Link to={"/login"}>Back to Login ?</Link>
              </div>
            </div>
            <button>Recover Password</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ForgotPassword;
