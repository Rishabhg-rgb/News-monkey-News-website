import React, { Component } from 'react';

import NewsItem from './NewsItem';
import Spinner from './Spinner';


export class News extends Component {

  static defaultProps={
    country:"in",
    pageSize:15,
    category:'general'

  }

  // static  PropTypes


  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      

    }
    document.title = `News Monkey - ${this.props.category}`
  }

  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3f47b4d614d442f1b13544db8f9f9b01&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles,totalResults:parsedData.totalResults,loading:false })
    
  }

  async componentDidMount() {
    // y render k baad run hoga
    this.updateNews()
  }


  handleNextClick = async () => {
    this.setState({
      page:this.state.page +1
    })
    this.updateNews()

  }

  handlePreviousClick = async() => {
    this.setState({
      page:this.state.page -1
    })
    this.updateNews()

  }

  render() {
    return <div className='container my-3'>
      <h2 className='text-center'>News Monkey - Top {this.props.newsType} headlines</h2>
      <div className="row">
          {this.state.loading && <Spinner/>}
        { !this.state.loading && this.state.articles.map((element) => {
          return <div className="col-md-3">
            <NewsItem key={element.url} title={element.title ? element.title.slice(0, 60) + "..." : ""}  description={element.description ? element.description.slice(0, 90) + "..." : ""} imageURL={element.urlToImage ? element.urlToImage : "https://images.moneycontrol.com/static-mcnews/2020/01/BSE_Sensex_Stocks_market_down_red-770x433.png"} newsURL={element.url}  author={element.author} date ={element.publishedAt} source = {element.source.name} />
          </div>
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
        <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)?true:false} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
      </div>
    </div>
  }
}

export default News;
