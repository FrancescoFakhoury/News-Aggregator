import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

const Article = ({ article }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={article.urlToImage} />
      </ImageWrapper>
      <Title href={article.url}>
        {article.title.length < 75
          ? `${article.title}`
          : `${article.title.substring(0, 75)}...`}
      </Title>
      <Author>{article.author}</Author>
      <Time>{format(new Date(article.publishedAt), "PPPPpppp")}</Time>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
  grid-template-rows: repeat(auto-fill, minmax(250px, 250px));
  justify-content: center;
  align-items: center;

  &:hover {
    border: solid 1px grey;
    box-shadow: 10px 10px 10px 0 var(--powderblue);
    margin: -1px;
    background: white;
  }
`;
const Time = styled.p`
  max-width: 200px;
  font-size: 17px;
`;

const Author = styled.p`
  font-family: "Padauk";
  font-size: 20px;
  max-width: 200px;
  font-weight: bold;
`;

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

const Title = styled.a`
  padding-top: 1rem;
  text-align: left;
  max-width: 250px;
  font-size: 30px;
  font-family: "Padauk";
  text-decoration: none;
  color: #000;

  &:hover {
    text-decoration: underline;
  }
`;

export default Article;
