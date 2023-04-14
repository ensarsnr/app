import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/slices/itemsSlice';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import { HOW_COFFEE } from '../constants/constText';


function OrderMenu() {

    // HOOKS
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const deneme = useSelector((state) => state.items.count);
    console.log(deneme);


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
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };


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
                        <DialogTitle>{HOW_COFFEE}</DialogTitle>
                        <DialogContent style={{ width: "600px" }}>
                            <TextField />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleClose}>Subscribe</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            )
            }
        </div >
    )
}

export default OrderMenu