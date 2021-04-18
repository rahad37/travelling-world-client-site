import React from 'react';
import './CommonDesign.css';
import travel from '../../images/travel.png';
import { Link } from 'react-router-dom';


const CommonDesign = () => {
    return (
        <div className='common-container bg-danger text-light'>
            <div>
                <div className='d-flex justify-content-between container p-2'>
                    <div className='d-flex'>
                        <img src={travel} alt='' className='img-fluid mr-2' style={{height: '40px'}}/>
                        <h2 style={{fontStyle: 'italic', color: 'white'}}>Travelling-World</h2>
                    </div>
                    <div className='fine pt-2'>
                        <ul>
                            <li>
                                <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to='/admin' style={{textDecoration: 'none', color: 'white'}}>
                                    Admin
                                </Link>
                            </li>
                            <li>
                                <a href='/' style={{textDecoration: 'none', color: 'white'}}>
                                    Log Out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default CommonDesign;