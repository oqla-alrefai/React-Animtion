import "./looopia.css";

function Looopia() {
  return (
    <>
      <section className="looopiaSection">
        <section className="loopia_loader">
          <div style={{ "--size": 8, "--i": 1 }}></div>
          <div style={{ "--size": 6, "--i": 2 }}></div>
          <div style={{ "--size": 4, "--i": 3 }}></div>
          <div style={{ "--size": 2, "--i": 4 }}></div>
        </section>
      </section>
    </>
  );
}

export default Looopia;
