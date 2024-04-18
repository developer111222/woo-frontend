import React from "react";
import { NavLink } from "react-router-dom";

export const FootMid = () => {
  return (
    <>
      <div className="foot-left-row foot">
        <div className="foot-left-col">
          <h3>Customer Policies</h3>
          <ul className="foot-list">
            <li>
              <NavLink to={"/"}>About Us</NavLink>
            </li>
        
            <li>
              <NavLink to={""}>
                Terms and Conditions
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Privacy Policy</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
