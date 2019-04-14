import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
//import PortfolioListItem from '../PortfolioListItem/PortfolioListItem'
import AppHeader from '../AppHeader/AppHeader'

class PortfolioList extends Component {

  //created this funct in case i need to pass as a prop to children comps
  handleDispatch = () => {
    this.props.dispatch({ type: 'GET_PROJECTS' })
  }
  
    componentDidMount() {
    this.handleDispatch();
    }


render() {
    return(
        <>
        <AppHeader/>
        {this.props.reduxState.projects.map(project =>
            <div key={project.id}>
            
              <Grid container spacing={16}>
                <Grid className="imgGrid" item xs={3}>
                  <img className='thumbnail' src={project.thumbnail} alt={project.description} />
                </Grid>
                <Grid container item xs={9}>
                  <Grid item xs={3} >
                    <h3>{project.name}</h3>
                  </Grid>
                  <Grid item xs={3} >
                    <h4><a href={project.website}>Website</a></h4>
                  </Grid>
                  <Grid item xs={3} >
                    <h4><a href={project.github}>GitHub</a></h4>
                  </Grid>
                  <Grid item xs={3} >
                    <h6>{project.tag_name}</h6>
                  </Grid>
                  <Grid item xs={12} >
                    <p>{project.description}</p>
                  </Grid>
                </Grid>
               
              </Grid>
              <Divider />
            </div>
          )}
          </>
    )
}




}

const mapReduxStateToProps = reduxState => ({
    reduxState,
  })
  
  export default connect(mapReduxStateToProps)(PortfolioList);