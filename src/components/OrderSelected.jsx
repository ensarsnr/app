import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { COMPLETED_ORDER_BUTTON } from '../constants/constText';
import { destroyItem, removeAllItems } from '../redux/slices/itemsSlice';
import success from "../assets/animation/111541-successful-tick.json"
import unSucces from "../assets/animation/unnsuccess.json"
import Animations from './Animations';
import { useNavigate } from 'react-router';

function OrderSelected() {
    const [unSuccesful, setUnSuccessful] = useState(false);
    const [successful, setSuccessful] = useState(false);

    const navigate = useNavigate();


    const dispatch = useDispatch();
    // itemsSlice'dan aldığımız verileri bu hook sayesinde bu component'e çekiyoruz.
    // items değişkenine atandı.
    const items = useSelector((state) => state.items.elements);

    // çarpılara tıklandığında item'ın silinmesine yarayan fonksiyon
    const handleDestroy = (index) => dispatch(destroyItem(index));

    const handleSend = () => {
        if (items.length <= 0) {
            // hiç bir öğe seçilmediyse bu koşul harekete geçiyor ve
            // başarısız oldun (X) animasyonu harekete geçiyor.
            setUnSuccessful(true);
            setTimeout(() => setUnSuccessful(false), 3900)
        } else {
            // bu koşulda ise menuden seçim yapıldıysa ve sipariş için
            // button'a tıklandıysa ekranda başarılı oldu gibisinden
            // yeşil bir animasyon çıkıyor. Ve bekleme sayfasına yönlendiriyor.
            setSuccessful(true);
            setTimeout(() => {
                setSuccessful(false)
                navigate("waiting")
            }, 3400)
            console.log(items);
            dispatch(removeAllItems())

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
                    <Animations animation={unSucces} />
                </div>
            )}
        </div>
    )
}

export default OrderSelected;
