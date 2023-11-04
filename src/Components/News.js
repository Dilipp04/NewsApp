import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import { PropTypes } from "prop-types";
import myImage from "../defaultImg.png";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResult] = useState(0);

  const UpdateNews = async (pageNo) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${pageNo}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedata = await data.json();
    props.setProgress(70);
    setArticles(parsedata.articles);
    props.setProgress(90);

    setTotalResult(parsedata.totalResults);
    setLoading(false);
    props.setProgress(100);
  };
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    setPage(page + 1);
    setArticles(articles.concat(parsedata.articles));
    setTotalResult(parsedata.totalResults);
    console.log(parsedata.articles);
  };

  useEffect(() => {
    document.title = "NewsApp - " + props.category.toUpperCase();
    UpdateNews(page);
  }, []);

  const previousHandler = () => {
    UpdateNews(page - 1);
  };
  const nextHandler = () => {
    if (page + 1 > Math.ceil(totalResults / props.pageSize)) {
      setPage(page - 1);
    } else {
      UpdateNews(page + 1);
      setPage(page + 1);
    }
  };

  return (
    <>
      <div className="container mb-3" style={{ marginTop: "90px" }}>
        <h2 className="text-center my-4">{props.category.toUpperCase()} </h2>
        <InfiniteScroll
          style={{ overflow: "visible" }}
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={
            <div
              className="spinner-border text-dark mx-auto d-block"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          }
        >
          {!loading && (
            <div className="d-flex flex-wrap  justify-content-around">
              {articles.map((e, i) => {
                return (
                  <div key={i}>
                    <NewsItems
                      title={e.title ? e.title : ""}
                      desc={e.description ? e.description : ""}
                      imageUrl={e.urlToImage ? e.urlToImage : myImage}
                      newsUrl={e.url}
                      author={e.author}
                      date={e.publishedAt}
                      source={e.source.name}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 3,
  category: "general",
  // apikey: "10a9732d7a8840c2ac1e18d88b24aa4a",
  apikey: "7f3c89a546164e2d8d670d387ba12408",
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
