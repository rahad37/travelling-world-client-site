import React from 'react';
import { Link } from 'react-router-dom';
import travel from '../../../images/travel.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
           
            <nav className="navbar navbar-expand-lg navbar-light bg-danger text-light">
                <div className='container-fluid'>
                
                <div className="d-flex">
                    <img src={travel} alt='' style={{height: '40px', paddingRight: '10px'}}/>
                    <h2 style={{fontStyle: 'italic'}}>Travelling-World</h2>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5 text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="/review" style={{cursor: 'pointer'}}>Reviews</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="/booking">Your Bookings</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="/admin">Admin</Link>
                    </li>
                    
                    
                    {/* <li className="nav-item">
                        <Link className="nav-link mr-5 text-white" to="/dashboard">Dashboard</Link>
                    </li> */}
                </ul>
            </div>

            </div>
        </nav>
        </div>
    );
};

export default Navbar;