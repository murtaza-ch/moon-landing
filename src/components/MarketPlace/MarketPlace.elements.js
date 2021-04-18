import styled from "styled-components";

export const MarketPlaceContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 8rem;
  margin-bottom: 6rem;
`;

export const P = styled.span`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  color: #eff0f7;
  @media screen and (max-width: 660px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const H1 = styled.h1`
  font-family: "Dela Gothic One";
  font-style: normal;
  font-weight: normal;
  font-size: 52px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffca00;
  &:hover {
    color: #eff0f7;
    transition: all 0.3s ease-in;
  }
  @media screen and (max-width: 960px) {
    font-size: 42px;
    line-height: 50px;
  }
  @media screen and (max-width: 660px) {
    font-size: 32px;
    line-height: 30px;
  }
`;
