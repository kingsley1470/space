import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">coWo</NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle={{ color: "black" }}>
            Home
          </NavLink>
          <NavLink to="/locations" activeStyle={{ color: "black" }}>
            Locations
          </NavLink>
          <NavLink to="/community" activeStyle={{ color: "black" }}>
            Community
          </NavLink>
          <NavLink to="/signin" activeStyle={{ color: "black" }}>
            Sign In
          </NavLink>
          <NavBtn>
            <NavBtnLink to="/sign-up">Sign Up</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;