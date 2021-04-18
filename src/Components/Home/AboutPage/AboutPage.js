import React from 'react';
import office from '../../../images/office.jpg';

const AboutPage = () => {
    return (
        <div className='container mt-5'>
            <h2 style={{fontStyle: 'italic'}} className='text-danger text-center'>About Us...</h2>
            <div className='row d-flex pt-5 pb-5'>
                <div className='col-md-6'>
                    <img src={office} alt='' className='img-fluid rounded'/>
                </div>
                <div className='col-md-6'>
                    <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente. voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.  Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.</p>
                </div>
            </div>
            
        </div>
    );
};

export default AboutPage;