import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import PortfolioList from '../PortfolioList/PortfolioList'

class App extends Component {



  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
< PortfolioList /> 
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState,
})

export default connect(mapReduxStateToProps)(App);
