import { TextField } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { LABEL_SEARCH } from '../constants/constText';

function SelectedList() {
    const [data, setData] = useState([]);
    const deneme = localStorage.getItem("name");
    const [search, setSearch] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3001/getOrders");
            setData(response.data);
        }
        fetchData();
    }, [])
    
    return ( 
        <Container>
            {/* BOOSTRAP'TEN ÇEKERİZ */}
            {/* SCROOL EKLERİZ SAYFA DEĞİLDE SADECE LİSTELER AŞAĞIYA DOĞRU KAYAR */}
            {/* Yanına tarihi ve kaç adet alınmış onları da ekleriz.. */}
            {/* Bugün alınanlar ve geçmiş diye 2 panet olsun, eklenebilir. */}
            {/* yeşil renkte sipariş bekleniyor kırmızı renk ise sipariş geldi diyelim */}
            {/* Veya direkt siparişler ve tarihler yer alsında yeter. */}
            <div style={{ textAlign: "center" }} className="mb-5">
                <TextField value = {search} onChange={(e) => setSearch(e.target.value)} className='bg-light' label={LABEL_SEARCH} />
                <div>{search}</div>
            </div>
            <ul>
            {
                data.map((e, i) => {
                    if (deneme.toLowerCase() === e.user_name.toLowerCase()) {
                        return (
                            <li style={{listStyle:"none"}}>
                                <div className='card mb-2' key={i}>
                                <div className='card-body' style={{ display: "flex", justifyContent: "space-between" }}>
                                    <div>{e.user_name.toUpperCase()}</div> 
                                    <div>{e.product_name}</div>
                                    <div>{new Date(e.order_date).toLocaleString()}</div>   
                                </div>
                            </div>
                            </li>
                        )
                    } else {
                        return null;
                    }
                })
            }
            </ul>
        </Container>
    )
}

export default SelectedList
