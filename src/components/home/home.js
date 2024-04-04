import { useState,useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom"
import shopCap from "../../assets/shopcap.jpeg"
import shopPants from "../../assets/shop-pant.jpeg"
import shopShirts from "../../assets/shopshirt.jpeg"
import bg from "../../assets/background.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {EffectFade, Autoplay, Pagination, Navigation, EffectCoverflow}  from 'swiper/modules'; 

function Home () {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
    return(
        <div className="home"
            
        >
       <div className="background" style={{ backgroundPositionY: -scrollPosition * 0.2 + 'px' }}/>
       
        <div className="home-swiper-container">

<Swiper className="home-swiper"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1} 
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}   
          loop={true}
         autoplay={true}
          modules={[Autoplay,EffectCoverflow,Pagination,Navigation]}
>
  <SwiperSlide className="home-swiper-slide">
   Your No.1 thrift store 
  </SwiperSlide>
  <SwiperSlide className="home-swiper-slide">
    Enjoy Free Delivery around Ekiti State
  </SwiperSlide>
</Swiper>
</div>
{/* <div className="models-image">
<img className="models" src={male}/>
<img className="models" src={female}/>
<img className="models" src={bg}/>
</div> */}
<div className="on-models">
<h3>Shop Collection</h3>

<div className="categories-container" >
    
    <Link className="home-category home-links" to="/shirt">
        <div>
            <img src={shopShirts}/>
        </div>
        <p className="gradient-text">shop shirts</p>
        </Link>

        <Link className="home-category home-links" to="/trouser">
        <div>
        <img src={shopPants}/>
        </div>
        <p className="gradient-text">shop pants</p>
        </Link>

        <Link className="home-category home-links" to="/cap">
        <div>
        <img src={shopCap}/>
        </div>
        <p className="gradient-text">shop caps</p>
        </Link>
        </div>
</div>
        </div>
    )
}

export default Home