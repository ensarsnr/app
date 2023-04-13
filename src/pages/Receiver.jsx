import { Link } from 'react-router-dom'
import AppBar from '../components/AppBar'
import React, { useEffect, useState } from 'react'
import { EXIT_APPBAR, FOOD_MENU, LABEL_SEARCH, WELCOME_USER } from '../constants/constText'
import { TextField } from '@mui/material'
import axios from 'axios'
import { Button, Container } from 'react-bootstrap'

function Receiver() {
    const name = localStorage.getItem("name");
    const surname = localStorage.getItem("surname")
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3001/getOrders");
            setData(response.data);
        }
        fetchData();
    }, [])

    const handleOrderButtonClick = async (id) => {
        const newData = data.map(e => {
            if (e.id === id) {
                // Tıklanan elemanın is_order property'sini güncelle
                return { ...e, is_order: "Verildi" };
            } else {
                return e;
            }
        });

        setData(newData);
    }

    const filteredData = data.filter(e => e.user_name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <AppBar
                element={
                    <div>
                        <Link to={"/"} className="text-light text-decoration-none">
                            {EXIT_APPBAR}
                        </Link>
                    </div>}
                name={name ? <div className='text-center'>{WELCOME_USER}{name.toUpperCase()} {surname.toUpperCase()}</div> : ""}
                foodMenu={
                    <div className='float-end'>
                        <Link to="/foodMenu" className="text-light text-decoration-none">
                            {FOOD_MENU}
                        </Link>
                    </div>
                }
            />
            <Container className='mt-5'>
                <div style={{ textAlign: "center" }} className="mb-5">
                    <TextField
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className='bg-light'
                        label={LABEL_SEARCH}
                    />
                </div>
                <ul style={{ display: "flex", flexDirection: "column-reverse" }} >
                    {
                        filteredData.map((e, i) => {
                            if (localStorage.getItem("department") === "Çay Ocağı(VIP)") {
                                if (e.user_department === "AR-GE" || e.user_department === "Muhasebe") {
                                    return (
                                        <li style={{ listStyle: "none" }} key={i}>
                                            <div className='card mb-2'>
                                                <div
                                                    className='card-body'
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-between"
                                                    }}
                                                >
                                                    <div className=' col-2'>
                                                        {e.user_name.toUpperCase()}
                                                        <div className='text-danger' >({e.user_department})</div>
                                                    </div>
                                                    <div className='col-2'>
                                                        {e.quantity === "undefined" ? 1 : e.quantity} adet {e.product_name}
                                                    </div>

                                                    <div className='col-2'>{new Date(e.order_date).toLocaleString()}</div>

                                                    <div className='col-2'>
                                                        <Button className='w-100' onClick={() => handleOrderButtonClick(e.id)}
                                                            variant={
                                                                e.is_order === "Bekleniyor" ? "success" : "danger"
                                                            }
                                                        >
                                                            {e.is_order}
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                            } else {
                                if (e.user_department === "ÜR-GE") {
                                    return (
                                        <li style={{ listStyle: "none" }} key={i}>
                                            <div className='card mb-2'>
                                                <div
                                                    className='card-body'
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-between"
                                                    }}
                                                >
                                                    <div className=' col-2'>
                                                        {e.user_name.toUpperCase()}
                                                        <div className='text-danger' >({e.user_department})</div>
                                                    </div>
                                                    <div className='col-2'>{e.quantity === "undefined" ? 1 : e.quantity} adet {e.product_name}</div>
                                                    <div className='col-2'>{new Date(e.order_date).toLocaleString()}</div>
                                                    <div className='col-2'>
                                                        <Button variant={
                                                            e.is_order === "Bekleniyor" ? "success" : "danger"
                                                        } className='w-100' onClick={() => handleOrderButtonClick(e.id)}>{e.is_order}</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                            }
                        }

                        )
                    }
                </ul>
            </Container>
        </div>
    )
}

export default Receiver;
