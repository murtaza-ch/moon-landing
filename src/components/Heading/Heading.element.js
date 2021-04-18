import styled from "styled-components";
import withReveal from "react-reveal/withReveal";
import { Slide } from "react-reveal";

export const H1 = withReveal(
  styled.span`
    font-family: "Dela Gothic One";
    font-style: normal;
    font-weight: normal;
    font-size: 72px;
    line-height: 80px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #f5f5f5;
    @media screen and (max-width: 960px) {
      font-size: 42px;
      line-height: 50px;
    }
    @media screen and (max-width: 660px) {
      font-size: 32px;
      line-height: 30px;
    }
  `,
  <Slide top />
);
