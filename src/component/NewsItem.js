import React, { Component } from 'react';

export class NewsItem extends Component {

   

  render() {
      let {title, description ,imageURL, newsURL, author, date,source } =  this.props
      // let GMTDate =  new Date(String({date}))
      // GMTDate.toLocaleTimeString()
    return <div>
        <div className="card my-3" style={{width: '18rem'}}>
  <img src={imageURL} className="card-img-top" alt="..." style={{height:"12rem"}} />
  <div className="card-body">
  <span className="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
    {source}
    <span className="visually-hidden">unread messages</span>
    </span>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toUTCString()}</small></p>
    <a href={newsURL} rel='noopener noreferrer' target='_blank' className="btn btn-sm btn-primary">Read more</a>
  </div>
  </div>
    
    
    </div>
  }
}

export default NewsItem;
