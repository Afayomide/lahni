import { useSwiper } from "swiper/react";
import "./clothes.css"

export function SwiperNavButtons () {
    const swipernav = useSwiper()
     const back ="<"
     const front= ">"
    return(
        <div className="swiper-buttons">
        <button onClick={()=>swipernav.slidePrev()}>{back}</button>
        <button onClick={()=>swipernav.slideNext()}>{front}</button>
        </div>
    )
}