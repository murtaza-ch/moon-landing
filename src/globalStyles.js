import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing:border-box;
  margin:0;
  padding:0;
  background:red
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (max-width: 991px) {
    padding-right: 10px;
    padding-left: 10px;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#FFCA00" : "$0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 68px" : "16px 28px")};
  color: #242635;
  font-style: normal;
  min-width: ${({ lg }) => (lg ? "248px" : "216px")};
  font-family: "Space Grotesk", sans-serif;
  font-weight: bold;
  font-size: ${({ fontBig }) => (fontBig ? "22px" : "1.2rem")};
  outline: none;
  height: ${({ formBtn }) => (formBtn ? "68px" : "")};
  border: ${({ outline }) =>
    outline ? "1px solid #FFFFFF" : "1px solid #FFCA00"};
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-out;
    background: transparent;
    border: 1px solid #ffffff;
    color: #ffffff;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
