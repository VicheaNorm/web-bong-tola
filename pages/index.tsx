import React from "react";
import CardImage from "../components/CardImage";
import CardOne from "../components/CardOne";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroCard from "../components/HeroCard";

const Home = () => {
  return (
    <div className="">
      <Header />

      <div className="w-screen">
        <div className="py-10">
          <CardImage />
        </div>
        <HeroCard />

        <CardOne />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
