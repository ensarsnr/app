import { TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { LABEL_SEARCH } from '../constants/constText';

function SelectedList() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const name = localStorage.getItem("name");

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
                                            className='card-body'
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between"
                                            }}
                                        >
                                            <div>{e.user_name.toUpperCase()}</div>
                                            <div>{e.product_name}</div>
                                            <div>{new Date(e.order_date).toLocaleString()}</div>
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