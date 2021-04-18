import React, { useEffect, useState } from 'react';
import ServicePage from './ServicePage';
import './ServicePage.css'


const ShowService = () => {

const [elements, setElements] = useState([]);

useEffect(()=>{
    fetch('https://stark-escarpment-49885.herokuapp.com/services')
    .then(res => res.json())
    .then(data => setElements(data))
},[])

    return (
        <div className='beauty'>
             <h2 className='text-light text-center bg-danger mb-4 p-2' style={{fontStyle: 'italic'}}>Our Services</h2>
            <div className='container text-center'>
           

                <div className='row mt-5'>
                    {
                        elements.map(element =><ServicePage element={element}></ServicePage>)
                    }

                    
                </div>
            </div>
        </div>
        
    );
};

export default ShowService;