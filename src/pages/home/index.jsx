import Container from "../../components/Container";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Mission from "./components/Mission";
import OnlineMenu from "./components/OnlineMenu";
import Plans from "./components/Plans";
import React from "react";
import Review from "./components/Review";

const Home = () => {
  return (
    <Container>
      <Hero />
      <HowItWorks />
      <OnlineMenu />
      <Plans />
      {/* <Review /> */}
      <Mission />
      <GetStarted />
      <Footer />
    </Container>
  );
};

export default Home;
