import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import PortfolioHeader from '../PortfolioHeader/PortfolioHeader'
import './PortfolioList.css'
import moment from "moment";


class PortfolioList extends Component {

  //created this funct in case i need to pass as a prop to children comps
  handleDispatch = () => {
    this.props.dispatch({ type: 'GET_PROJECTS' })
  }

  componentDidMount() {
    this.handleDispatch();
  }


  render() {
    return (
      <>
        <PortfolioHeader />
        {this.props.reduxState.projects.map(project =>

          <div className='projectContainer' key={project.id}>
            <Grid container spacing={16}>

              {project.thumbnail !== '' &&
                <Grid className="imgGrid" item lg={4} md={4} sm={6} xs={6}>
                  <img className='thumbnail' src={project.thumbnail} alt={project.description} />
                </Grid>

              }
              <Grid container item xs={6} sm={6} md={4} lg={4}>
                <Grid item xs={6} sm={6} md={4} lg={4} >
                  <h3>{project.name}</h3>
                </Grid>

                {project.website !== '' &&
                  <Grid item lg={4} md={4} sm={4} xs={6}>
                    <h4><a href={project.website}>Website</a></h4>
                  </Grid>
                }


                {project.github !== '' &&

                  <Grid item lg={4} md={4} sm={4} xs={6}>
                    <h4><a href={project.github} target='_blank' rel="noopener noreferrer" >GitHub</a></h4>
                  </Grid>
                }

                {project.tag_name !== '' &&

                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <h4>Primary library: {project.tag_name}</h4>
                  </Grid>
                }

                {project.date_completed !== '' &&

                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <h4>Date Done: {moment(project.date_completed).format('MM-DD-YYYY')}</h4>
                  </Grid>
                }

                {project.description !== '' &&

                  <Grid item sm={12} >
                    <p>{project.description}</p>
                  </Grid>
                }
              </Grid>

            </Grid>
            <Divider className='divider' />
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