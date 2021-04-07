import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Search from './Search'



export default function Main() {

  const [items, setItems] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(
                `https://www.breakingbadapi.com/api/characters?name=${query}`
            )
            setItems(result.data)
        }
        fetchItems()
    }, [query])


  return (
    <div>
      <Search getQuery={(q) => setQuery(q)} />
      
    <div className="row">
      { items.map(value => (
        <Card key={value.char_id}
          name={value.name}
          image={value.img}
          char_id={value.char_id}
          />
        ))}
    </div>
    </div>
  )
}

