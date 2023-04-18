import React, { useEffect } from 'react'
import Lottie from 'lottie-web'

// Bu component, animasyonları kontrol etmek için kullanılır.
// Her component'ta kullanarak animasyonlar ekleyebiliriz.
function Animations(props) {
    useEffect(() => {
        // Lottie.loadAnimation() fonksiyonu, animasyonu oluşturur ve bir nesne olarak döndürür.
        const anim = Lottie.loadAnimation({
            container: document.querySelector("#ids"), // animasyonun render edileceği DOM elementinin seçicisi
            animationData: props.animation, // animasyonun JSON verisi
            renderer: "svg", // "canvas", "html" gibi farklı render modlarından biri
            loop: true, // animasyonun döngü yapmasını belirleyen boolean
            autoplay: true, // animasyonun otomatik başlamasını belirleyen boolean
        });

        // Component unmount olduğunda animasyonu durdurmak için clean-up fonksiyonu
        return () => anim.destroy();
    });

    return (
        // animasyonun render edileceği div elementi
        <div>
            <div id="ids" ></div>
        </div>
    )
}

export default Animations
