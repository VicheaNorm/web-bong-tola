import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroCard from "../components/HeroCard";

const Home = () => {
  return (
    <div className="w-screen">
      <Header />

      <div className="w-screen h-screen">
        <HeroCard />
      </div>
      <div className="footer-content">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
