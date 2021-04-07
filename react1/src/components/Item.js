import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Item = ({match}) => {

    const [value, setValue] = useState([]);

    useEffect(() => {
        fetchValue();
    }, [])

    const fetchValue = async() => {
        const result = await axios(
            `https://www.breakingbadapi.com/api/characters/${match.params.id}`
        );

        setValue(...result.data);
    }

    return (
        <div>
            <h1>About: {value.name}</h1>
            <p>
                <img src={value.img} alt=""/>
            </p>
        </div>
    )
    
}

export default Item