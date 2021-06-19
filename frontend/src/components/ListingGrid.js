import React, { useState, useEffect } from "react";
import Article from "./Article";
import styled from "styled-components";

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

const ListingGrid = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=cryptocurrency&from=2021-06-19&sortBy=publishedAt&apiKey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        setNews(json.articles);
      })
      .catch((err) => console.log("err"));
  }, []);

  console.log(news);

  return (
    <ArticleWrapper>
      {news.map((article) => {
        return <Article article={article} />;
      })}
    </ArticleWrapper>
  );
};

const ArticleWrapper = styled.div`
  display: grid;
  /* grid-template-columns: repeat(4, 500px);
  grid-template-rows: minmax(400px, auto) repeat(5, 400px); */
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  grid-gap: 10px;
  justify-content: center;
  justify-content: space-around;
  margin-top: 10rem;
  align-content: center;
`;

export default ListingGrid;
