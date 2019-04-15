import React from 'react';
import './PortfolioHeader.css'
import Divider from '@material-ui/core/Divider'


const PortfolioHeader = () => {
    return (
        <>
            <header className='header linearGradient'>

                <a href='https://github.com/bennyrags'>
                    <img className='headShot' src='images/headshot200.jpg' alt='Ben Ragsdale headshot' />
                </a>
            </header>

            <h1>Ben Ragsdale</h1>
            <Divider className='divider' />
        </>
    )
}

export default PortfolioHeader;