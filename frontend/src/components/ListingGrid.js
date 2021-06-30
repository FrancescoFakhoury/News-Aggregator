import React, { useState, useEffect } from "react";
import Article from "./Article";
import styled from "styled-components";

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

const ListingGrid = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=cryptocurrency&from=2021-06-30&sortBy=publishedAt&apiKey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        setNews(json.articles);
      })
      .catch((err) => console.log("err"));
  }, []);

  console.log(news);

  return (
    <MainWrapper>
    <ArticleWrapper>
      {news.map((article) => {
        return <Article article={article}/>;
      })}
    </ArticleWrapper>
    </MainWrapper>
  );
};

const ArticleWrapper = styled.div`
  display: grid;
  /* grid-template-columns: repeat(4, 500px);
  grid-template-rows: minmax(400px, auto) repeat(5, 400px); */
  grid-template-columns: repeat(auto-fill, minmax(600px, 600px));
  grid-gap: 30px;
  justify-content: center;
  margin-top: 12rem;
  align-content: center;
`

const MainWrapper = styled.div`
`


export default ListingGrid;
