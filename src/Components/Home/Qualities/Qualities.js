import React from 'react';
import cutegirl from '../../../Images/about.png';
import './Qualities.css';

const Qualities = () => {
    return (
        <div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <img src={cutegirl} alt="" />
                </div>
                <div className="col-md-6">
                    <h1 style={{textAlign:'left'}} className="mt-5">Why You Should Choose Us?</h1>
                    <h6 className="mt-5" style={{textAlign:'left'}}>Drumstick pastrami picanha kevin, pork chop shoulder andouille ground round<br /> pancetta fatback.</h6>

                    <p className="mt-3" style={{textAlign:'left'}}>Chuck pastrami shank prosciutto, turkey salami capicola venison tri-tip jowl. Sausage cupim beef, meatball landjaeger ball tip kielbasa bacon jerky porchetta venison tri-tip cow ham shank. Cupim bresaola drumstick, pork belly biltong shoulder strip steak frankfurter bacon short loin. Pork loin chicken ground round, ham hock meatball drumstick t-bone.</p>
                    <div className="d-flex mt-5">
                        <div style={{textAlign:'left'}}>
                            <h3>Pleasant Staff</h3>
                            <h3>Convenient Location</h3>
                            <h3>Non-standard Offers</h3>
                        </div>
                        <div  className="ms-5" style={{textAlign:'left'}}>
                            <h3>Best Quality</h3>
                            <h3>Individual Design</h3>
                            <h3>Very Fast Delivery</h3>
                        </div>
                    </div>
                    <button className="read-button">READ MORE</button>
                </div>


            </div>

        </div>
    );
};

export default Qualities;