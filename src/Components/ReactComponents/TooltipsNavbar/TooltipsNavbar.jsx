import "./toolTipsNavbar.css";

function TooltipsNavbar() {
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
  ];

  return (
    <>
      <section className="tooltips_navbar_container">
        <nav className="tooltips_navbar">
          <ul>
            {iconsArray.map((element, index) => {
              return (
                <li className="tooltips_navbar_selected" key={index}>
                  <a href="#">
                    <span className="tooltips_navbar_icons">
                      {element.icon}
                    </span>
                    <span className="tooltips_navbar_text disabled-hover">
                      {element.category}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </>
  );
}

export default TooltipsNavbar;
