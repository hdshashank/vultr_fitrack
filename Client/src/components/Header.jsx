import Navbar from "./Navbar";
import * as mui from "@mui/material";
import logo from "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  if (location.pathname === "/signup" || location.pathname === "/login") {
    return (
      <div className="left-[50%] top-12 -translate-x-2/4 -translate-y-2/4 absolute">
        <a href="/"><img src={logo} alt="logo" style={{ height: 35 }} /></a>
      </div>
    ); 
  }
  return (
    <div
      className={`sticky top-0 z-50 h-[65px]  flex justify-between items-center ${
        colorChange ? "  bg-white  shadow-3xl " : "text-black"
      }transition duration-500 `}
    >
      <img
        src={logo}
        alt="logo"
        style={{ height: 29, position: "relative", left: 100 }}
      />
      <Navbar />
      <ul className="right-[120px] relative">
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
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <mui.Button
            variant="contained"
            sx={{ margin: 0.75, height: 40, fontSize: "20px" }}
          >
            SignUp
          </mui.Button>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
