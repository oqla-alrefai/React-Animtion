import "./cardStyle_1.css";
import CardComp from "./CardComp/CardComp";
import PI_1 from "../../../../assets/Images/PI_1.png";
import PI_2 from "../../../../assets/Images/PI_2.png";
import PI_3 from "../../../../assets/Images/PI_3.png";
import PI_4 from "../../../../assets/Images/PI_4.png";
import PI_5 from "../../../../assets/Images/PI_5.png";
import PI_6 from "../../../../assets/Images/PI_6.png";
import PI_7 from "../../../../assets/Images/PI_7.png";
import PI_8 from "../../../../assets/Images/PI_8.png";
import PI_9 from "../../../../assets/Images/PI_9.png";
import PI_10 from "../../../../assets/Images/PI_10.png";

function CardStyle_1() {
  let cards = [
    {
      source: PI_1,
      name: "Sweet Rose",
      description:
        "Voluptatibus ip, sit amet consectetur adipim dicta enim accusantium consequatur voluptatibus perferendis magnam , assumenda voluptates corrupti illumaliquid expedita, porro sit dolore culpa eos!",
    },
    {
      source: PI_7,
      name: "Jones Gail",
      description:
        "Corrupti ipsum dolor, sit  consectetur adipisicing elit. Eligendi atque cum dicta enconsequatur voluptatibus perferendis magnam fugiat, assumenda voluptates corrupti illumaliquid expedita, porro sit dolore culpa eos!",
    },
    {
      source: PI_3,
      name: "David Dell",
      description:
        "Ipsum dolor, sit amet consectetur adipisicing elit. Eligendi atque cum dicta enim accusantium  voluptatibus perferendis magnam fuginda corrupti illumaliquid expedita, porro sit dolore culpa eos!",
    },
    // {
    //   source: PI_2,
    //   name: "Jane Doe",
    //   description:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi atque cum dicta enim accusantium consequatur voluptatibus perferendis magnam fugiat, assumenda voluptates corrupti illumaliquid expedita, porro sit dolore culpa eos!",
    // },
    // {
    //   source: PI_4,
    //   name: "Manny Jah",
    //   description:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi atque cum dicta enim accusantium consequatur voluptatibus perferendis magnam fugiat, assumenda voluptates corrupti illumaliquid expedita, porro sit dolore culpa eos!",
    // },
    // {
    //   source: PI_5,
    //   name: "Anne Ortha",
    //   description:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi atque cum dicta enim accusantium consequatur voluptatibus perferendis magnam fugiat, assumenda voluptates corrupti illumaliquid expedita, porro sit dolore culpa eos!",
    // },
    // {
    //   source: PI_6,
    //   name: "Track dolei",
    //   description:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi atque cum dicta enim accusantium consequatur voluptatibus perferendis magnam fugiat, assumenda voluptates corrupti illumaliquid expedita, porro sit dolore culpa eos!",
    // },
  ];

  return (
    <>
      <section className="card_style_1_container">
        <h2>Card Style # One</h2>
        <div className="card_style_1">
          {cards.map((element, index) => {
            return(
                <CardComp element={element} key={index} />
            )
          })}
        </div>
      </section>
    </>
  );
}

export default CardStyle_1;
