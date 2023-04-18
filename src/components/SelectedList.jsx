import { TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { LABEL_SEARCH } from '../constants/constText';
import { useSelector } from 'react-redux';

function SelectedList() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const name = localStorage.getItem("name");
    useSelector((state) => state.items.kahve);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3001/getOrders");
            setData(response.data);
        }
        fetchData();
    }, [])

    const filteredData = data.filter(e => e.product_name.toLowerCase().includes(search.toLowerCase()));

    return (
        <Container>
            {/* SEARCH BOX */}
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
                        if (name.toLowerCase() === e.user_name.toLowerCase()) {
                            return (
                                <li style={{ listStyle: "none" }} key={i}>
                                    <div className='card mb-2'>
                                        <div
                                            className='card-body row'
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between"
                                            }}
                                        >
                                            <div className='col-4'>{e.user_name.toUpperCase()}</div>
                                            <div className='col-4 text-center'>{e.quantity === "undefined" ? 1 : e.quantity} adet {e.product_name}</div>
                                            <div className='col-4' style={{ textAlign: "end" }}>{new Date(e.order_date).toLocaleString()}</div>
                                            <div className='text-center mt-2 text-danger col-12'>{e.select_coffee}</div>
                                        </div>
                                    </div>
                                </li>
                            )
                        }
                    })
                }
            </ul>
        </Container>
    )
}

export default SelectedList