import React from "react";
import "./About.css"; // Link to the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Swiggy</h1>
        <p>Delivering happiness to your doorstep, one meal at a time!</p>
      </header>

      <section className="about-content">
        <div className="about-description">
          <h2>Our Story</h2>
          <p>
            Founded with a mission to bring food to you, Swiggy has transformed
            food delivery by connecting people with their favorite restaurants.
            Whether it’s your go-to comfort food or a new cuisine to try, we’re
            here to make every meal just a tap away!
          </p>
        </div>

        <div className="about-highlights">
          <h2>Why Choose Swiggy?</h2>
          <ul>
            <li>Fast and Reliable Delivery</li>
            <li>Thousands of Restaurants to Choose From</li>
            <li>Real-Time Order Tracking</li>
            <li>Exclusive Deals and Discounts</li>
          </ul>
        </div>

        <div className="about-mission">
          <h2>Our Mission</h2>
          <p>
            At Swiggy, we’re committed to making food accessible, affordable,
            and enjoyable for everyone. Our goal is to build a seamless dining
            experience, powered by technology and our dedicated team of delivery
            partners and restaurant partners.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
