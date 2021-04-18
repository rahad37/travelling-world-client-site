import React from 'react';
import { Link } from 'react-router-dom';
import './ServicePage.css'

const ServicePage = ({element}) => {
    return (
        
            <div className="col-md-4 mb-5">
            <div className="card p-3"  style={{fontStyle: 'italic'}}>
                
                <div className="card-body text-center text-danger style">
                    <h3 className="card-title bg-dark p-2 text-light rounded">{element?.name}</h3>
                    <h3 className='bg-warning text-danger p-2 rounded'>{element?.place}</h3>
                    <h5 className='bg-warning text-danger p-2 rounded'>{element?.time}</h5>
                    <h4 className='bg-warning text-danger p-2 rounded'>{element?.country}</h4>
                    <h2 className='bg-dark p-2 text-light rounded'>Only ${element?.price}</h2>
                    <Link to='/dashboard'><button className='bg-danger text-light' style={{width: '100%', fontSize: '20px', borderRadius: '5px'}}>Book Now</button></Link>          
                </div>
                
                
            </div>
            </div>
     
        
    );
};

export default ServicePage;


