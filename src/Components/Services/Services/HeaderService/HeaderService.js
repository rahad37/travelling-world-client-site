import React, { useContext, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Tour from '../../../../images/tour.jpg';
import './HeaderService.css';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';


const HeaderService = () => {
    const [value, onChange] = useState(new Date());

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState({
        start: new Date(),
        end: new Date(),
    });

    const handleStartDate = (date) => {
        const newDate = {...selectedDate}
        newDate.start = date;
    setSelectedDate(newDate);
  };

    const handleEndDate = (date) => {
    const newDate = {...selectedDate}
    newDate.end = date;
    setSelectedDate(newDate);
};

const handleBooking =()=>{
    const newBooking = {...loggedInUser, ...selectedDate};
    fetch('https://stark-escarpment-49885.herokuapp.com/addBooking', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(newBooking)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
    })
}
    return (
        <div>
            <div className='container'>
            <div className='row pt-5 pb-5'>              
                <div className='col-md-7'>
                    <img src={Tour} alt='' className='img-fluid rounded'/>
                </div>

                <div className='col-md-5 text-center'>
                    <h2 className='text-light text-center bg-warning p-2 rounded'  style={{ fontStyle: 'italic'}}>Select Your Travelling Date</h2>
                    
                     <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="dd/MM/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Start Tour"
                            value={selectedDate.start}
                            onChange={handleStartDate}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                            <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="End Tour"
                            format="dd/MM/yyyy"
                            value={selectedDate.end}
                            onChange={handleEndDate}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                            
                        </Grid>
                        </MuiPickersUtilsProvider>
                        <div style={{width: '300px', margin: '0 auto'}} className='mt-5 mb-5'>
                            
                            <Link to='/payment'>
                                <button style={{width: '250px', fontSize: '20px', fontWeight: 'bold'}} className="bg-primary text-light rounded" onClick={handleBooking}>Book Now</button>
                            </Link>
                           
                       
                </div>

                </div>

                                               
            </div>
                           
        </div>
        </div>
        
    );
};

export default HeaderService;