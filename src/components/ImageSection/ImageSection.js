import React from "react";
import {
  ImageSectionContainer,
  ImageContainer,
  AstroImage,
} from "./ImageSection.elements";
import moon from "../../assets/moon.png";
import astro from "../../assets/astro.png";

const ImageSection = () => {
  return (
    <ImageSectionContainer>
      <ImageContainer>
        <img src={moon} alt="Moon" width={"100%"} />
        <AstroImage>
          <img src={astro} alt="Astro" />
        </AstroImage>
      </ImageContainer>
    </ImageSectionContainer>
  );
};

export default ImageSection;
