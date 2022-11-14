import React from 'react';
import './WorkingTeam.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartShopping, faCartShoppings} from '@fortawesome/free-solid-svg-icons'

const WorkingTeam = () => {
    return (
        <div className="work-container">
            <h2 style={{paddingBottom:'30px', paddingTop: '130px'}}>Our Team of Professionals</h2>
            <p>Picanha spare ribs pariatur velit pork sirloin. Consequat capicola pastrami non, minim ribeye meatloaf<br /> consectetur pork loin ground round bacon quis t-bone labore.</p>
            <div className="row" style={{paddingTop: '100px'}}>
                <div className="col-md-4">
                    <h2 className="rose">Beatrice Rose</h2>
                    <p style={{color: '#A5DDD5'}}>Director</p>
                    <p>meatball landjaeger ball tip kielbasa bacon jerky <br />meatball landjaeger ball tip kielbasa bacon<br />ball tip kielbasa </p>
                </div>
                <div className="col-md-4">
                    <h2 className="rose">Ruby Ruiz</h2>
                    <p style={{color: '#A5DDD5'}}>Manager</p>
                    <p>meatball landjaeger ball tip kielbasa bacon jerky <br />meatball landjaeger ball tip kielbasa bacon<br />ball tip kielbasa </p>

                </div>
                <div className="col-md-4">
                    <h2 className="rose">Lucy Garrett</h2>
                    <p style={{color: '#A5DDD5'}}>Designer</p>
                    <p>meatball landjaeger ball tip kielbasa bacon jerky <br />meatball landjaeger ball tip kielbasa bacon<br />ball tip kielbasa </p>

                </div>
               
            </div>
        </div>
    );
};

export default WorkingTeam;