import React from "react";
import {
  Card,
  CardsContainer,
  MeneyIcon,
  LockIcon,
  HeadIcon,
  IconContainer,
  Heading,
  Text,
} from "./CardsSection.elements";

const CardsSection = () => {
  return (
    <CardsContainer>
      <Card>
        <IconContainer>
          <MeneyIcon />
        </IconContainer>
        <Heading>Redistribution Scheme</Heading>
        <Text>
          Holding onto your MoonLanding Tokens can reward you in the form of a
          passive income. A percentage of each transaction is distributed
          between holders allowing your MoonLanding Balance to grow
          indefinitely.
        </Text>
      </Card>
      <Card>
        <IconContainer>
          <LockIcon />
        </IconContainer>
        <Heading>AutoLocking Liquidity</Heading>
        <Text>
          Every transaction has a certain percentage which is locked to
          liquidity forever. This allows the price to increase continuously and
          ensures there will be less volatility in the price action
        </Text>
      </Card>
      <Card>
        <IconContainer>
          <HeadIcon />
        </IconContainer>
        <Heading>Transparency</Heading>
        <Text>
          The team at MoonLanding BSC believe that transparency is what makes
          massive projects. We take pride in expressing our opinions, answering
          any questions which may have you worried.
        </Text>
      </Card>
    </CardsContainer>
  );
};

export default CardsSection;
