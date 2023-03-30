import React from 'react'
import Animations from './Animations'
import coffee from '../assets/animation/wificoffee.json'
import { Container } from 'react-bootstrap'
import { TextField } from '@mui/material'
import { LABEL_SEARCH } from '../constants/constText'
// import space from '../assets/animation/space.json'


function WaitingAnimation() {
    return (
        <Container >
            <div
                style={{
                    width: "450px",
                    margin: "auto"
                }}
            >
                <Animations animation={coffee} />
                {/* BOOSTRAP'TEN ÇEKERİZ */}
                {/* SCROOL EKLERİZ SAYFA DEĞİLDE SADECE LİSTELER AŞAĞIYA DOĞRU KAYAR */}
                {/* Yanına tarihi ve kaç adet alınmış onları da ekleriz.. */}
                {/* Bugün alınanlar ve geçmiş diye 2 panet olsun, eklenebilir. */}
                {/* yeşil renkte sipariş bekleniyor kırmızı renk ise sipariş geldi diyelim */}
                {/* Veya direkt siparişler ve tarihler yer alsında yeter. */}
                <div>
                    <div style={{ textAlign: "center" }} className="mb-5">
                        <TextField label={LABEL_SEARCH} />
                    </div>
                    <ul>
                        <li>
                            asldkfiadsl
                        </li>
                    </ul>
                </div>
            </div>
        </Container >
    )
}

export default WaitingAnimation