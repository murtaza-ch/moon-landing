import styled from "styled-components";
import money from "../../assets/money.svg";
import moneyLight from "../../assets/moneyLight.svg";
import lockLight from "../../assets/lockLight.svg";
import lock from "../../assets/lock.svg";
import headphone from "../../assets/headphone.svg";
import headphoneLight from "../../assets/headphoneLight.svg";
import withReveal from "react-reveal/withReveal";
import { Slide } from "react-reveal";
import Reveal from "react-reveal/Reveal";
import Zoom from "react-reveal/Zoom";

export const CardsContainer = withReveal(
  styled.div`
    margin: 6rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    @media screen and (max-width: 960px) {
      flex-wrap: nowrap;
      flex-direction: column;
    }
  `,
  <Zoom left />
);

export const Card = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background: #383b51;
  backdrop-filter: blur(20px);
  border-radius: 8px;
  width: calc(100% / 3);
  min-height: 296px;
  @media screen and (max-width: 960px) {
    width: 70%;
  }
  @media screen and (max-width: 760px) {
    width: 85%;
  }
`;

export const IconContainer = styled.div`
  background: #474b67;
  color: red;
  border-radius: 50%;
  padding: 1.5rem;
  &:hover {
    background: #ffca00;
    transition: all 0.3s ease-in;
    cursor: pointer;
    color: #ffca00;
  }
`;

export const MeneyIcon = styled.div`
  padding: 1.5rem;
  width: inherit;
  height: inherit;
  background: url(${moneyLight}) no-repeat center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  &:hover {
    background: url(${money}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;

export const LockIcon = styled.div`
  padding: 1.5rem;
  width: inherit;
  height: inherit;
  background: url(${lockLight}) no-repeat center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  &:hover {
    background: url(${lock}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;

export const HeadIcon = styled.div`
  padding: 1.5rem;
  width: inherit;
  height: inherit;
  background: url(${headphoneLight}) no-repeat center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  &:hover {
    background: url(${headphone}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;

export const Heading = styled.h3`
  font-family: "Dela Gothic One";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.1rem;
  color: #f2f2f2;
  &:hover {
    color: #ffca00;
    transition: all 0.3s ease-in;
  }
`;

export const Text = styled.p`
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #e0e0e0;
`;
