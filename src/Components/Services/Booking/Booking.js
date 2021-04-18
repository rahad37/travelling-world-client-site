import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Booking = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookings, setBookings] = useState([]);
    useEffect(()=>{
        fetch('https://stark-escarpment-49885.herokuapp.com/bookings?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='text-center text-warning m-4' style={{fontStyle: 'italic'}}>Welcome <span className='text-danger'>{loggedInUser.name}!</span> See Your Travelling Date...</h2>
            
            <Table striped bordered hover className='table'>
                <thead className='text-center'>
                    <tr>
                        <th>Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Service</th>
                        <th>Delete OR Edit</th>

                    </tr>
                </thead>
                {
                    bookings?.map(book => <tbody key={book._id} className='text-center'>
                        <tr>
                            <td>{book.name}</td>
                            <td>{(new Date(book.start).toDateString('dd/MM/yyyy'))}</td>
                            <td>{(new Date(book.end).toDateString('dd/MM/yyyy'))}</td>
                            <td style={{color: 'green', fontWeight: 'bold'}}>Pending...</td>
                            <td><span style={{color: 'red', cursor: 'pointer'}}>Delete</span> / <span style={{color: 'green', cursor: 'pointer'}}>Edit</span></td>

                        </tr>
                    </tbody>)
                }

            </Table>
            
            <div style={{width: '350px', margin: '0 auto', marginTop: '50px'}}>
                {/* <Link to='/payment'>
                    <button className='bg-primary text-light p-1' style={{fontSize: '20px', width: '350px', fontWeight: 'bold', borderRadius: '10px'}}>Payment Service Fee</button>
                </Link> */}
                
            </div>
        </div>
    );
};

export default Booking;