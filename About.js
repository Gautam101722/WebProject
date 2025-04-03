import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg"; // ✅ Importing Image
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }} 
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        At G&P Pizza Café, we believe that great pizza brings people together.
          Founded with a passion for authentic flavors and high-quality ingredients,
          G&P has quickly grown from a small local pizzeria into a beloved name in
          the food industry. Our journey began with a simple vision—to serve
          handcrafted, delicious pizzas that create unforgettable experiences for
          our customers.
          Thanks to our commitment to excellence, G&P Pizza Café has become a
          resounding success, known for its signature crust, bold flavors, and
          innovative toppings. Whether it's our classic Margherita, the indulgent
          G&P Special, or unique gourmet creations, every pizza is made with love,
          fresh ingredients, and a touch of creativity.
          But we're more than just a pizza café. At G&P, we’ve built a community—a
          place where families gather, friends celebrate, and pizza lovers always
          feel at home. With top-notch customer service, a cozy ambiance, and a
          menu that caters to all tastes, we continue to set the standard for a
          truly exceptional dining experience.
        </p>
      </div>
    </div>
  );
}

export default About;
