import { useState } from "react";
import "./navDrawer.css";

function NavDrawer() {
  let iconsArray = [
    {
      category: "Home",
      icon: <i class="ri-home-2-line"></i>,
    },
    {
      category: "Profile",
      icon: <i class="ri-user-3-line"></i>,
    },
    {
      category: "Massages",
      icon: <i class="ri-chat-3-line"></i>,
    },
    {
      category: "Help",
      icon: <i class="ri-question-line"></i>,
    },
    {
      category: "Settings",
      icon: <i class="ri-settings-4-line"></i>,
    },
    {
      category: "Password",
      icon: <i class="ri-lock-line"></i>,
    },
    {
      category: "SignOut",
      icon: <i class="ri-logout-circle-line"></i>,
    },
  ];

  let [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <>
      <section
        className="nav_drawer_container"
        style={{ "--nav_drawer_width": toggleDrawer ? "250px" : "80px" }}
      >
        <h2>Nav Drawer</h2>
        <div className="nav_drawer">
          <ul>
            {iconsArray.map((element, index) => {
              return (
                <li
                  className="nav_drawer_selected"
                  key={index}
                  onClick={() => handleClick(index)}
                >
                  <a>
                    <span className="nav_drawer_icons">{element.icon}</span>
                    <span className="nav_drawer_text">{element.category}</span>
                  </a>
                </li>
              );
            })}
          </ul>
          <div
            className={`nav_drawer_indicator apin_drwa_button${toggleDrawer}`}
            onClick={() => setToggleDrawer(!toggleDrawer)}
          >
            <i class="ri-arrow-left-s-line"></i>
          </div>
        </div>
      </section>
    </>
  );
}

export default NavDrawer;
