import "./spectrum.css";

function SpectrumLoader() {
  return (
    <section
      style={{ "--spectrum_duration": "10s" }}
      className="spectrumSection"
    >
      <div className="loader">
        {Array.from({ length: 20 }, (_, index) => {
          return <span key={index} style={{ "--i": index + 1 }}></span>;
        })}
      </div>
    </section>
  );
}

export default SpectrumLoader;
