import React from 'react';
import './Testimonials.css';
import girl from '../../../Images/smiling-girl.jpg';

const Testimonials = () => {
    return (
        <div className="testi-container">
            <h1 style={{paddingTop: '100px', paddingBottom: '50px'}}>Testimonials</h1>
            <p>this is a dlfdl klfelkn oidflksdlf ikflsdlkf klsdfjdl k n oidflksdlf ikflsdlkf </p>
            <p>dd this is a dlfdl klfelkn oidflksdlf ikflsdlkf klsdfjdl kdd n oidflksdlf ikflsdlkf </p>
            <p>n oidflksdlf ikflsdlkf kfjdslkfjlsd </p>
            <img style={{height: '120px', borderRadius: '60px'}} src={girl} alt=""/>
            <h2 className="mt-3">Olivia Hopkins</h2>
            <h4 className="mt-3 client">Client</h4>
            
        </div>
    );
};

export default Testimonials;