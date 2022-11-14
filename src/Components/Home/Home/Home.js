import React from 'react';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Qualities from '../Qualities/Qualities';
import Request from '../Request/Request';
import Testimonials from '../Testimonials/Testimonials';
import WorkingTeam from '../WorkingTeam/WorkingTeam';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Contacts></Contacts>
            <Qualities></Qualities>
            <Products></Products>
            <WorkingTeam></WorkingTeam>
            <Request></Request>
            <Testimonials></Testimonials>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;