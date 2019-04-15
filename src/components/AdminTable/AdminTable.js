import React, { Component } from 'react';
import { connect } from 'react-redux'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import Button from '@material-ui/core/Button'

class AdminTable extends Component {

    handleDelete = (id) => {
        window.confirm('Are You Sure You Want To Delete?') && this.props.dispatch({ type: 'DELETE_PROJECT', payload: id })
    }

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
                        <TableCell className='rightAlign'>
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
                            <TableCell className='rightAlign'>
                                <Button className='linearGradient' onClick={() => this.handleDelete(project.id)}>Delete</Button>
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

export default connect(mapReduxStateToProps)(AdminTable);
