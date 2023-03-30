import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/slices/itemsSlice';



function OrderMenu() {
    const dispatch = useDispatch();
    
    
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3001/products");
            setData(response.data);
        }
        fetchData();
    },[])
    
    const handleClick = (e) => {
        console.log(e.target.textContent)
        //diziden seçtiğimiz ürünleri itemsSlice dosyasında ki elements'in içine
        // addItem actionu ile diziye pushluyoruz.
        dispatch(addItem(e.target.textContent))
    }

    // dizideki elemanları ekranda gösterip tıklama özelliği ekliyoruz.
    // elemanlara tıklandıkça dispatch ile hazırladıüımız slice'a gönderiyoruz.
    return (
        <div className='d-flex justify-content-center'>
            <div className='mt-5 w-50'>
                <ul className='list-group'>
                    {data.map((e, i) => (
                        <li
                            style={{ cursor: "pointer" }}
                            key={i}
                            onClick={handleClick}
                            className="list-group-item
                                mb-1
                                list-group-item-action 
                                d-flex 
                                justify-content-between  
                                align-items-center"
                        >
                            {e.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default OrderMenu