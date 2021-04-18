import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useForm } from 'react-hook-form';
import '../Review/Review.css';
import PaymentForm from './PaymentForm';
import { Link } from 'react-router-dom';


const stripePromise = loadStripe('pk_test_51Ie1ORFOphq2HwefWNuStHeu8hUilRC41Qjji8JagnONGtZPGNN4N68lrXfyXhDsdHcgvpTQn9B0wDF6DHPv0jT400JVBJGuv0');


const PaymentDetail = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>console.log(data);

    const handleClick = () =>{
        alert('Welcome To Travel With Us, Thank Your!')
    }
    return (
        <div className='container'>
            <div className='row'>
            <div className='col-md-6 mt-1 text-center'>
                    <h2 className='bg-warning text-light p-2 rounded' style={{fontStyle: 'italic'}}>Pay Your Travel Cost</h2>
                <Elements stripe={stripePromise}>
                    <PaymentForm></PaymentForm>
                </Elements>
                </div>

                <div className='col-md-6 art mt-1 text-center'>
                    <h2 className='bg-warning text-light p-2 rounded' style={{fontStyle: 'italic'}}>Your Details</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Your Full Name' name="name" ref={register} required/>
                    <input placeholder='Your Email Address' name="place" ref={register} required/>
                    <input placeholder='Your City Name' name="time" ref={register} required/>
                    <input placeholder='Your Country Name' name="country" ref={register} required/>
                    <input className='bg-primary text-light' style={{fontWeight: 'bold'}} type='submit' value='SUBMIT' onClick={handleClick}/>
                   

                </form>
                </div>
            </div>
            
        </div>
    );
};

export default PaymentDetail;