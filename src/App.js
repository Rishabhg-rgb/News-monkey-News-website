import './App.css';
// import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);





  return (<Router>
    <LoadingBar
      color='#f11946'
      progress={progress}

    >

    </LoadingBar>
    <Navbar />

    <Switch>
      <Route exact path="/science">
        <News setProgress={setProgress} apiKey={apiKey} key="Science" pageSize={12} country="in" category="Science" newsType="Science" />
      </Route>
      <Route exact path="/business">
        <News setProgress={setProgress} apiKey={apiKey} key="Business" pageSize={12} country="in" category="business" newsType="Business" />
      </Route>
      <Route exact path="/">
        <News setProgress={setProgress} apiKey={apiKey} key="General" pageSize={12} country="in" category="general" newsType="TopHeadlines" />
      </Route>
      <Route exact path='/entertainment'>
        <News setProgress={setProgress} apiKey={apiKey} key="Entertainment" pageSize={12} country="in" category="Entertainment" newsType="Entertainment" />
      </Route>
      <Route exact path='/health'>
        <News setProgress={setProgress} apiKey={apiKey} key="Health" pageSize={12} country="in" category="health" newsType="Health" />
      </Route>
      <Route exact path='/sports'>
        <News setProgress={setProgress} apiKey={apiKey} key="Sports" pageSize={12} country="in" category="sports" newsType="Sports" />
      </Route>
      <Route exact path='/technology'>
        <News setProgress={setProgress} apiKey={apiKey} key="Technology" pageSize={12} country="in" category="technology" newsType="Technology" />
      </Route>
    </Switch>
  </Router>
  )

}

export default App;

