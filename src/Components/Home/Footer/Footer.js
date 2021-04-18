import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ForwardIcon from '@material-ui/icons/Forward';
import CopyrightIcon from '@material-ui/icons/Copyright';
import payment from '../../../images/payment.png';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';

const Footer = () => {
    return (

        <div className='footer-container'>
            <div className='container pb-5 pt-5'>
                <div className='row'>
                    <div className='col-md-4 mt-2'>
                        <h4 style={{fontStyle: 'italic'}} className='text-light mb-3 ml-2'>Visit Our Pages</h4>
                        <div className='d-flex mb-4'>
                            <FacebookIcon style={{color: '#0652DD', fontSize: '40px', padding: "0 5px", borderRadius: '50%', margin: '0 10px', cursor: 'pointer'}} className='bg-light'></FacebookIcon>
                            <InstagramIcon style={{color: '#B53471', fontSize: '40px', padding: "0 5px", borderRadius: '50%', margin: '0 10px', cursor: 'pointer'}} className='bg-light'></InstagramIcon>
                            <LinkedInIcon style={{color: '#3498db', fontSize: '40px', padding: "0 5px", borderRadius: '50%', margin: '0 10px', cursor: 'pointer'}} className='bg-light'></LinkedInIcon>
                            <YouTubeIcon style={{color: '#EA2027', fontSize: '40px', padding: "0 5px", borderRadius: '50%', margin: '0 10px', cursor: 'pointer'}} className='bg-light'></YouTubeIcon>
                        </div>
                        <div className='ml-2'>
                            <h4 className='text-light' style={{fontStyle: 'italic'}}>Hotline</h4>
                            <p className='text-light'><PermPhoneMsgIcon></PermPhoneMsgIcon> +8801772222333</p>
                            <p className='text-light'><PermPhoneMsgIcon></PermPhoneMsgIcon> +8801772222333</p>
                            
                        </div>                       
                    </div>
                    
                    <div className='col-md-4 mt-3'>
                        <div className='d-flex text-light items' style={{cursor: 'pointer'}}>
                            <ForwardIcon></ForwardIcon>
                            <h5>Privacy Policy</h5>
                        </div>

                        <div className='d-flex text-light items' style={{cursor: 'pointer'}}>
                            <ForwardIcon></ForwardIcon>
                            <h5>Terms and Conditions</h5>
                        </div>

                        <div className='d-flex text-light items' style={{cursor: 'pointer'}}>
                            <ForwardIcon></ForwardIcon>
                            <h5>Refund Policy</h5>
                        </div>

                        <div className='d-flex text-light items' style={{cursor: 'pointer'}}>
                            <ForwardIcon></ForwardIcon>
                            <h5>Success</h5>
                        </div>

                        <div className='d-flex text-light items' style={{cursor: 'pointer'}}>
                            <ForwardIcon></ForwardIcon>
                            <h5>Address</h5>
                        </div>
                        
                    </div>
                    <div className='col-md-4 mt-2'>
                        <h4 className='text-light' style={{fontStyle: 'italic'}}>Payment Method</h4>
                        <img src={payment} alt='' className='img-fluid rounded' />
                    </div>
                    
                </div>
            </div>
            <p className='text-center text-light'>Copyright <CopyrightIcon></CopyrightIcon> April 15, 2021 Rahad_Ahmed</p>
        </div>
        
    );
};

export default Footer;