import { Link } from "react-router-dom";
import bg from "../../assets/img_files/227.jpg";
import styled from "styled-components";

const Container = styled.div``;

const BackgroundImage = styled.div`
  height: 100vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Login = () => {
  return (
    <Container>
      <div className="flex">
        <div className="flex-1">
          <BackgroundImage>
            <img src={bg} />
          </BackgroundImage>
        </div>
        <div className="flex-1">
          <Link to={"/"}>Back to Homepage</Link>
        </div>
      </div>
    </Container>
  );
};

export default Login;
