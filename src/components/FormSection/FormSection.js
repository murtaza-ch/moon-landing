import React from "react";
import {
  FormSectionContainer,
  InputWrapper,
  MaxAction,
  FormGroup,
  Heading,
} from "./FormSection.element";
import { Input } from "../Input/Input";
import { Button } from "../../globalStyles";

const FormSection = () => {
  return (
    <FormSectionContainer>
      <Heading>Get MoonLanding</Heading>
      <form>
        <FormGroup>
          <InputWrapper>
            <Input placeholder="BNB Amount" />
            <MaxAction>Max</MaxAction>
          </InputWrapper>
          <Button onClick={() => ""} primary formBtn>
            Purchase
          </Button>
        </FormGroup>
      </form>
    </FormSectionContainer>
  );
};

export default FormSection;
