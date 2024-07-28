import Navbar from "./Navbar";
import * as mui from "@mui/material";
import logo from "../assets/logo.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function Header() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };

  const location = useLocation();
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  if (location.pathname === "/signup" || location.pathname === "/login") {
    return (
      <div className="left-[50%] top-12 -translate-x-2/4 -translate-y-2/4 absolute">
        <a href="/">
          <img src={logo} alt="logo" style={{ height: 35 }} />
        </a>
      </div>
    );
  }
  return (
    <div
      className={`sticky top-0 z-50 h-[65px]  flex justify-between items-center ${
        colorChange ? "  bg-white  shadow-3xl " : "text-black"
      }transition duration-500 `}
    >
      <a href="/">
        <img
          src={logo}
          alt="logo"
          style={{ height: 29, position: "relative", left: 100 }}
        />
      </a>
      <Navbar />
      <ul className="right-[120px] relative">
        {user && (
          <>
            <ul className="flex justify-center items-center">
              <span className="uppercase right-2 relative text-[24px] font-semibold text-frenchBlue">
                {user?.name}{" "}
              </span>
              <mui.Button
                variant="outlined"
                sx={{
                  margin: 0.75,
                  height: 40,
                  fontSize: "20px",
                  border: 2,
                  ":hover": { color: "#1d60ae", border: 2 },
                }}
                onClick={handleClick}
              >
                Logout
              </mui.Button>
            </ul>
          </>
        )}
        {!user && (
          <>
            <mui.Button
              variant="outlined"
              sx={{
                margin: 0.75,
                height: 40,
                fontSize: "20px",
                border: 2,
                ":hover": { color: "#1d60ae", border: 2 },
              }}
              href="/login"
            >
              Login
            </mui.Button>
            <mui.Button
              variant="contained"
              sx={{ margin: 0.75, height: 40, fontSize: "20px" }}
              href="/signup"
            >
              SignUp
            </mui.Button>
          </>
        )}
      </ul>
    </div>
  );
}

export default Header;
