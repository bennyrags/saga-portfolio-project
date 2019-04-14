import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import './AdminForm.css'
import Button from '@material-ui/core/Button'

const tagId = [
    {
      value: 1,
      label: 'React',
    },
    {
      value: 2,
      label: 'jQuery',
    },
    {
      value: 3,
      label: 'Node',
    },
    {
      value: 4,
      label: 'SQL',
    },
    {
      value: 5,
      label: 'Redux',
    },
    {
      value: 6,
      label: 'HTML',
    },
  ];
  


class AdminForm extends Component {

state = {
    newProject: {
        name: '',
        description: '',
        thumbnail: '',
        website: '',
        github: '',
        date_completed: '',
        tag_id: '',
    }
}

handleClick = (event) => {
event.preventDefault();
console.log(`click clicked in handleClick`);
this.props.dispatch({type:'NEW_PROJECT', payload:this.state.newProject})
}

handleChange = (event) => {
    this.setState({
        newProject: {
            ...this.state.newProject,
            [event.target.name]: event.target.value
        }
    })
    console.log(this.state);
    
}



    render() {
        return (
            <>
            <form>
                <Grid container   justify="space-between" spacing={16}>
                <Grid item md={3} lg={3}>
                <TextField 
                label='Name'
                name='name'
                value={this.state.newProject.name}
                onChange={this.handleChange}
                variant='outlined'
                >
            </TextField>
            </Grid>
            <Grid item md={3} lg={3}>
             <TextField 
                name='date_completed'
                type='date'
                id='date'
                value={this.state.newProject.date_completed}
                onChange={this.handleChange}
                variant='outlined'
                InputLabelProps={{
                    shrink: true,
                  }}
                >
            </TextField>
            </Grid>
            <Grid item md={3} lg={3}>
                <TextField 
                label='Select Tag'
                select
                fullWidth
                className='minWidth110'
                name='tag_id'
                value={this.state.newProject.tag_id}
                onChange={this.handleChange}
                variant='outlined'
                >
                {tagId.map(tag=>(
                    <MenuItem key={tag.value} value={tag.value}>
                    {tag.label}
                    </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item md={3} lg={3}>
                <TextField 
                label='Thumbnail'
                name='thumbnail'
                value={this.state.newProject.thumbnail}
                onChange={this.handleChange}
                variant='outlined'
                >
            </TextField>
            </Grid>
            <Grid item sm={6} md={6} xl={6} lg={6}>
                <TextField 
                name='website'
                label='Website (Optional)'
                value={this.state.newProject.website}
                onChange={this.handleChange}
                variant='outlined'
                type='text'
                fullWidth
                ></TextField>
            </Grid>
            <Grid item sm={6} md={6} xl={6} lg={6}>
                <TextField 
                name='github'
                label='GitHub'
                value={this.state.newProject.github}
                onChange={this.handleChange}
                variant='outlined'
                type='text'
                fullWidth
                ></TextField>
                </Grid>
            <Grid item sm={12} md={12} xl={12} lg={12}>
            <TextField 
                name='description'
                label='Description'
                value={this.state.newProject.description}
                onChange={this.handleChange}
                variant='outlined'
                type='text'
                fullWidth
                ></TextField>
            </Grid>
            </Grid>
            
            </form>
            <div className='buttonDiv rightAlign'> 
            <Button className='linearGradient' onClick={this.handleClick}>Submit</Button>
            </div>
            </>
        )
    }
}



const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AdminForm);