import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({name, image, char_id}) => {
    return (
        <div className="col-4">
            <div className="card mb-4 box-shadow">
                <img className="card-img-top img-fluid" src={image} alt={name} />
                <div class="card-body">
                    <h5 className="card-title">{name}</h5>
                    <Link to={`/${char_id}`}>More</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;
