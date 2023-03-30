import React from 'react'
import Animations from './Animations'
import coffee from '../assets/animation/wificoffee.json'
import { Container } from 'react-bootstrap'
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
            </div>
        </Container >
    )
}

export default WaitingAnimation