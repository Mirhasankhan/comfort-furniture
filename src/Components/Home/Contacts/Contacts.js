import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className="contacts-container">
            <div className="row contacts-bg">
                <div className="col-md-4 contacts-detail">
                    <p>CALL US TODAY:</p>
                    <h4 className="set-contacts">+8 (800) 678 2569</h4>
                </div>
                <div className="col-md-4 contacts-detail">
                    <p>OUR LOCATION:</p>
                    <h4 className="set-contacts">169 Adams Ave, Miami</h4>
                </div>
                <div className="col-md-4 contacts-detail">
                    <p>OPEN HOURS:</p>
                    <h4 className="set-contacts">Mon - Sat 8 am - 6 pm</h4>
                </div>

            </div>
            <div>
                <h1 className="main-container">Quality Doesn't Have <br />To Be Expensive</h1>
                <p className="contacts-detail">Comfort+ first opened its doors in 2006, in Miami, Florida. Since our inception, we have worked meticulously to improve both our <br/>internal processes and our outward appearance.</p>
                <button className='btn btn-info mt-5'>MORE INFORMATION</button>
            </div>
        </div>
    );
};

export default Contacts;