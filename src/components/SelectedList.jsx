import { TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { LABEL_SEARCH } from '../constants/constText';
import { deleteOrderItem } from '../service/service';

function SelectedList() {
    // State variables for storing data and search query
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const name = localStorage.getItem("name");

    // Fetch data from API on component mount
    useEffect(() => {
        fetchData();
    }, []);


    const deleteData = async (id) => {
        try {
            await deleteOrderItem(id);
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }


    // Function to fetch data from API
    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/getOrders");
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    // Function to filter data based on search query and user name
    const filterData = (arr, query) => {
        return arr.filter(el =>
            el.product_name.toLowerCase().includes(query.toLowerCase())
            && el.user_name.toLowerCase() === name.toLowerCase()
        );
    }

    // Filter data based on search query and user name
    const filteredData = filterData(data, search);

    // Function to render filtered data as a list
    const renderData = () => {
        return filteredData.map((e, i) => (
            <li style={{ listStyle: "none" }} key={i}>
                <div className='card mb-2'>
                    <div
                        className='card-body row'
                        style={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}
                    >
                        <div className='col-3'>{e.user_name.toUpperCase()}</div>
                        <div className='col-3 text-center'>{e.quantity === "undefined" ? 1 : e.quantity} adet {e.product_name}</div>
                        <div className='col-3' style={{ textAlign: "end" }}>{new Date(e.order_date).toLocaleString()}</div>
                        <div className='col-3 text-end'>
                            <Button variant="danger w-75 p-2" onClick={() => deleteData(e.id)}>İptal</Button>
                        </div>
                        <div className='text-end mt-2 text-danger col-5'>{e.select_coffee}</div>
                    </div>
                </div>
            </li>
        ))
    }

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
                {renderData()}
            </ul>
        </Container>
    )
}

export default SelectedList;
