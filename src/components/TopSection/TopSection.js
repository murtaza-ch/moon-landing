import React from "react";
import {
  TopSectionContainer,
  TextWrapper,
  ButtonWrapper,
} from "./TopSection.elements";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import { Button } from "../../globalStyles";

const TopSection = () => {
  return (
    <TopSectionContainer>
      <Heading label="Welcome to" />
      <Heading label="Moon Landing" />
      <TextWrapper>
        <Text label="Ready for your trip to the moon? We sure are! Join the team at MoonLanding and" />
        <Text label="thousands of other investors travelling to infinity and beyond" />
      </TextWrapper>
      <ButtonWrapper>
        <Button onClick={() => ""} fontBig primary lg>
          Join the Community
        </Button>
        <Button onClick={() => ""} fontBig primary lg>
          Buy on PancakeSwap
        </Button>
      </ButtonWrapper>
    </TopSectionContainer>
  );
};

export default TopSection;
