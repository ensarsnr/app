import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { COMPLETED_ORDER_BUTTON } from '../constants/constText';
import { destroyItem } from '../redux/slices/itemsSlice';
import success from "../assets/animation/111541-successful-tick.json"
import unSucces from "../assets/animation/unsuccess.json"
import Animations from './HomePng';

function OrderSelected() {
    const [unSuccesful, setUnSuccessful] = useState(false);
    const [successful, setSuccessful] = useState(false);

    const dispatch = useDispatch();
    const items = useSelector((state) => state.items.elements);


    const handleDestroy = (index) => dispatch(destroyItem(index));

    const handleSend = () => {
        if (items.length <= 0) {
            setUnSuccessful(true);
            setTimeout(() => setUnSuccessful(false), 1600)
        } else {
            setSuccessful(true);
            setTimeout(() => setSuccessful(false), 4200)
            console.log(items);
            //items'ın içindeki itemleri silmemiz gerekiyor.
        }
    }



    return (
        <div className='d-flex justify-content-center'>
            <div className='mt-5 w-50'>
                <ul className='list-group'>
                    {items.map((e, i) => (
                        <li
                            key={i}
                            className="
                                list-group-item mb-1 d-flex  
                                justify-content-between  
                                align-items-center
                            ">
                            {e} <span
                                onClick={() => handleDestroy(i)}
                                className='
                                    badge  
                                    destroy 
                                    rounded-pill'
                            >
                                X
                            </span>
                        </li>
                    ))}
                </ul>
                <Button
                    onClick={handleSend}
                    className='w-100'
                    variant='success'
                >
                    {COMPLETED_ORDER_BUTTON}
                </Button>
            </div>

            {successful && (
                // Koşullu render yapma işlemi eğer showAnimation true ise ekranda göstericek,
                // False olursa ekranda gözükmeyecek.
                // Sipariş getirildiğinde false'a çekip kapanır hale getiricem.
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "20%",
                        height: ""
                    }}>
                    Bekleniyor...
                    <Animations animation={success} />
                </div>
            )}
            {unSuccesful && (
                <div
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "10%",
                        height: ""
                    }}>
                    Bekleniyor...
                    <Animations animation={unSucces} />
                </div>
            )}
        </div>
    )
}

export default OrderSelected;
