import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import './AdminForm.css'
import Button from '@material-ui/core/Button'

//This are the items for the tag drop-down. Material UI is giving me a warning for doing it this way, but they don't provide a real alternative. Note to future self -change drop down syntax at some point
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

    //click dispatches to Redux, which pushes the payload to the post function
    handleClick = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'NEW_PROJECT', payload: this.state.newProject })
    }

    handleChange = (event) => {
        this.setState({
            newProject: {
                ...this.state.newProject,
                [event.target.name]: event.target.value
            }
        })

    }

    render() {
        return (
            <>
                <form>
                    {/* I wrapped the form fields in grid containers  */}
                    <Grid container justify="space-around" spacing={16}>
                        <Grid item md={3} lg={3} xl={3}>
                            <TextField
                                label='Name'
                                name='name'
                                fullWidth
                                value={this.state.newProject.name}
                                onChange={this.handleChange}
                                variant='outlined'
                            >
                            </TextField>
                        </Grid>
                        <Grid item md={3} lg={3} xl={3}>
                            <TextField
                                name='date_completed'
                                fullWidth
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
                        <Grid item md={3} lg={3} xl={3}>
                        {/* This select function may need to be changed in the future - warning from material ui */}
                            <TextField
                                label='Select Tag'
                                select
                                className='minWidth110'
                                name='tag_id'
                                fullWidth
                                value={this.state.newProject.tag_id}
                                onChange={this.handleChange}
                                variant='outlined'
                            >
                                {tagId.map(tag => (
                                    <MenuItem key={tag.value} value={tag.value}>
                                        {tag.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item md={3} lg={3} xl={3}>
                            <TextField
                                label='Thumbnail'
                                name='thumbnail'
                                fullWidth
                                value={this.state.newProject.thumbnail}
                                onChange={this.handleChange}
                                variant='outlined'
                            >
                            </TextField>
                        </Grid>
                        <Grid item sm={6} md={6} xl={6} lg={6}>
                            <TextField
                                name='website'
                                label='Website'
                                fullWidth
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
