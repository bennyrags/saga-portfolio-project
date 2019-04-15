import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import PortfolioList from '../PortfolioList/PortfolioList'
import { HashRouter as Router, Route } from 'react-router-dom';
import Admin from '../Admin/Admin'

class App extends Component {



  // Renders the entire app on the DOM
  render() {
    return (
    
      //App consists of two main pages, or views, as represented below
      <div className="App">
        <Router>
          <Route exact path='/' component={PortfolioList} />
          <Route path='/admin' component={Admin} />
        </Router>
      </div>

    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState,
})

export default connect(mapReduxStateToProps)(App);
