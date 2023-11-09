import { useState } from "react";
import "./buttonSwap.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ButtonSwap() {
  let [animation, setAnimation] = useState("rotate_and_swap_left");

  function handleClick() {
    animation == "rotate_and_swap_left"
      ? setAnimation("rotate_and_swap_right")
      : setAnimation("rotate_and_swap_left");
  }
  return (
    <>
      <section className="button_swap_container">
        <h2>Switch Button</h2>
        <div className="button_track">
          <div className={`button_ball ${animation}`} onClick={handleClick}>
            <ArrowForwardIcon className="button_arrow"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default ButtonSwap;
