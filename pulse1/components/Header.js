import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOut,
  faAmbulance,
  faAnchor,
  faSignOutAlt,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
//import Logout from "./logout";

const Header = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    if (!user) {
      const users = JSON.parse(localStorage.getItem("data"));
      //console.log(users)
      setUser(users);
    }
  }, [user]);

  const Logout = () => {
    console.log("loging out");
    localStorage.removeItem("data");
    localStorage.clear();
    window.location = "/";
  };

  return (
    <header className="p-3 mb-2 bg-primary text-white">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            style={{ fontSize: "2rem" }}
          >
            PULSE TEST
          </a>

          <div className="text-end d-flex justify-content-between">
            <div className=" mb-2 mb-lg-0 d-flex">









              {!user ? (
                <>
                  <div className="nav-item">
                    <a
                      className="nav-link px-2 text-white  mx-2"
                      href="/register"
                    >
                      Register
                    </a>
                  </div>
                  <div className="nav-item">
                    <a className="nav-link px-2 text-white mx-2" href="/login">
                      Login
                    </a>
                  </div>
                </>
                ) : (
                <div className="dropdown d-flex align-items-center grandMenu">

                    <div className="nav-item me-4 ms-4">Hi {user.name} !</div>

                  <div className="d-flex align-items-center sousMenu">
                    <div className="nav-item">
                      <a
                        className="nav-link px-2 text-white d-flex align-items-center mx-2"
                        href="/add-profile"
                      >
                        <FontAwesomeIcon
                          icon={faPlusCircle}
                          style={{ fontSize: 20, color: "black" }}
                          className="me-2"
                        />
                        Add Profile
                      </a>
                    </div>

                    <div className="nav-item">
                      <a
                        className="nav-link px-2 text-white d-flex align-items-center mx-2"
                        href="/add-library"
                      >
                        <FontAwesomeIcon
                          icon={faPlusCircle}
                          style={{ fontSize: 20, color: "black" }}
                          className="me-2"
                        />
                        Add Library
                      </a>
                    </div>

                    <div className="nav-item">
                      <a
                        className="nav-link px-2 text-white d-flex align-items-center mx-2"
                        href="/"
                      >
                        {/* <FontAwesomeIcon
                          icon={faPlusCircle}
                          style={{ fontSize: 20, color: "black" }}
                          className="me-2"
                        /> */}
                        View Profile
                      </a>
                    </div>

                    <div className="nav-item">
                      <a
                        className="nav-link px-2 text-white d-flex align-items-center mx-2"
                        href="/library"
                      >
                        {/* <FontAwesomeIcon
                          icon={faPlusCircle}
                          style={{ fontSize: 20, color: "black" }}
                          className="me-2"
                        /> */}
                        View Library
                      </a>
                    </div>
                    <div className="nav-item ms-4 d-flex align-items-center">
                      <FontAwesomeIcon
                        icon={faSignOut}
                        onClick={Logout}
                        style={{ fontSize: 30, color: "red" }}
                      />
                      <div className="ms-3">logout</div>
                    </div>

                  </div>
                  
                  {/* <div className="d-flex align-items-center">
                    <div className="nav-item ms-4 d-flex align-items-center">
                      <FontAwesomeIcon
                        icon={faSignOut}
                        onClick={Logout}
                        style={{ fontSize: 30, color: "red" }}
                      />
                      <div className="ms-3">logout</div>
                    </div>
                  </div> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
