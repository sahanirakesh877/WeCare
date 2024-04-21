import React from 'react'
import Banner from './../components/Banner';
import CardShow from './../components/CardShow';
import About from './About';
import Service from './Service';
import Case from './Case';
import Team from './Team';
import Blog from './Blog';
import Review from './Review';
import { Helmet } from 'react-helmet';


const Home = () => {
  return (
    <>
         <Helmet titleTemplate="We Care" />
        

      <Banner/>
      <CardShow/>
      <About/>
      <Service/>
      <Case/>
      <Team/>
      <Review/>
      <Blog/>
    </>
  )
}

export default Home
