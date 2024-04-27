

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import 'animate.css';

import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";



export default function BannerSlider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                style={{
                    zIndex: -1
                }}
            >
                <SwiperSlide >

                    <div className="hero min-h-screen z-0" style={{ backgroundImage: 'url(https://andimpex.com.bd/public/frontend/assets/img/banner/1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-4xl animate__zoomIn font-extrabold text-white ">LARGEST RANGE OF JUTE PRODUCT</h1>
                                <p className="mb-5 text-xl font-semibold text-green-200 ">With a world wide client base, we are equipped to handle orders of any size.</p>
                                <div className='lg:flex gap-4  '>
                                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                                    <button className="btn btn-active btn-secondary">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide >
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://andimpex.com.bd/public/frontend/assets/img/banner/5.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="max-w-md ">
                            <h1 className="mb-5 text-5xl font-extrabold text-white">New Product Arrived 10% Discount</h1>
                            <p className="mb-5 text-xl font-semibold text-green-200">
                                Wool Clothing</p>
                            <div className='lg:flex gap-4'>
                                
                                <button className="btn btn-primary">Get Offer now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://andimpex.com.bd/public/frontend/assets/img/banner/4.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md animate__zoomIn animate__animated animate__delay-1s animate__slow">
                                <h1 className="mb-5 text-5xl font-bold">Art galleries</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary"> By Now</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}