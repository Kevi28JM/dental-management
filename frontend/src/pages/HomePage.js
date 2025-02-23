import React from 'react';
import "../styles/HomePage.css";  //   for styling
import NavBar from "../components/NavBar"; // Import NavBar
 

 
const HomePage = () => {
    return (
      <><NavBar></NavBar>
      <div className="home-page">
        <h1>Welcome to Family Dental Surgery</h1>
        <p>Your smile, our priority!</p>
      </div></>
    );
  };

export default HomePage;
