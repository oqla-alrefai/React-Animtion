import {
  SpectrumLoader,
  LooopiaLoader,
  JumpSlider,
  StairLoader,
} from "../../Components";

function Loaders() {
  return (
    <>
      <section className="all_loaders_container">
        <SpectrumLoader className='test' />
        <LooopiaLoader />
        <JumpSlider />
        <StairLoader />
      </section>
    </>
  );
}

export default Loaders;
