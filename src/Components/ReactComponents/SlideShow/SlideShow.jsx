import "./slideShow.css";
import Aurore_grape from "../../../assets/slideShow/Aurore_grape.png";
import banana_berry from "../../../assets/slideShow/banana_berry.png";
import chili_mongo from "../../../assets/slideShow/chili_mongo.png";

function SlideShow() {
  let slides = [
    {
      name: "CHILI MANGO",
      image: chili_mongo,
      price: 23,
      destination: "#",
    },
    {
      name: "BANANA BERRY",
      image: banana_berry,
      price: 13,
      destination: "#",
    },
    {
      name: "AURORE GRAPE",
      image: Aurore_grape,
      price: 12,
      destination: "#",
      max_price: 35,
    },
  ];

  return (
    <section className="slideShow_container">
      <div className="slideShow_slides">
        {slides.map((element, idx) => {
          return (
            <div
              className="slide"
              style={{ "--slideShow_index": idx }}
              key={idx}
            >
              <div className="image_container">
                <img src={element.image} alt={element.name} />
              </div>
              <div className="slide_show_text">
                <h3>{element.name}</h3>
                <div className="slide_show_price">
                  <span>{element.price}</span>$
                </div>
                <button>
                  <a href={element.destination}>Order Now</a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SlideShow;
