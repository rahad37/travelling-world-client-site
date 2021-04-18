import React from 'react';
import nice from '../../../images/bg-3.jpg';


const BlogPage = () => {
    return (
        <section>
            <div>
                <div className='container mt-5 mb-5'>
                    <h2 className='App text-danger' style={{fontStyle: 'italic'}}>Blogs...</h2>
                    <div className='row mt-5'>
                    <div className='col-md-6'>
                            <img src={nice} alt='' className='img-fluid rounded'/>
                        </div>
                        <div className='col-md-6'>
                            <h3>World Tour</h3>
                            <p style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                            voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.</p>
                            <button className='btn btn-danger mb-3' style={{fontSize: '18px'}}>More Details</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPage;