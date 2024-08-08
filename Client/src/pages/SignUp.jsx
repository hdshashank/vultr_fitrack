import { useState } from "react";
import * as mui from "@mui/material";
import logo from "../assets/logo.png";
import Slider from "../components/Slider";
import { useSignup } from "../hooks/useSignup";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(name, email, password);
  };

  return (
    <>
      <Slider />
      <div
        className="h-[450px] w-[1000px] bg-white left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4
       absolute flex items-center justify-center gap-10 rounded-lg  backdrop-blur-md"
      >
        <div className="h-[450px] w-[400px]">
          <img
            src={logo}
            alt="logo"
            style={{ height: 40, position: "relative", top: 155 }}
          />
          <h1 className="relative text-gray-950  text-2xl font-semibold top-40">
            Create a Fitrack account
          </h1>
        </div>
        <div className="h-[450px] w-[400px] flex items-center justify-center">
          <mui.FormControl sx={{ width: "50ch" }}>
            <mui.TextField
              label="Name"
              variant="outlined"
              type="text"
              sx={{ margin: 1 }}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <mui.TextField
              label="Email"
              variant="outlined"
              type="email"
              sx={{ margin: 1 }}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <mui.TextField
              label="Password"
              variant="outlined"
              type="password"
              sx={{ margin: 1 }}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <mui.Button
              variant="contained"
              sx={{ margin: 2.5, height: 42, fontSize: "18px" }}
              onClick={handleSubmit}
              disabled={loading}
            >
              Signup
            </mui.Button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="flex gap-2 relative left-[20%] ">
              <h4>Already have an account?</h4>
              <a href="/login" className="text-frenchBlue font-semibold">
                Login
              </a>
            </div>
          </mui.FormControl>
        </div>
      </div>
    </>
  );
}

export default SignUp;
