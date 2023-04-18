import { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { COMPLETED_ORDER_BUTTON, LIMITED_ERROR } from '../constants/constText';
import { destroyItem, removeAllItems } from '../redux/slices/itemsSlice';
import success from "../assets/animation/111541-successful-tick.json"
import unSucces from "../assets/animation/unnsuccess.json"
import Animations from './Animations';
import { useNavigate } from 'react-router';
import { selectOrder } from '../service/service';

function OrderSelected() {

    //selector ile buraya çekebiliriz count verisini oradan da burada gösterir database'e kaydedebiliriz.
    // onu eve gidince düşünürsün..
    const menuItemsLength = 4;
    const [unSuccessful, setUnSuccessful] = useState(false);
    const [successful, setSuccessful] = useState(false);
    const [show, setShow] = useState(false);
    const [itemCounts, setItemCount] = useState({});
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const selectedCoffe = useSelector((state) => state.items.kahve);
    const items = useSelector((state) => state.items.elements);
    const coffeeCount = useSelector((state) => state.items.count);

    const handleDestroy = (index) => {
        dispatch(destroyItem(index));
        setItemCount((prev) => ({
            ...prev,
            [items[index]]: 0
        }));
    };


    const handleSend = (e) => {
        console.log(e.target);
        if (items.length <= 0) {
            setUnSuccessful(true);
            setTimeout(() => setUnSuccessful(false), 3900);
        } else if (items.length <= menuItemsLength) {
            setSuccessful(true);
            setTimeout(() => {
                setSuccessful(false);
                navigate("/waiting");
            }, 3400);
            dispatch(removeAllItems());

            items.forEach((item, index) => {
                const itemCount = itemCounts[item] || 1;
                if (item.toLowerCase() === "türk kahvesi".toLowerCase()) {
                    selectOrder(item, localStorage.getItem("name"), String(coffeeCount), "Bekleniyor", localStorage.getItem("department"), selectedCoffe);
                }
                if (item.toLowerCase() !== "türk kahvesi".toLowerCase()) {
                    selectOrder(item, localStorage.getItem("name"), String(itemCount), "Bekleniyor", localStorage.getItem("department"));
                }
            });

        } else {
            setShow(true);
        }
    };


    const decrementss = (e) => {
        const newItemCounts = { ...itemCounts };
        newItemCounts[e] = newItemCounts[e] ? newItemCounts[e] - 1 : 1;
        setItemCount(newItemCounts);
    };

    const increment = (e) => {
        const newItemCounts = { ...itemCounts };
        newItemCounts[e] = newItemCounts[e] ? newItemCounts[e] + 1 : 1;
        setItemCount(newItemCounts);
    };

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-12 mt-5 w-50">
                <ul className="list-group">
                    {items.map((e, i) => (
                        <li
                            key={i}
                            className="row list-group-item mb-1 d-flex align-items-center"
                        >
                            <div style={{ textAlign: "start" }} className="col-10">
                                {e} {
                                    e === "Türk Kahvesi" ?
                                        `(${coffeeCount || 1}) ${selectedCoffe}`
                                        : (`(${itemCounts[e] || 1})`)}
                            </div>
                            <div className="col-2">
                                {e === "Türk Kahvesi" ? (
                                    // Türk Kahvesi ise artış ve eksilme kısmını eklemeyin
                                    <div
                                        className="badge destroy rounded-pill"
                                    >

                                        <Button onClick={() => handleDestroy(i)} variant='secondary'>X</Button>
                                    </div>
                                ) : (
                                    // Diğer durumlarda artış ve eksilme kısmını ekleyin
                                    <div style={{ position: "relative", right: "55px" }} class="btn-group w-100" role="group">
                                        <button onClick={() => increment(e)} type="button" class="btn btn-secondary">+</button>
                                        <button onClick={() => decrementss(e)} type="button" class="btn btn-secondary">-</button>
                                        <button onClick={() => handleDestroy(i)} type="button" class="btn btn-secondary">x</button>
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}

                </ul>
                <Button
                    onClick={handleSend}
                    className='w-100 mt-3'
                    variant='success'
                >
                    {COMPLETED_ORDER_BUTTON}
                </Button>
            </div>
            <div className='mt-5 col-12 '>
                {show && (
                    <Alert onClose={() => setShow(false)} variant="danger" dismissible>
                        {LIMITED_ERROR}
                    </Alert>
                )}
            </div>
            {
                successful && (
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
                )
            }
            {
                unSuccessful && (
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
                )
            }
        </div >
    )
}

export default OrderSelected;