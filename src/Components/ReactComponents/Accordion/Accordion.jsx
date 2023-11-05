import "./accordion.css";
import { useEffect, useState } from "react";

function Accordion() {
  let [previousSelected, setPreviousSelected] = useState(0);

  let accordions = [
    {
      title: "Organic drinks contain more antioxidants",
      description:
        "There are many substances that can act as antioxidants; chief among them are vitamins A and C, as well as beta-carotene and manganese. A lack of antioxidant-rich foods can lead to a greater risk of atherosclerosis.",
    },
    {
      title: "Organic drinks are better for the environment",
      description:
        "While you’re helping yourself be as healthy as can be, how about helping the environment and your fellow humans? Organic farming practices help conserve water and improve soil quality. Given the droughts we see occurring every year and the dire reports from environmental experts, these are no small reasons to go organic.",
    },
    {
      title: "They're higher in nutrients",
      description:
        "Along with fewer pesticides, this is probably the No. 1 reason folks decide to eat organic. Studies have shown that organic drinks are often higher in vitamin C, iron, magnesium, and phosphorous than their non-organic counterparts.",
    },
  ];


  useEffect(() => {
    let accordionItems = document.getElementsByClassName("accordion_items");
    accordionItems[0].setAttribute("id", "selected_item");
  }, []);

  function changeSelected(idx) {
    let accordionItems = document.getElementsByClassName("accordion_items");
    if (idx == previousSelected) {
      accordionItems[previousSelected].removeAttribute("id");
      setPreviousSelected(-1);
      return;
    }
    if (previousSelected != -1) {
      accordionItems[previousSelected].removeAttribute("id");
    }
    accordionItems[idx].setAttribute("id", "selected_item");
    setPreviousSelected(idx);
  }

  return (
    <section className="accordion_container">
        <div className="accordion_content">
          <h3>Accordion Comp.</h3>
          {accordions.map((element, idx) => {
            return (
              <div
                className="accordion_items"
                key={idx}
                onClick={() => changeSelected(idx)}
              >
                <div className="accordion_title">
                  <i className="ri-arrow-down-s-line"></i>
                  <span>{element.title}</span>
                </div>
                <div className="accordion_description">
                  <p>{element.description}</p>
                </div>
              </div>
            );
          })}
        </div>
    </section>
  );
}

export default Accordion;
