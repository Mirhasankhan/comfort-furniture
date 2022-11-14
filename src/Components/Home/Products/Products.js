import React from 'react';
import bedroom from '../../../Images/bedroom.png';
import hall from '../../../Images/hall.png';
import kitchen from '../../../Images/kitchen.png';
import './Products.css';

const Products = () => {
    return (
        <div className="product-container">
            <h2 className="product-main">Our Products</h2>
            <p className="lorem-main">Leberkas turkey kielbasa, alcatra cupim ball tip pig biltong shank salami. Chuck fatback jerky t-bone <br />hamburger salami swine chicken cupim pork ribeye tenderloin brisket</p>
            <div className="row room-container">
                <div className="col-md-4">
                    <img src={bedroom} alt="" />
                    <h2>Bedroom Furniture</h2>
                    <p>eberkas turkey kielbasa, alcatra cupim ball tip <br />pig bielbasa, alcatra cupim ball<br />bielbasa, alcatra cupim </p>
                </div>
                <div className="col-md-4">
                    <img src={kitchen} alt="" />
                    <h2>Kitchen Furniture</h2>
                    <p>eberkas turkey kielbasa, alcatra cupim ball tip <br />pig bielbasa, alcatra cupim ball<br />bielbasa, alcatra cupim </p>
                </div>
                <div className="col-md-4">
                    <img src={hall} alt="" />
                    <h2  style={{textAlign: 'center'}}>Hall Furniture</h2>
                    <p>eberkas turkey kielbasa, alcatra cupim ball tip <br />pig bielbasa, alcatra cupim ball<br />bielbasa, alcatra cupim </p>
                </div>

            </div>

        </div>
    );
};

export default Products;