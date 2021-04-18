import React from "react";
import { MarketPlaceContainer, P, H1 } from "./MarketPlace.elements";
import { Slide } from "react-reveal";

const MarketPlace = () => {
  return (
    <Slide bottom>
      <MarketPlaceContainer>
        <H1>NFT Marketplace</H1>
        <P>
          The team at MoonLanding BSC will also be creating its own NFT
          marketplace where users will be able to buy,sell and trade exclusive
          NFTs. To get the MoonLanding community involved, we will be hiring
          artists directly from the community. New NFTs will be released every
          season, once an NFT is sold out it can never be purchased again.
          Holders with over a certain amount of MoonLanding tokens will be
          airdropped a free NFT which can then be sold on our marketplace for
          BNB.
        </P>
      </MarketPlaceContainer>
    </Slide>
  );
};

export default MarketPlace;
