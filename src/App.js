import './App.css';
// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import { 
  BrowserRouter as Router,
  Switch 
  ,Route
  
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
// import NewsItem from './component/NewsItem';

export class App extends Component {
  static propTypes = {};
  apiKey = process.env.REACT_APP_NEWS_API 
  state={
    progress:0
  }

  setProgress= (progress)=>{
    this.setState({
      progress: progress
    })
  }

  render() {
    return  <Router>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={()=>setProgress()}
      >

      </LoadingBar>
      <Navbar/>
      {/* <News pageSize ={8} country="in" category=""/> */}
      <Switch>
          <Route exact path="/science">
          <News setProgress = {this.setProgress} apiKey = {this.apiKey} key="Science" pageSize ={12} country="in" category="Science" newsType="Science"/>
          </Route>
          <Route exact path="/business">
          <News setProgress = {this.setProgress} apiKey = {this.apiKey} key="Business" pageSize ={12} country="in" category="business" newsType="Business" />
          </Route>
          <Route exact path="/">
          <News setProgress = {this.setProgress} apiKey = {this.apiKey} key="General" pageSize ={12} country="in" category="general" newsType="TopHeadlines"/>
          </Route>
          <Route exact path='/entertainment'>
          <News setProgress = {this.setProgress} apiKey = {this.apiKey} key="Entertainment" pageSize ={12} country="in" category="Entertainment" newsType="Entertainment" />
          </Route>
          <Route exact path='/health'>
          <News setProgress = {this.setProgress} apiKey = {this.apiKey} key="Health" pageSize ={12} country="in" category="health" newsType="Health"/>
          </Route>
          <Route exact path='/sports'>
          <News setProgress = {this.setProgress} apiKey = {this.apiKey} key="Sports" pageSize ={12} country="in" category="sports" newsType="Sports" />
          </Route>
          <Route exact path='/technology'>
          <News setProgress = {this.setProgress} apiKey = {this.apiKey} key="Technology" pageSize ={12} country="in" category="technology" newsType="Technology" />
          </Route>
        </Switch>
       </Router> 
    
  }
}

export default App;

