import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className="nav-col">
      <NavLink className="logo" to={"/"}>
        {/* <img src="/Logo.png" alt="logo" /> */}
        <img src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?t=st=1713338815~exp=1713342415~hmac=6aa3618e368d7400d4d2bf56989101e557a7a0c70a561517fd1d20cec7f3e24e&w=740" />
      </NavLink>
    </div>
  );
};

export default Logo;
