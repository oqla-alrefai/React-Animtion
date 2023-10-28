import "./cardComp.css";

function CardComp(props) {
  return (
    <>
      <div className="card_component" key={props.key}>
        <header>
          <div className="card_style_1_header_background"></div>
          <img src={props.element.source} alt={props.element.name} />
        </header>
        <div className="card_bottom_part">
          <h3>{props.element.name}</h3>
          <p>{props.element.description}</p>
          <button>
            <a>View More</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default CardComp;
