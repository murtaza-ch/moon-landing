import {
  StyledModal,
  Title,
  MetaMask,
  ButtonWrapper,
  WalletConnect,
} from "./Modal.elements";
import React from "react";

function ConnectWalletModal({
  isOpen,
  afterOpen,
  beforeClose,
  toggleModal,
  opacity,
}) {
  return (
    <StyledModal
      isOpen={isOpen}
      afterOpen={afterOpen}
      beforeClose={beforeClose}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      opacity={opacity}
      backgroundProps={{ opacity }}
    >
      <Title>Select a wallet provider</Title>
      <ButtonWrapper>
        <MetaMask />
        <WalletConnect />
      </ButtonWrapper>
    </StyledModal>
  );
}

export default ConnectWalletModal;
