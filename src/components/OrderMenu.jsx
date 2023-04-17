import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addItem, decrement, increment, turkKahvesi } from '../redux/slices/itemsSlice';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Button } from 'react-bootstrap';


function OrderMenu() {
    // HOOKS
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const numberValue = useSelector((state) => state.items.count);

    const coffeeChoice = ["Seçiniz", "Şekerli", "Orta Şekerli", "Şekersiz"]

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3001/products");
            setData(response.data);
        }
        fetchData();
    }, [])

    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false) };

    const completeCoffee = () => {
        dispatch(addItem("Türk Kahvesi"))
        setOpen(false);
        const selectedCoffees = Array.from({ length: numberValue }).map((_, i) => {
            const selectElement = document.getElementById(`coffee-select-${i}`); // Seçili kahve çeşidini alma
            console.log(`Kahve ${i + 1}:`, selectElement.value); // Seçilen kahve çeşidini console.log ile yazdırma
            dispatch(turkKahvesi(selectElement.value));
            return selectElement.value;
        });
        console.log("Seçilen kahve çeşitleri:", selectedCoffees); // Seçilen kahve çeşitlerini console.log ile yazdırma
    }

    const handleClick = (e) => {
        if (e.target.textContent.toLowerCase() === "türk kahvesi") {
            handleClickOpen();
        } else {
            const itemName = e.target.textContent;
            // Seçilen ürünü itemsSlice dosyasındaki elements dizisine ekliyoruz.
            dispatch(addItem(itemName));
            console.log("Seçilen Kahve çeşidi:", itemName)
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
                            <div>
                                <h2 className='text-center'>Kahve Adeti</h2>
                            </div>
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
                                {Array.from({ length: numberValue }).map((_, i) => (
                                    <div className='col-6' key={i}>
                                        <h4 className='text-center mt-2'>{i + 1}.</h4>
                                        <select
                                            className="mt-3 form-select form-select-lg w-75 m-auto"
                                            id={`coffee-select-${i}`} // id propertysini ekleyerek her birini benzersiz hale getirme
                                        >
                                            {coffeeChoice.map((e) => (
                                                <option key={e}>{e}</option>
                                            ))}
                                        </select>
                                    </div>
                                ))}
                            </div>

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>İptal</Button>
                            <Button onClick={completeCoffee}>Tamamla</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            )}
        </div >
    )
}

export default OrderMenu