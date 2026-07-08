import React, { useState, useEffect} from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { rightArrow, leftArrow } from '../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { CompanyCard } from '.';

const CardSlider = ({products}) => {

    const [slidesPerView, setSlidesPerView] = useState(3);

    const slidePrev = () => {
        if (swiper) {
          swiper.slidePrev();
        }
      };
    
      const slideNext = () => {
        if (swiper) {
          swiper.slideNext();
        }
      };
    
      let swiper;

      useEffect(() => {
        function handleResize() {
          // Adjust the number of slides per view based on screen width
          if (window.innerWidth >= 1024) {
            setSlidesPerView(1);
          } else if (window.innerWidth >= 600) {
            setSlidesPerView(1);
          } else {
            setSlidesPerView(1);
          }
        }
    
        handleResize();
    
        // Listen for window resize events
        window.addEventListener('resize', handleResize);
    
        return () => {
          // Clean up the event listener when the component unmounts
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <div className='relative'>             
    <Swiper
        sx={{overflow:'clip'}}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={25}
        slidesPerView={slidesPerView}
        onSwiper={(swiper) => (window.swiper = swiper)}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
            prevEl: '.swiper-button-prev-1',
            nextEl: '.swiper-button-next-1',
        }}
        pagination={{ clickable: true }}   
        style={{
          "--swiper-pagination-color": "#8800FF",
        }}
    >
        {products.map((product, index)=> 
            <SwiperSlide>
            <a href={product.url} target='blank'>
                <CompanyCard key={index} product={product} />
            </a>
            </SwiperSlide>
        )} 

    </Swiper>  
    <div className='z-10 swiper-button-prev-1 xl:ml-[-35px] absolute top-[40%]' style={{ backgroundImage: `url(${leftArrow})` }}></div>
    <div className='z-10 swiper-button-next-1 xl:mr-[-35px] absolute top-[40%] right-0 ' style={{ backgroundImage: `url(${rightArrow})` }}></div>
</div>
  )
}

export default CardSlider