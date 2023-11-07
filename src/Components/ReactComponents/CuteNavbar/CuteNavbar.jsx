import "./cuteNavbar.css";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { useEffect, useState } from "react";

function CuteNavbar() {
  let [prevIndicator, setPrevIndicator] = useState(0);
  let iconsArray = [
    {
      category: "Home",
      icon: HomeOutlinedIcon,
    },
    {
      category: "Profile",
      icon: PermIdentityIcon,
    },
    {
      category: "Massages",
      icon: ChatBubbleOutlineOutlinedIcon,
    },
    {
      category: "Camera",
      icon: PhotoCameraOutlinedIcon,
    },
    {
      category: "Settings",
      icon: SettingsOutlinedIcon,
    },
  ];

  useEffect(() => {
    return () => {
      let listItems = document.getElementsByClassName("cute_navbar_selected");
      listItems[0].id = "cute_navbar_active";
    };
  }, []);

  function handleClick(index) {
    let listItems = document.getElementsByClassName("cute_navbar_selected");
    if (index == prevIndicator) return;
    listItems[prevIndicator].removeAttribute("id");
    setPrevIndicator(index);
    listItems[index].id = "cute_navbar_active";
  }

  return (
    <>
      <section className="cute_navbar_container" style={{ "--i": prevIndicator }}>
        <h2>Cute NavBar</h2>
        <div className="cute_navbar">
          <ul>
            {iconsArray.map((element, index) => {
              return (
                <li
                  className="cute_navbar_selected"
                  key={index}
                  onClick={() => handleClick(index)}
                >
                  <a>
                    <element.icon className="cute_navbar_icon" />
                    <span>{element.category}</span>
                  </a>
                </li>
              );
            })}
            <div className="cute_navbar_indicator"></div>
          </ul>
        </div>
      </section>
    </>
  );
}

export default CuteNavbar;
