import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import HeaderService from '../Services/Services/HeaderService/HeaderService';
import Footer from '../Home/Footer/Footer';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderService></HeaderService>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;