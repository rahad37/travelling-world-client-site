import React from 'react';
import { useForm } from "react-hook-form";
import './ContactPage.css';


const ContactPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='contact-container'>
            <h2 className='text-light text-center mb-5 p-2 bg-danger' style={{fontStyle: 'italic'}}>Contact</h2>
            <div style={{width: '600px', border: '2px solid white'}} className='m-auto p-3 rounded'>
                <h2 className='text-light text-center' style={{fontStyle: 'italic'}}>Email Us</h2>
                <form onSubmit={handleSubmit(onSubmit)} className='design text-light'>
                    <input {...register("example", {required: true})} placeholder='Your Full Name'/>
                    {errors.exampleRequired && <span>This field is required</span>}
                    
                    <input {...register("exampleRequired", { required: true })} placeholder='Your Email Address'/>
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input {...register("exampleRequired", { required: true })} placeholder='Your Email Password'/>
                    {errors.exampleRequired && <span>This field is required</span>}

                    <textarea {...register("exampleRequired", { required: true })} placeholder='Your Messages'/>
                    {errors.exampleRequired && <span>This field is required</span>}
                    
                    <input type="submit" />
                </form>
            </div>
            
        </div>
    );
};

export default ContactPage;