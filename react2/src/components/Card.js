import React from 'react'

export default function Card(props) {
    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.taskContent}</p>
                </div>
                <button type="button" className={props.color} onClick={props.taskDone}>{props.button}</button>
            </div>
        </div>
    )
}
