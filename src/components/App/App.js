import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid'
class App extends Component {

componentDidMount() {
  this.props.dispatch({type:'GET_PROJECTS'})
}

  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
{this.props.reduxState.projects.map(project=>
          
      <Grid key={project.id} container spacing={16}>
        <Grid className="border" item xs={3}>
          <img className='thumbnail' src={project.thumbnail} alt={project.description} />
        </Grid>
        <Grid className="border" container item xs={9}>
          <Grid className="border" item xs={3} >
          <h3>{project.name}</h3>
          </Grid>
          <Grid className="border" item xs={3} >
          <h4><a href={project.website}>Website</a></h4>
          </Grid>
          <Grid className="border" item xs={3} >
          <h4><a href={project.github}>GitHub</a></h4>
          </Grid>
          <Grid className="border" item xs={3} >
          <h6>{project.tag_name}</h6>
          </Grid>
          <Grid className="border" item xs={12} >
          <p>{project.description}</p>
          </Grid>

        </Grid>
        <Grid className="border" item>
        <p>Grid 3</p>
        </Grid>

      </Grid>

)}
        
      
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
reduxState,
})

export default connect(mapReduxStateToProps)(App);
