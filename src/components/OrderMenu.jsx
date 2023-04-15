import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addItem, decrement, increment, resetCount } from '../redux/slices/itemsSlice';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button } from 'react-bootstrap';
import { HOW_COFFEE } from '../constants/constText';


function OrderMenu() {

    // HOOKS
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const numberValue = useSelector((state) => state.items.count);


    // Her liste elemanı için ayrı sayaçlar eklemek için bir state nesnesi kullanıyoruz.
    // const [count, setCount] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3001/products");
            setData(response.data);
        }
        fetchData();
    }, [])




    // Functions
    // const coffeeIncrement = () => {
    //     setNumber(number + 1)
    //     dispatch()
    // }
    // const coffeeDecrement = () => {
    //     setNumber(number - 1 < 1 ? 1 : number - 1);
    // }

    let handleClickOpen = () => { setOpen(true); };
    let handleClose = () => {
        setOpen(false)
        // dispatch(resetCount())
    };

    const completeCoffee = () => {
        dispatch(addItem("Türk Kahvesi"))
        setOpen(false);
        // dispatch(resetCount());
    }
    const handleClick = (e) => {

        if (e.target.textContent.toLowerCase() === "Türk Kahvesi".toLowerCase()) {
            handleClickOpen();
        }

        else {

            const itemName = e.target.textContent;
            // Seçilen ürünü itemsSlice dosyasındaki elements dizisine ekliyoruz.
            dispatch(addItem(itemName));

            // Tıklanan elemanın sayaç değerini bir artırıyoruz.
            // Eğer sayaç daha önce tanımlanmamışsa, 1 değeri ile başlatıyoruz.

            // setCount(prevCount => ({
            //     ...prevCount,
            //     [itemName]: (prevCount[itemName] || 0) + 1
            // }));

        }
    }

    //console.log(count) console'da gösteriyor count'un değerini
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
            {open && (
                <div>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>
                            <h1 className='text-center'>Kahve Adeti</h1>
                        </DialogTitle>
                        <DialogContent style={{ width: "600px" }}>
                            <div className='row'>
                                <div className='text-center col-6'>
                                    <h1>Adet: {numberValue}</h1>
                                </div>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between"
                                }} className='row text-center col-6'>
                                    <Button variant='success' onClick={() => dispatch(increment())} style={{ width: "45%" }} className='col-6'>+</Button>
                                    <Button variant='danger' onClick={() => dispatch(decrement())} style={{ width: "45%" }} className='col-6'>-</Button>
                                </div>
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>İptal</Button>
                            <Button onClick={completeCoffee}>Tamamla</Button>
                            <div id='deneme'></div>
                        </DialogActions>
                    </Dialog>
                </div>
            )
            }
        </div >
    )
}

export default OrderMenu