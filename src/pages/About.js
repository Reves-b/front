import React from "react";
import Jumbotron from "../Components/cards/Jumbotron";
import AboutUs from "../Components/about/AboutUs";
import BestSellers from "../Components/home/BestSellers";
import { Image } from 'antd';
import laptop from "../images/laptop.png";

const Home = () => {

  

  return (
    <>
      <div  
       
       className="jumbotron text-danger h1 font-weight-bold text-center"
           >
        About Us
      </div>
     

      < AboutUs/>

      
      <br />
      <br />
    </>
  );
};

export default Home;
