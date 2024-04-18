import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import About from "./pages/About";
import Service from "./pages/Service";
import Case from "./pages/Case";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Review from "./pages/Review";
import Home from "./pages/Home";
import Aboutdetails from "./pages/Aboutdetails";
import ServiceDetails from "./pages/ServiceDetails";

const App = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/case" element={<Case />} />
        <Route path="/team" element={<Team />} />
        <Route path="/review" element={<Review />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutdetails" element={<Aboutdetails />} />
        <Route path="/service/:id" element={<ServiceDetails/>} />


      </Routes>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
