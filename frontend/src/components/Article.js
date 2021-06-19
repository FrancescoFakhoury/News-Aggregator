import React from "react";
import styled from "styled-components";

const Article = ({ article }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={article.urlToImage} />
      </ImageWrapper>
      <Title>{article.title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
`;

const Image = styled.img`
  min-height: 20rem;
  min-width: 20rem;
`;

const ImageWrapper = styled.div`
  max-height: 15rem;
  max-width: 15rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const Title = styled.div`
  padding-top: 1rem;
  text-align: center;
  max-width: 20vw;
  font-size: 20px;
`;

export default Article;
