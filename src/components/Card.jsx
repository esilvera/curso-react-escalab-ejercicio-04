import React from 'react';
import imageDefault from '../assets/calamar-default.jpg';

function Card(props) {
    return(
            <div className="card">
                <div className="content">
                    {/* <p className="card-result-number">Result # {resultNumber+1}</p> */}
                    <img src={props.imageUrl? props.imageUrl : imageDefault} alt="no hay imagen" width='200px' height='250px' />
                    <h3>{props.productName}</h3>
                    <p>{props.capacity}</p>
                    <p>Costo {props.cost}</p>
                    <p>({props.description})</p>
                </div>
            </div>
    );
};

export default Card;