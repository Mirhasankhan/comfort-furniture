import React from 'react';
import './Request.css';

const Request = () => {
    return (
        <div className="request-container">
            <h2 style={{paddingTop: '100px', paddingBottom: '50px'}}>Request a Call Back</h2>
           <div className="input-container">
           <input className="m-3" style={{height: '50px', width: '300px'}} type="text" id="fname" name="fname" placeholder="Full Name"/> 
            <input className="m-3" style={{height: '50px', width: '300px'}} type="text" id="fname" name="fname" placeholder="Phone Number"/> 
            <input className="m-3" type="password" style={{height: '50px', width: '300px'}} id="fname" name="fname" placeholder="Email Address"/> <br/>
            <input className="m-3" style={{height: '120px', width: '963px'}} type="text" id="fname" name="fname" placeholder="Message"/> <br/>
            <button className="send-button">Send Now!</button>
           </div>
        </div>
    );
};

export default Request;