import React, { Component } from 'react';
import { connect } from 'react-redux'


class Admin extends Component {

render() {
    return (
        'hello from admin'
    )
}

}

const mapReduxStateToProps = reduxState => ({
    reduxState
  });
  
  export default connect(mapReduxStateToProps)(Admin);
  