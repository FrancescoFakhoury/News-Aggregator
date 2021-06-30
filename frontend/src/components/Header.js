import React from "react";
import styled from "styled-components";
import { BiRocket } from "react-icons/bi";

const Header = () => {
  return (
    <Wrapper>
      <Title>Hodl News</Title>
      <BiRocket size="80px" color="#cc3363" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: linear-gradient(90deg, var(--teagreen) 0%, var(--powderblue) 100%)
    0% 0% no-repeat padding-box;
  width: 100vw;
  height: 17vh;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 10;
`;

const Title = styled.h1`
  font-size: 80px;
  margin: 0;
  font-family: var(--header-font);
  opacity: 0.8;
  padding-left: 60px;
`;

export default Header;
