import React from 'react';
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterWrapper>
            <Text>Powered by <span>news</span><span>Api</span> </Text>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
height: 5rem;
display: flex;
align-items: center;

`

const Text = styled.p`
font-family: "padauk";
font-size: 30px;
font-weight: bold;
margin: 0;
padding-left: 60px;
`

export default Footer
