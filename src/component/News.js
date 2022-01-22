import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import NewsItem from './NewsItem';
import Spinner from './Spinner';


const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totolResults, settotolResults] = useState(0);
  // static  PropTypes


  // document.title = `News Monkey - ${props.category}`



  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    props.setProgress(30)
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(parsedData.articles)
    settotolResults(parsedData.articles.totalResults)
    setLoading(false)
    props.setProgress(100)
  }
  useEffect(() => {
    updateNews();
  }, []);





  const fetchMoreData = async () => {
    setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setLoading(false)
  }



  return <div className='container my-3'>
    <h2 className='text-center'>News Monkey - Top {props.newsType} headlines</h2>
    {loading && <Spinner />}
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length !== totolResults}
      loader={<Spinner />}
    >
      <div className="container">
        <div className="row">
          {articles.map((element) => {
            return <div className="col-md-3">
              <NewsItem key={element.url} title={element.title ? element.title.slice(0, 60) + "..." : ""} description={element.description ? element.description.slice(0, 90) + "..." : ""} imageURL={element.urlToImage ? element.urlToImage : "https://images.moneycontrol.com/static-mcnews/2020/01/BSE_Sensex_Stocks_market_down_red-770x433.png"} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
      </div>
    </InfiniteScroll>

  </div>

}


export default News;

News.defaultProps = {
  country: "in",
  pageSize: 15,
  category: 'general'

}

