import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Banner from './component/Banner/Banner';
import Both from './component/BothComponent/Both';
import Mid from './component/Banner/Mid';
import Footer from './component/Footer/Footer';

const A1 = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Both></Both>
            <Mid></Mid>
            <Footer></Footer>
        </div>
    );
};

export default A1;