import "./App.css";
import 'swiper/css/bundle';

import { Loaders, Movements, ReactComponents } from "./views";

function App() {
  return (
    <>
      <div className="loaders_container">
        <Loaders />
      </div>
      <div className="loaders_container">
        <Movements />
      </div>
      <div className="loaders_container">
        <ReactComponents />
      </div>
      <span>More is Coming . . .</span>
    </>
  );
}

export default App;
