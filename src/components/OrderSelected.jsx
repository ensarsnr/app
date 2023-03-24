import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { addItem, destroyAllItem, destroyItem } from '../redux/itemsSlice';

function OrderSelected() {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.items.elements)
    
    //verileri siler
    const handleDestroy = (index) => dispatch(destroyItem(index));

    // siparişi göndermeye yarayan fonksiyon
    const handleSend = () => {
        if (items.length <= 0) {
            console.log("Boş gönderemezsin")
        }
        else {
            console.log(items);
            
        }}

    
    return (
    <div className='d-flex justify-content-center'>
        <div className='mt-5 w-50'>
            <ul className='list-group'>
                {items.map((e,i) => (
                    <li key={i} className= "list-group-item mb-1 d-flex  justify-content-between  align-items-center">
                        {e} <span onClick={() => handleDestroy(i)}  className='badge  destroy rounded-pill'>X</span>
                    </li>
                ))}

            </ul>
                <Button onClick={handleSend} className='w-100' variant='success'>Siparişi Tamamla </Button>
        </div>
    </div>
  )
}

export default OrderSelected