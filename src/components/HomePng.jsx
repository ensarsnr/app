import React, { useEffect } from 'react'
import Lottie from 'lottie-web'
// import caydanlik from "../assets/animation/Caydanlik.json"
// import wificoffe from "../assets/animation/wificoffee.json"


// burayı tek bir fonksiyon haline getirip her sayfada farklı animasyonu sadce
// 1 fonskiyon ile halledilebilir tek tek her yerde aynı kodlar yazılmaz
function Animations(props) {
    useEffect(() => {
        const anim = Lottie.loadAnimation({
            container: document.querySelector("#ids"),
            animationData: props.animation,
            renderer: "svg", // "canvas", "html"
            loop: true, // boolean
            autoplay: true, // boolean
        });

        // Clean up function to stop the animation when the component unmounts
        return () => anim.destroy();
    });

    return (
        <div>
            <div id="ids" ></div>
        </div>
    )
}

export default Animations
