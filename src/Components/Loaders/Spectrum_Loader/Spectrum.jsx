import "./spectrum.css";
import { useState } from "react";

function SpectrumLoader() {
  let initialState = {
    glowing_duration: 10,
    background_color: "#042104",
    dot_color: "#00ff0a",
    shadows_color: "#00ff0a",
    orbits_number: 2,
  };
  let [state, setState] = useState(initialState);

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;

    setState((prevState) => ({
      ...prevState,
      [name]: `${value}`,
    }));
  }

  function handleReset() {
    setState(initialState);
  }

  return (
    <>
      <div>
        <section
          style={{
            "--glowing_duration": state.glowing_duration,
            "--background_color": state.background_color,
            "--dot_color": state.dot_color,
            "--shadows_color": state.shadows_color,
            "--orbits_number": state.orbits_number,
          }}
          className="spectrumSection"
        >
          <h2>Spectrum Loader</h2>
          <div className="loader">
            {Array.from({ length: 20 }, (_, index) => {
              return <span key={index} style={{ "--i": index + 1 }}></span>;
            })}
          </div>
        </section>
        <form>
          <div>
            <label htmlFor="glowing_duration">Glowing Cycle Duration:</label>
            <input
              type="number"
              name="glowing_duration"
              defaultValue={state.glowing_duration}
              className="glowCycleInput"
              onChange={handleChange}
            />
          </div>
          <label htmlFor="background_color">Space Color</label>
          <input
            type="color"
            defaultValue={state.background_color}
            name="background_color"
            onChange={handleChange}
          />

          <label htmlFor="dot_color">Asteroid Color</label>
          <input
            type="color"
            name="dot_color"
            defaultValue={state.dot_color}
            onChange={handleChange}
          />

          <label htmlFor="shadows_color">Corona Color</label>
          <input
            type="color"
            name="shadows_color"
            defaultValue={state.shadows_color}
            onChange={handleChange}
          />
          <div>
            <label>Orbits Number:</label>
            <button
              type="button"
              name="orbits_number"
              value={0.5}
              onClick={handleChange}
              className={state.orbits_number === 0.5 ? "selected" : ""}
            >
              4
            </button>
            <button
              type="button"
              name="orbits_number"
              value={1}
              onClick={handleChange}
              className={state.orbits_number === 1 ? "selected" : ""}
            >
              2
            </button>
            <button
              type="button"
              name="orbits_number"
              value={2}
              onClick={handleChange}
              className={state.orbits_number === 2 ? "selected" : ""}
            >
              1
            </button>
          </div>
          <button
            type="button"
            name="orbits_number"
            onClick={handleReset}
            className="resetButton"
          >
            Reset
          </button>
        </form>
      </div>
    </>
  );
}

export default SpectrumLoader;
