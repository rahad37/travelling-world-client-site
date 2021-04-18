import React, { useEffect, useState } from 'react';
import ShowService from '../../Services/Services/ShowService';
import AboutPage from '../AboutPage/AboutPage';
import BlogPage from '../BlogPage/BlogPage';
import ContactPage from '../ContactPage/ContactPage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ShowReview from '../ShowReview/ShowReview';

const Home = () => {
  
    return (
        <div>
            <Header/>
            <BlogPage></BlogPage>
            <ShowService></ShowService>
            <ShowReview></ShowReview>
            <ContactPage></ContactPage>
            <AboutPage></AboutPage>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;