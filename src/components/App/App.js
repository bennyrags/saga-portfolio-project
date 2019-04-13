import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {

componentDidMount() {
  this.props.dispatch({type:'GET_PROJECTS'})
}



  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <p>Empty Page</p>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
reduxState,
})

export default connect(mapReduxStateToProps)(App);
