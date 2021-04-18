import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../../Home/Navbar/Navbar';
import '../../Review/Review.css';


const Services = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    

    const onSubmit = data => {
        const serviceData ={
            name: data.name,
            place: data.place,
            time: data.time,
            country: data.country,
            price: data.price
        }
        const url = `https://stark-escarpment-49885.herokuapp.com/addService`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => console.log('service server site response is showing'))
    
    };

    const handleDataSubmit = () =>{
        alert('Your Review is successfully added on home page')
      }

    return (
        <div>
           <Navbar/>
           <div className='art p-5 bg-warning' style={{boxShadow: '5px 5px 15px gray', marginTop: '50px', borderRadius: '5px'}}>
           <h2 className='text-center text-danger' style={{fontStyle: 'italic'}}>Adding Package</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Package Name' name="name" ref={register} required/>
                    <input placeholder='Place Name' name="place" ref={register} required/>
                    <input placeholder='Time Duration' name="time" ref={register} required/>
                    <input placeholder='Country Name' name="country" ref={register} required/>
                    <input placeholder='Package Price' name="price" ref={register} required/>
                    
                    <input type="submit" value='SUBMIT' onClick={handleDataSubmit}/>
                </form>
           </div>
        </div>
    );
};

export default Services;