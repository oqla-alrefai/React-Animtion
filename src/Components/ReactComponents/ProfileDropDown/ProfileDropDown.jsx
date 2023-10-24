import "./profileDropdown.css";
import dummy_logo from "../../../assets/dummy_logo.png";

function ProfileDropDown() {
  let iconsArray = [
    {
      category: "My Profile",
      icon: <i class="ri-user-3-line"></i>,
    },
    {
      category: "Edit Profile",
      icon: <i class="ri-edit-box-line"></i>,
    },
    {
      category: "Inbox",
      icon: <i class="ri-mail-line"></i>,
    },
    {
      category: "Settings",
      icon: <i class="ri-settings-4-line"></i>,
    },
    {
      category: "Help",
      icon: <i class="ri-question-line"></i>,
    },
    {
      category: "Logout",
      icon: <i class="ri-logout-box-line"></i>,
    },
  ];

  return (
    <>
      <section className="profile_dropdown_container">
        <div className="profile_dropdown">
          <img src={dummy_logo} alt="dummy_logo" />
          <div className="profile_dropdown_list">
            <div className="profile_dropdown_header">
              <h4>Someone Famous</h4>
              <h6>Website Designer</h6>
            </div>
            <nav>
              <ul>
                {iconsArray.map((element, index) => {
                  return (
                    <li key={index}>
                      <a>
                        <span className="profile_dropdown_icons">
                          {element.icon}
                        </span>
                        <span className="profile_dropdown_text">
                          {element.category}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfileDropDown;
