import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'


class Admin extends Component {

    handleDispatch = () => {
        this.props.dispatch({ type: 'GET_PROJECTS' })
    }

    componentDidMount() {
        this.handleDispatch();
    }

    render() {

        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Name
                        </TableCell>
                        <TableCell>
                            Action
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.reduxState.projects.map(project => 
                    <TableRow key={project.id}>
                          <TableCell>
                            {project.name}      
                        </TableCell>  
                          <TableCell>
                            <button>Delete</button>      
                        </TableCell>  
                    </TableRow>
    
                        
                        )}
                                    </TableBody>
            </Table>
        )
    }

}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Admin);
