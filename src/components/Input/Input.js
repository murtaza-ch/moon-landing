import styled from "styled-components";

export const Input = styled.input`
  background: transparent;
  color: #bdbdbd;
  font-size: 2rem;
  border: none;
  outline: none;
  width: 628px;
  padding: 0 2rem;
  &::-webkit-input-placeholder {
    font-family: Space Grotesk;
    font-style: normal;
    font-size: 1.2rem;
    letter-spacing: 0.75px;
    color: #bdbdbd;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
