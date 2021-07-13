import { UpCircleOutlined } from "@ant-design/icons";
import React from "react";
import CardImage from "../components/CardImage";
import CardOne from "../components/CardOne";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroCard from "../components/HeroCard";
import { Link } from "react-scroll";
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
        <div className="flex justify-end md:pr-6 pb-6">
          <Link to="home" spy={true} smooth={true}>
            <p className="px-6 rounded-md text-4xl cursor-pointer text-gray-500 animate-pulse">
              <UpCircleOutlined />
            </p>
          </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
