import "./stairLoader.css";

function StairLoader() {
  return (
    <>
      <section className="stairLoaderWorld">
        <h2>Stairs Loader</h2>
        <div className="StairsContainer">
          <div className="stairColumn" style={{ "--i": 1 }}></div>
          <div className="stairColumn" style={{ "--i": 2 }}></div>
          <div className="stairColumn" style={{ "--i": 3 }}></div>
          <div className="stairColumn" style={{ "--i": 4 }}></div>
          <div className="stairColumn" style={{ "--i": 5 }}></div>
          <div className="rolling_ball"></div>
        </div>
      </section>
    </>
  );
}

export default StairLoader;
