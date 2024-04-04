import React, { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {EffectFade, Autoplay, Pagination, Navigation}  from 'swiper/modules'; 
import { SwiperNavButtons } from './swipernav';
import ShirtData from "../shirt/shirtsdata"
import CapsData from "../caps/capsdata"
import PantsData from "../trouser/trousersdata"
import { cartList} from "./clothes";
import { CartContext } from "../context"
import { ItemContext } from "../filecontext"


var uniqueArray = []

function removeDuplicates(books) { 


    var jsonObject = books.map(JSON.stringify);
    var uniqueSet = new Set(jsonObject);
    uniqueArray = Array.from(uniqueSet).map(JSON.parse);
    console.log(uniqueArray);
    
}


function AboutShirt () {

    const {id} = useParams()
const combined = [...ShirtData,...CapsData,...PantsData]
    const each = combined.find((cloth) =>cloth.id== id) 

    const {items} = useContext(ItemContext)
  const {cart,setCart} = useContext(CartContext)
const [add, setAdd] = useState("Add to Cart")

    const addToCart = (props) => {
        setAdd("Added")
        localStorage.setItem('add', JSON.stringify(add)); 
            setCart([props])         
            console.log(props)
          cartList.push(props, ...items)
             removeDuplicates(cartList)
        localStorage.setItem('item', JSON.stringify(uniqueArray)); 
    
        }
        return(
            <div className="about-container">
            <div className="swiper-container">
              <Swiper className="contain"
        effect={'fade'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}    
          loop={true}
          modules={[Autoplay, EffectFade,Pagination,Navigation]}
           >            

           <SwiperSlide className="swiper-slide">
           <div>
            <img className="each-pic" src={each.imgsrc} loading="lazy"/>

           </div>
           </SwiperSlide>
           <SwiperSlide className="swiper-slide">
           <div>
                    <img alt={each.name} className="each-pic" src={each.closeimgsrc} loading="lazy"/>

           </div>
           </SwiperSlide>
           <div className="now-swipe">
           <SwiperNavButtons/>
           </div>
            </Swiper>
            </div>
            <div className="more-info">
               <p>name: {each.name}</p>
               <p>size: {each.size}</p>
               <p>price: ₦{each.price}</p>
               <button className="add-to-cart-button" onClick={() => addToCart(each)}>{add}</button>
</div>
            </div>
        )
    }

export default AboutShirt