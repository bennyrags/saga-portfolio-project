import React, { Component } from 'react';
import { connect } from 'react-redux'
import AdminTable from '../AdminTable/AdminTable'
import AdminForm from '../AdminForm/AdminForm'
import { Link } from 'react-router-dom';
import './Admin.css'
import AdminHeader from '../AdminHeader/AdminHeader'

//parent class that includes all elements on the admin page

class Admin extends Component {

    render() {

        return (
            <>
                <AdminHeader />
                <section className='container'>
                    <Link className='homeLink' to='/'>Back to Projects</Link>
                    <h1>Add New Project</h1>
                    <AdminForm />
                    <h2>Current Projects</h2>
                    <AdminTable />
                </section>
            </>
        )
    }

}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Admin);
