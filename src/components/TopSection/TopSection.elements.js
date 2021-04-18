import styled from "styled-components";
import withReveal from "react-reveal/withReveal";
import { Slide } from "react-reveal";

export const TopSectionContainer = styled.section`
  display: flex;
  padding: 6rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.8rem;
`;

export const ButtonWrapper = withReveal(
  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.3rem;
    @media screen and (max-width: 960px) {
      flex-direction: column;
    }
  `,
  <Slide bottom />
);
