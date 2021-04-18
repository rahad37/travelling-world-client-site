import React, { useEffect, useState } from 'react';
import './ReviewPage.css';

const ReviewPage = ({item}) => {

    return (
                <div className='col-md-4 nice'>
                    <img src={item?.img} alt='' className='img-fluid' style={{width: '100px', height: '100px', borderRadius: '50%'}}/>
                    <h4>{item?.name}</h4>
                    <h6>{item?.country}</h6>
                    <p>{item?.message}</p>
                </div>
     
    );
};

export default ReviewPage;