

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
                    delay: 3000,
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

                    <div className="hero min-h-screen z-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div data-aos="zoom-in" data-aos-duration="1500" className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl animate__zoomIn font-extrabold text-white animate__wobble animate__animated animate__delay-1s animate__slow">Best Place To Find</h1>
                                <p className="mb-5 text-xl font-semibold text-green-200 animate__backInRight animate__animated animate__delay-1s animate__slow">From as low as $10 per day with limited time offer discounts.</p>
                                <div className='lg:flex gap-4 animate__backInRight animate__animated animate__delay-1s '>
                                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                                    <button className="btn btn-active btn-secondary">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide >
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div data-aos="zoom-in" data-aos-duration="1500" className="max-w-md animate__zoomIn animate__animated animate__delay-1s animate__slow">
                            <h1 className="mb-5 text-5xl font-extrabold text-white">Religious facilities</h1>
                            <p className="mb-5 text-xl font-semibold text-green-200">From as low as $10 per day with limited time offer discounts.</p>
                            <div className='lg:flex gap-4'>
                                <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div data-aos="zoom-in" data-aos-duration="1500" className="hero-content text-center text-neutral-content">
                            <div className="max-w-md animate__zoomIn animate__animated animate__delay-1s animate__slow">
                                <h1 className="mb-5 text-5xl font-bold">Art galleries</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}