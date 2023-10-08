import { useState } from "react";
import "./looopia.css";
import { green } from "@mui/material/colors";

function Looopia() {
  let initialState = {
    background_color: "#091684",
    colorOne: "#3498db",
    colorTwo: "#0f2231",
    colorThree: "#b16a47",
    rotation_speed: 0.4,
  };

  let [state, setState] = useState(initialState);
  let [flipInside, setFlipInside] = useState(false);

  function handleChange(event) {
    event.preventDefault();

    const { name, value } = event.target;
    // console.log(value);
    setState((prevState) => ({
      ...prevState,
      [name]: `${value}`,
    }));
    console.log(state);
  }

  function handleReset() {
    setState(initialState);
    setFlipInside(false);
  }

  function toggleFlip(event) {
    event.preventDefault();

    setFlipInside(!flipInside);
  }
  return (
    <>
      <section
        className="looopiaSection"
        style={{
          "--loopia_background_color": state.background_color,
          "--colorOne": state.colorOne,
          "--colorTwo": state.colorTwo,
          "--colorThree": state.colorThree,
          "--rotation_speed": state.rotation_speed,
        }}
      >
        <section className="loopia_loader">
          {!flipInside ? <div style={{ "--size": 8, "--i": 1 }}></div> : <></>}
          <div style={{ "--size": 6, "--i": 2 }}></div>
          <div style={{ "--size": 4, "--i": 3 }}></div>
          {flipInside ? <div style={{ "--size": 2, "--i": 4 }}></div> : <></>}
        </section>
      </section>
      <form>
        <div>
          <label htmlFor="background_color">Background Color:</label>
          <input
            type="color"
            name="background_color"
            defaultValue={state.background_color}
            onChange={handleChange}
          />
          <label htmlFor="flipInside">Flip Inside</label>
          <button
            name="flipInside"
            onClick={toggleFlip}
            className="flipButtontoggle"
            value={!state.flipInside}
            style={{ minWidth: "90px", color: flipInside ? "green" : "red" }}
          >
            {flipInside ? "True" : "False"}
          </button>
        </div>
        <label htmlFor="colorOne">Color #1</label>
        <input
          type="color"
          defaultValue={state.colorOne}
          name="colorOne"
          onChange={handleChange}
        />

        <label htmlFor="colorTwo">Color #2</label>
        <input
          type="color"
          name="colorTwo"
          defaultValue={state.colorTwo}
          onChange={handleChange}
        />

        <label htmlFor="colorThree">Color #3</label>
        <input
          type="color"
          name="colorThree"
          defaultValue={state.colorThree}
          onChange={handleChange}
        />
        <div>
          <label>Speed:</label>
          <button
            type="button"
            name="rotation_speed"
            value={0.4}
            onClick={handleChange}
            className={state.rotation_speed === 0.4 ? "selected" : ""}
          >
            Slow
          </button>
          <button
            type="button"
            name="rotation_speed"
            value={0.2}
            onClick={handleChange}
            className={state.rotation_speed === 0.2 ? "selected" : ""}
          >
            Normal
          </button>
          <button
            type="button"
            name="rotation_speed"
            value={0.09}
            onClick={handleChange}
            className={state.rotation_speed === 0.09 ? "selected" : ""}
          >
            Fast
          </button>
        </div>
        <button
          type="button"
          name="reset_button"
          onClick={handleReset}
          className="resetButton"
        >
          Reset
        </button>
      </form>
    </>
  );
}

export default Looopia;
