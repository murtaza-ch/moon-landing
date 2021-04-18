import styled from "styled-components";
import withReveal from "react-reveal/withReveal";
import { Slide } from "react-reveal";

export const FormSectionContainer = withReveal(
  styled.section`
    display: flex;
    padding: 6rem 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  <Slide left />
);

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2d3041;
  border: 1px solid #252838;
  box-shadow: inset 2px 2px 12px 2px #252737;
  border-radius: 4px;
  width: 628px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const MaxAction = styled.button`
  cursor: pointer;
  font-family: Space Grotesk;
  background: transparent;
  font-style: normal;
  letter-spacing: 0.75px;
  border: none;
  color: #ffca00;
  font-size: 1.6rem;
  outline: none;
  padding: 1rem 2rem;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Heading = styled.h1`
  font-family: "Dela Gothic One";
  font-style: normal;
  font-weight: normal;
  font-size: 52px;
  line-height: 50px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #f5f5f5;
  @media screen and (max-width: 960px) {
    font-size: 42px;
    line-height: 40px;
  }
  @media screen and (max-width: 660px) {
    font-size: 32px;
    line-height: 30px;
  }
`;
