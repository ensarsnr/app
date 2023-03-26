import React, { useEffect } from 'react'
import Lottie from 'lottie-web'


// animasyonları kontrol etmek için yaptığım bir components
// her component'ta bunu kullanarak animasyonlar ekleyebilirim.
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
