import Modal from "styled-react-modal";
import styled from "styled-components";
import metamask from "../../assets/metamask.svg";
import connectwallet from "../../assets/connectwallet.svg";
import metamaskHover from "../../assets/metamaskHover.svg";
import connectHover from "../../assets/connectHover.svg";

export const StyledModal = Modal.styled`
  width: 100%;
  margin:0 24rem;
  padding:2rem 0;
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
  background: #383B51;
  backdrop-filter: blur(20px);
  border-radius: 8px;
  box-sizing: border-box;
  border-radius: 25px;
  @media screen and (max-width: 768px) {
  margin:0 12rem;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 3rem;
  margin-bottom: 1rem;
`;

export const MetaMask = styled.div`
  width: 411px;
  height: 332px;
  cursor: pointer;
  background: url(${metamask}) no-repeat center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  &:hover {
    transition: all 0.3s ease;
    background: url(${metamaskHover}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;

export const WalletConnect = styled.div`
  width: 411px;
  height: 332px;
  cursor: pointer;
  background: url(${connectwallet}) no-repeat center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  &:hover {
    transition: all 0.3s ease;
    background: url(${connectHover}) no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;

export const Title = styled.h1`
  font-family: "Dela Gothic One";
  font-style: normal;
  font-weight: normal;
  font-size: 42px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #ffca00;
  &:hover {
    color: #eff0f7;
    transition: all 0.3s ease-in;
  }
  @media screen and (max-width: 960px) {
    font-size: 42px;
    line-height: 50px;
  }
  @media screen and (max-width: 660px) {
    font-size: 32px;
    line-height: 30px;
  }
`;
