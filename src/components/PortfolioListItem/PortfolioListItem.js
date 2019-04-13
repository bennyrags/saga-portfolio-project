import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


class PortfolioListItem extends Component {
    render() {
        return(
            <>
            {this.props.reduxState.projects.map(project =>
                <section key={project.id}>
                {/* <PortfolioListItem /> */}
                
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
                </section>
              )}
              </>
        )
    }

}

//Dont know if I need these, since it is relating directly to its parent and not with the saga?

const mapReduxStateToProps = reduxState => ({
    reduxState,
  })
  
  export default connect(mapReduxStateToProps)(PortfolioListItem);