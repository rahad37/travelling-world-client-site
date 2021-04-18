import React from 'react';
import { Link } from 'react-router-dom';
import travel from '../../images/travel.png';
import './Admin.css';
import AddIcon from '@material-ui/icons/Add';
import AppsIcon from '@material-ui/icons/Apps';
import BorderColorIcon from '@material-ui/icons/BorderColor';

const Admin = () => {
    return (
    <div>
        <div className='admin-container d-flex justify-content-between p-3'>
            <div className='lovely'>
                <div className='d-flex'>
                    <img src={travel} alt='' className='img-fluid mr-2' style={{height: '40px'}}/>
                    <h2 style={{fontStyle: 'italic', color: 'red'}}>Travelling-World</h2>
                </div>
                <div className='text-light mt-5'>
                   <Link to='/services' style={{textDecoration: 'none', color: 'white'}}>
                        <h5 className='d-flex'><AddIcon className='mr-2'></AddIcon> Add Service</h5>
                   </Link>
                   <Link to='/manage' style={{textDecoration: 'none', color: 'white'}}>
                        <h5 className='d-flex mt-4'><AppsIcon className='mr-2'></AppsIcon> Booking Manage</h5>
                   </Link>
                   <Link to='/edit' style={{textDecoration: 'none', color: 'white'}}>
                        <h5 className='d-flex mt-4'><BorderColorIcon className='mr-2'></BorderColorIcon> Edit Service</h5>
                   </Link>
                   
                    
                </div>
            </div>
            
           
           <div className='text-light design'>
            <ul>
                <li>
                    <Link to='/' style={{textDecoration: 'none'}}>Home</Link>
                </li>
                <li>
                    <a href='/' style={{textDecoration: 'none'}}>Log Out</a>
                </li>
            </ul>
            </div>
        </div>
        
    </div>
    );
};

export default Admin;