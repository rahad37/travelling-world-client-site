import React, { useEffect, useState } from 'react';
import ReviewPage from '../ReviewPage/ReviewPage';

const ShowReview = () => {

    const [info, setInfo] = useState([]);
    
    useEffect(()=>{
    fetch('https://stark-escarpment-49885.herokuapp.com/reviews')
    .then(res => res.json())
    .then(data => setInfo(data))
},[])
    return (
        <div>
            <div className='container text-center'>
                    <h2 className='text-danger mb-4 mt-5' style={{fontStyle: 'italic'}}>Client's Reviews</h2>
                <div className='row'>
                    {
                        info.map(item =><ReviewPage item={item}></ReviewPage>)
                    }
                </div>
            </div>
        </div>
        
        
    );
};

export default ShowReview;