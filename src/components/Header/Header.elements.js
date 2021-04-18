import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  min-height: 160px;
  background: #1c2022;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Logo = styled.img`
  padding-top: -20px;
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Item = styled.li`
  height: 70px;
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid #ffca00;
    transition: all 0.6s ease-in-out;
    transform: translateY(-1px);
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLink = styled(Link)`
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
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
      transform: translateY(-100px);
    }
  }
`;

export const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
`;

export const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;
