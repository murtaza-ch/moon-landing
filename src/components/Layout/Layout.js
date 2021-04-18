import React from "react";
import { LayoutContainer } from "./Layout.elements";
import { Navbar } from "../../components";

const Layout = ({ children, toggleModal }) => {
  return (
    <LayoutContainer>
      <Navbar toggleModal={toggleModal} />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
