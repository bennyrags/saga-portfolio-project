import React, { Component } from 'react';
import { connect } from 'react-redux'
import AdminTable from '../AdminTable/AdminTable'
import AdminForm from '../AdminForm/AdminForm'
import { Link } from 'react-router-dom';
import './Admin.css'
import PortfolioHeader from '../PortfolioHeader/PortfolioHeader'


class Admin extends Component {


   

    render() {

        return (
            <>
            <PortfolioHeader />
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