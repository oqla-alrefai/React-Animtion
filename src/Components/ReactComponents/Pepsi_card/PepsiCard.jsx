import "./pepsiCard.css";
import pepsiImage from "../../../assets/pepsi.png";

function PepsiCard() {
  return (
    <>
      <section className="pepsi_card_container">
        <div className="pepsi_card">
          <div className="pepsi_text">
            <h2>PEPSI COLA</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipis icing elit.Asperi
              ores ad tempor ibus minima recus andae, ratione
            </p>
            <button>Buy Now</button>
          </div>
          <img src={pepsiImage} alt="Pepsi Image" />
        </div>
      </section>
    </>
  );
}

export default PepsiCard;
