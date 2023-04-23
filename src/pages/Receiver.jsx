import { Link } from 'react-router-dom'
import AppBar from '../components/AppBar'
import React, { useEffect, useState } from 'react'
import { EXIT_APPBAR, FOOD_MENU, LABEL_SEARCH, WELCOME_USER } from '../constants/constText'
import { TextField } from '@mui/material'
import axios from 'axios'
import { Button, Container } from 'react-bootstrap'

function Receiver() {
    // Getting user's name and surname from local storage
    const name = localStorage.getItem("name");
    const surname = localStorage.getItem("surname");

    // Setting up state for search bar and data fetching
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    // Fetching data from backend and updating state
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3001/getOrders");
            if (response.data !== data) {
                setData(response.data);
            }
        }
        fetchData();
    }, [data]);

    // Updating is_order field of the selected order in the backend
    const handleOrderButtonClick = async (id) => {
        const newData = data.map(e => {
            if (e.id === id) {
                return { ...e, is_order: "Verildi" };
            } else {
                return e;
            }
        });

        setData(newData);

        try {
            const response = await axios.post('http://localhost:3001/updateOrder', {
                id: id,
                is_order: 'Verildi'
            });
            console.log(response.data);
        } catch (error) {
            console.log(`Error updating order: ${error}`);
        }
    };

    // Filtering data based on search input
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
                                                    <div className=' col-3'>
                                                        {e.user_name.toUpperCase()}
                                                        <div className='text-danger mt-3' >({e.user_department})</div>
                                                    </div>
                                                    <div className='col-3'>
                                                        <div className='row'>
                                                            <div className='col-12'>
                                                                {e.quantity === "undefined" ? 1 : e.quantity} adet {e.product_name}</div>
                                                        </div>
                                                        <div className='col-12 mt-3 text-danger'>
                                                            {e.select_coffee}
                                                        </div>
                                                    </div>
                                                    <div className='col-3'>{new Date(e.order_date).toLocaleString()}</div>
                                                    <div className='mt-3 col-3'>
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
                        })}
                </ul>
            </Container>
        </div>
    )
}

export default Receiver;
