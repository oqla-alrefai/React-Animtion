import "./dropdownMenu.css";
import { Howl } from "howler";
import cool from "../../../../assets/sounds/cool.wav";

function DropdownMenu(props) {
  let handleBrowse = () => {
    let sound = new Howl({
      src: [cool],
    });

    sound.play();
  };

  return (
    <>
      {props.iconsArray.map((element, index) => {
        return (
          <li
            key={index}
            className={`sidebar_list_ showSidebar${props.showMenuItems}`}
            style={{ "--i": index + 1 }}
          >
            <a onClick={handleBrowse}>
              <span className="header_navbar_text">{element.category}</span>
              <span className="header_navbar_icons">{element.icon}</span>
            </a>
          </li>
        );
      })}
    </>
  );
}

export default DropdownMenu;
