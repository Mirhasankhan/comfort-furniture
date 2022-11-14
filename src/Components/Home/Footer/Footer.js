import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="row  footer-content">
                <div className="col-md-4">
                    <h2 href="#home">COMFORT <strong style={{ color: 'orange' }}>+</strong> <br />FURNITURE COMPANY</h2>
                    <p>Hamburger short loin pastrami ribeye, doner land<br /> andouille pork loin short ribs ham hock hant pig<br /> prosciut swine biltong meatloaf.</p>
                    <p>169 Adams Ave, Miami, Florida, USA</p>
                    <p> +8 (800) 678 2569</p>
                    <p> example@examplecom</p>
                </div>
                <div className="col-md-4">
                    <h2 style={{marginBottom: '50px'}}>Recent Posts</h2>
                    <p>Cupim bacon short ribs picanha</p>
                    <p style={{ color: 'orange' }}>August 7, 2017</p>
                    <p>Cupim bacon short ribs picanha</p>
                    <p style={{ color: 'orange' }}>August 7, 2017</p>
                    <p>Cupim bacon short ribs picanha</p>
                    <p style={{ color: 'orange' }}>August 7, 2017</p>
                </div>
                <div className="col-md-4">
                    <h2>Subscribe</h2>
                    <input type="Email" placeholder="Email Address"/>
                    <p>Enter Email here to be updated. We promise not <br/>to send you spam!</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;