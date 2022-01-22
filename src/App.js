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
// import NewsItem from './component/NewsItem';

export class App extends Component {
  static propTypes = {};

  render() {
    return  <Router> 
      <Navbar/>
      {/* <News pageSize ={8} country="in" category=""/> */}
      <Switch>
          <Route exact path="/science">
          <News key="Science" pageSize ={12} country="in" category="Science" newsType="Science"/>
          </Route>
          <Route exact path="/business">
          <News key="Business" pageSize ={12} country="in" category="business" newsType="Business" />
          </Route>
          <Route exact path="/">
          <News key="General" pageSize ={12} country="in" category="general" newsType="TopHeadlines"/>
          </Route>
          <Route exact path='/entertainment'>
          <News key="Entertainment" pageSize ={12} country="in" category="Entertainment" newsType="Entertainment" />
          </Route>
          <Route exact path='/health'>
          <News key="Health" pageSize ={12} country="in" category="health" newsType="Health"/>
          </Route>
          <Route exact path='/sports'>
          <News key="Sports" pageSize ={12} country="in" category="sports" newsType="Sports" />
          </Route>
          <Route exact path='/technology'>
          <News key="Technology" pageSize ={12} country="in" category="technology" newsType="Technology" />
          </Route>
        </Switch>
       </Router> 
    
  }
}

export default App;

