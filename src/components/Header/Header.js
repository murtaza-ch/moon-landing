import React, { useState } from "react";
import logo from "../../assets/Logo.svg";
import {
  Item,
  Logo,
  Nav,
  Line,
  NavLink,
  Menu,
  NavIcon,
  Overlay,
  OverlayMenu,
} from "./Header.elements";

const Header = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Nav>
        <Logo src={logo} alt="Logo" />

        <Menu>
          <Item>
            <NavLink to="">Instagram</NavLink>
          </Item>
          <Item>
            <NavLink>Behance</NavLink>
          </Item>
          <Item>
            <NavLink>Github</NavLink>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <NavLink>Instagram</NavLink>
          </Item>
          <Item>
            <NavLink>Behance</NavLink>
          </Item>
          <Item>
            <NavLink>Github</NavLink>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
};

export default Header;
