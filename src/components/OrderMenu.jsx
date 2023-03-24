import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/itemsSlice';

function OrderMenu() {
    const dispatch = useDispatch();
    const items = ["Kahve","Soda","Ihlamur","Çay","Sıcak Su"]
    
    const handleClick = (e) => {
        console.log(e.target.textContent)
        dispatch(addItem(e.target.textContent))
    }
    
    
    return (
        <div className='d-flex justify-content-center'>
            <div className='mt-5 w-50'>
                <ul className='list-group'>
                    {items.map((e, i) => (
                        <li 
                        style={{cursor: "pointer"}}
                        key={i}
                        onClick={handleClick} 
                        className=
                            "list-group-item mb-1 list-group-item-action d-flex  justify-content-between  align-items-center"
                        >
                            {e}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default OrderMenu