import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import './Review.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useState } from 'react';


const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [items, setItems] = useState(null);
  const onSubmit = data => {
      const reviewData ={
          name: data.name,
          country: data.country,
          message: data.messages,
          img: items
      };
      const url = `https://stark-escarpment-49885.herokuapp.com/addReview`
      fetch(url, {
          method: 'POST',
          headers: {
              'content-type' : 'application/json'
          },
          body: JSON.stringify(reviewData)
      })
      .then(res => console.log('review server site response is showing'))
};

  const handleImageUpload = event =>{
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '582da06553cadb1eeeea452ae7ed102b');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setItems(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleDataSubmit = () =>{
    alert('Thank Yor!! Your Review is successfully added on home page')
  }
    return (
        <div className='review-container'>
            <Navbar></Navbar>

            <div className='art'>
                <h2 className='text-center text-light' style={{fontStyle: 'italic'}}>Customer Review...</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Your Full Name' name="name" ref={register} required/>
                    <input placeholder='Your Country Name' name="country" ref={register} required/>
                    <textarea placeholder='Your Opinion' name="messages" ref={register} required/>
                    <input className='text-light' placeholder='Your Photo' type='file' onChange={handleImageUpload} />
                    <input type="submit" value='SUBMIT' onClick={handleDataSubmit}/>
                </form>
            </div>
            
        </div>
    );
};

export default Review;