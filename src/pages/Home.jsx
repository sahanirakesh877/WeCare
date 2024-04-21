import React, { useEffect } from "react";
import Banner from "./../components/Banner";
import CardShow from "./../components/CardShow";
import About from "./About";
import Service from "./Service";
import Case from "./Case";
import Team from "./Team";
import Blog from "./Blog";
import Review from "./Review";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const Home = () => {
  const pathname=useLocation()
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[pathname])
  return (
    <>
      <Helmet titleTemplate="We Care" />
      <Banner />
      <CardShow />
      <About />
      <Service />
      <Case />
      <Team />
      <Review />
      <Blog />
    </>
  );
};

export default Home;
