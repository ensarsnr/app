import React, { useEffect } from 'react'
import Lottie from 'lottie-web'
import caydanlik from "../assets/animation/Caydanlik.json"

function HomePng() {
    useEffect(() => {
        const anim = Lottie.loadAnimation({
            container: document.querySelector("#caydanlik"),
            animationData: caydanlik,
            renderer: "svg", // "canvas", "html"
            loop: true, // boolean
            autoplay: true, // boolean
        });

        // Clean up function to stop the animation when the component unmounts
        return () => anim.destroy();
    }, []);

    return (
        <div>
            <div id='caydanlik' ></div>
        </div>
    )
}

export default HomePng
