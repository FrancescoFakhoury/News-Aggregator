import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

const Article = ({ article }) => {
  return (
    <Wrapper>
      <Image src={article.urlToImage} />
      <Title href={article.url}>
        {article.title.length < 75
          ? `${article.title}`
          : `${article.title.substring(0, 75)}...`}
      </Title>
      <Source>{article.source.name}</Source>
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
  border-bottom: solid 2px #000;

  &:hover {
    border: solid 3px #000;
    box-shadow: 6px 6px 0px 0px #000;
    margin: -3px;
    background: white;
  }
`;

const Time = styled.p`
  max-width: 200px;
  font-size: 17px;
  font-family: "padauk";
`;

const Source = styled.p`
  font-family: "Padauk";
  font-size: 20px;
  max-width: 200px;
  font-weight: bold;
  padding-left: 20px;
`;

const Image = styled.img`
  height: 15rem;
  width: 15rem;
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
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export default Article;
