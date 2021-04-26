import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="w-screen">
      <Header />
      <div className="w-screen h-screen"></div>
      <div className="footer-content">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
