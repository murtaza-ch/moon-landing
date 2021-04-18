import styled from "styled-components";
import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  background: transparent;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 1.2rem;
  top: 0;
  @media screen and (max-width: 960px) {
    height: 80px;
  }
`;

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 80px;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  @media screen and (max-width: 960px) {
    margin-top: 74px;
  }
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 40px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100vh;
    width: 32%;
    padding-right: 40px;
    top: -16px;
    left: ${({ click }) => (click ? 0 : "-120%")};
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #ffca00;
    transition: all 0.6s ease-in-out;
    transform: translateY(-1px);
  }
  @media screen and (max-width: 960px) {
    &:hover {
      border: none;
      transition: none;
      transform: none;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  font-family: "Space Grotesk", sans-serif;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 80%;
  font-style: normal;
  font-size: 1.4rem;
  line-height: 20px;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    display: table;
    &:hover {
      color: #ffca00;
      transition: all 0.3s ease;
      transform: none;
    }
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
