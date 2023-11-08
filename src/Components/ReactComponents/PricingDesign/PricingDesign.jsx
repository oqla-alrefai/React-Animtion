import { useState } from "react";
import "./pricingDesign.css";

function PricingDesign() {
  let [selectedPrice, setSelectedPrice] = useState(-1);

  return (
    <section className="pricing_design_container">
      <h2>Pricing Section Design</h2>
      <div className="pricing_design">
        <div
          className="pricing_design_cont"
          id={selectedPrice == 0 ? "pricing_design_checklist" : ""}
        >
          <div className="pricing_design_box basic_pricing">
            <div className="pricing_design_price">
              <span>$10</span>
            </div>
            <h2>BASIC</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="pricing_design_checklist">
            <ul>
              <li>
                <i className="ri-check-line checked_green"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li>
                <i className="ri-check-line checked_green"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li>
                <i className="ri-close-line checked_red"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li>
                <i className="ri-close-line checked_red"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li>
                <i className="ri-close-line checked_red"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
            </ul>
          </div>
          <button
            className="basic_price_button"
            onClick={() => setSelectedPrice(0)}
          >
            ORDER NOW
          </button>
        </div>
        <div
          className="pricing_design_cont"
          id={selectedPrice == 1 ? "pricing_design_checklist" : ""}
        >
          <div className="pricing_design_box standard_pricing">
            <div className="pricing_design_price">
              <span>$49</span>
            </div>
            <h2>STANDARD</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="pricing_design_checklist">
            <ul>
              <li>
                <i className="ri-check-line checked_green"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li>
                <i className="ri-check-line checked_green"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li>
                <i className="ri-check-line checked_green"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li>
                <i className="ri-close-line checked_red"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li>
                <i className="ri-close-line checked_red"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
            </ul>
          </div>
          <button
            className="standard_price_button"
            onClick={() => setSelectedPrice(1)}
          >
            ORDER NOW
          </button>
        </div>
        <div
          className="pricing_design_cont"
          id={selectedPrice == 2 ? "pricing_design_checklist" : ""}
        >
          <div className="pricing_design_box premium_pricing">
            <div className="pricing_design_price">
              <span>$99</span>
            </div>
            <h2>PREMIUM</h2>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div className="pricing_design_checklist">
            <ul>
              <li>
                <i className="ri-check-line checked_green"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li>
                <i className="ri-check-line checked_green"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li>
                <i className="ri-check-line checked_green"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li>
                <i className="ri-check-line checked_green"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
              <li>
                <i className="ri-check-line checked_green"></i>
                <span>Lorem ipsum dolor sit amet</span>
              </li>
            </ul>
          </div>
          <button
            className="premium_price_button"
            onClick={() => setSelectedPrice(2)}
          >
            ORDER NOW
          </button>
        </div>
      </div>
    </section>
  );
}

export default PricingDesign;
