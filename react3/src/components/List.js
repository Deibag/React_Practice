import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

export default function List(props) {
    return (
        <div>
            {props.values.map(task => {
                return (
                    <div key={task.id}>
                        <p>
                            {task.task} {task.desc}
                        </p>
                        <button onClick={() =>{
                            props.deleteTask(task.id)
                        }}><FaTrashAlt /></button>
                        </div>
                )
            })}
        </div>
    )
}
