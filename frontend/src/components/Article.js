import React from "react";
import styled from "styled-components";

const Article = ({ article }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={article.urlToImage} />
      </ImageWrapper>
      <Title numberOfLines={1}>
      {article.title.length < 75
                ? `${article.title}`
                : `${article.title.substring(0, 75)}...`}
      </Title>
      <Author>{article.author}</Author>
      <Time>{article.publishedAt}</Time>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
  grid-template-rows: repeat(auto-fill, minmax(250px, 250px));
  border-radius: 10%;
  height: 100%;
`;

const Time = styled.p``;

const Author = styled.p``;

const Image = styled.img`
  min-height: 15rem;
  min-width: 15rem;
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

const Title = styled.p`
  padding-top: 1rem;
  text-align: center;
  max-width: 150px;
  font-size: 25px;
`;

export default Article;