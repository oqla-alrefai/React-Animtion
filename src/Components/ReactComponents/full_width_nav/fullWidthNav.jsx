import { useState, useEffect } from "react";
import "./full_width_nav.css";

function FullWidthNav() {
  let [prevIndicator, setPrevIndicator] = useState(0);
  let listItems = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Services",
    },
    {
      name: "Portfolio",
    },
    {
      name: "Team",
    },
    {
      name: "Contact",
    },
  ];

  
  useEffect(() => {
    return () => {
      let listItems = document.getElementsByClassName("full_width_list_text");
      listItems[0].id = "full_width_nav_active";
    };
  }, []);

  function handleClick(index) {
    let texts = document.getElementsByClassName("full_width_list_text");
    if (index == prevIndicator) return;
    texts[prevIndicator].removeAttribute("id");
    setPrevIndicator(index);
    texts[index].id = "full_width_nav_active";
  }

  return (
    <>
      <section
        className="full_width_nav_container"
        style={{ "--full_width_index": prevIndicator }}
      >
        <nav className="full_width_nav">
          <span className="full_width_nav_logo">Logo</span>
          <ul>
            {listItems.map((element, index) => {
              return (
                <li onClick={() => handleClick(index)} key={index}>
                  <a
                    className="full_width_list_text"
                  >
                    {element.name}
                  </a>
                </li>
              );
            })}
            <div className="full_width_nav_indicator" />
          </ul>
        </nav>
      </section>
    </>
  );
}

export default FullWidthNav;
