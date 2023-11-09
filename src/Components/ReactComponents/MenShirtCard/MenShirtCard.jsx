import "./menShirtCard.css";
import red_shirt from "../../../assets/product_card/red_shirt.png";
import black_shirt from "../../../assets/product_card/black_shirt.png";
import blue_shirt from "../../../assets/product_card/blue_shirt.png";
import yellow_shirt from "../../../assets/product_card/yellow_shirt.png";

import { useState } from "react";

function MenShirtCard() {
  let [selectedColor, setSelectedColor] = useState(0);
  let shirtImages = [
    { image: red_shirt, name: "red shirt", color: "red" },
    { image: black_shirt, name: "black shirt", color: "black" },
    { image: yellow_shirt, name: "yellow shirt", color: "yellow" },
    { image: blue_shirt, name: "blue shirt", color: "blue" },
  ];

  function handleColorChange(idx) {
    console.log(idx);
    setSelectedColor(idx);
  }

  return (
    <section className="men_shirt_container">
      <h2>Men Shirts Product Card</h2>
      <div className="men_shirt">
        <div className="men_shirt_content">
          <h3>Men's T-Shirt</h3>
          <span className="men_shirt_price">
            <span className="men_shirt_currency">$</span>
            <span className="men_shirt_amount">4.99</span>
          </span>
          <div className="men_shirt_color">
            <div>COLOR</div>
            {shirtImages.map((element, idx) => {
              return (
                <button
                  onClick={() => handleColorChange(idx)}
                  key={idx}
                  className="men_shirt_color_button"
                  id={selectedColor == idx ? "selectedColorButton" : ""}
                ><img src={element.image} alt="" /></button>
              );
            })}
          </div>
          <div className="men_shirt_size">
            <div>SIZE</div>
            <button className="men_shirt_size_button">S</button>
            <button className="men_shirt_size_button">M</button>
            <button className="men_shirt_size_button">L</button>
            <button className="men_shirt_size_button">XL</button>
            <button className="men_shirt_size_button">XXL</button>
          </div>
          <button className="men_shirt_cart">ADD TO CART</button>
        </div>
        <div className="men_shirt_images">
          {shirtImages.map((element, idx) => (
            <img
            key={idx}
              src={element.image}
              alt={element.name}
              id={selectedColor == idx ? "selectedImage" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenShirtCard;
