import React, { useState, useEffect} from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {rightArrow, leftArrow} from '../assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Card2, CompanyCard } from '../components';

const Clients = ({title, products}) => {
    
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
    <section className='bg-[#f9f9f9]'>
        <div class="w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:pt-40 font-circular">
            <div class="container grid grid-cols-1 gap-y-8 lg:grid-cols-2 items-center lg:gap-x-16">
                <div className='flex flex-col gap-5'>
                    <h2 class="text-3xl font-bold sm:text-4xl text-gray-600 ">Our past clients</h2>

                    <p class="text-gray-600">
                    Explore our portfolio of top-tier clients, from cutting-edge startups to industry giants. See the diverse range of companies we've partnered with and discover our success stories.
                    </p>

                    <div>
                      <button className="px-8 py-3 rounded-[100px] bg-[#8800ff] text-white  font-circular">
                        Book a call now
                      </button>
                    </div>
                </div>
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
            </div>
        </div>
    </section>
  )
}

export default Clients