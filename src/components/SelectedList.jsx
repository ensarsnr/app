import React, { useEffect, useState } from 'react'
import { productData } from '../service/service'

function SelectedList() {

    const  [data, setData] = useState([]);
 
    useEffect(() => {
        productData(setData)
    }, [])

    return (
        <div>
            <ul className='m-auto'>
                {data.map((e) => (
                    <li>{e.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default SelectedList