import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/slices/itemsSlice';

function OrderMenu() {
    const dispatch = useDispatch();

    const [data, setData] = useState([]);

    // Her liste elemanı için ayrı sayaçlar eklemek için bir state nesnesi kullanıyoruz.
    const [count, setCount] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3001/products");
            setData(response.data);
        }
        fetchData();
    }, [])

    const handleClick = (e) => {
        const itemName = e.target.textContent;

        // Seçilen ürünü itemsSlice dosyasındaki elements dizisine ekliyoruz.
        dispatch(addItem(itemName));

        // Tıklanan elemanın sayaç değerini bir artırıyoruz.
        // Eğer sayaç daha önce tanımlanmamışsa, 1 değeri ile başlatıyoruz.
        setCount(prevCount => ({
            ...prevCount,
            [itemName]: (prevCount[itemName] || 0) + 1
        }));

        // Tıklanan elemanın "onClick" özelliğini kaldırıyoruz.
        e.target.onclick = null;
    }

    console.log(count)
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
                            {e.name} {count[e.name] || 0}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default OrderMenu