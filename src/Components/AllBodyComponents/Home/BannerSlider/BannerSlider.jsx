

// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from 'react-simple-typewriter'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import 'animate.css';



// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";



export default function BannerSlider() {
    return (
        <>
            <div className="">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={true}
                    loop={true}

                    pagination={{
                        clickable: true,
                        type: 'fraction',
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}

                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    style={{
                        zIndex: -1,

                    }}
                >
                    <SwiperSlide >

                        <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2024/04/24/06/59/ai-generated-8716803_1280.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">

                                    <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }} className="mb-5  text-4xl animate__zoomIn font-extrabold text-pink-200 ">LARGEST RANGE OF JUTE PRODUCT
                                        <span className="ml-4" style={{ color: 'yellow', fontWeight: 'bold' }}>
                                            {/* Style will be inherited from the parent element */}
                                            <Typewriter
                                                words={['handcrafted with care and sustainability in mind', 'Elevate your living space with our eco-friendly', 'stylish jute home decor solutions', 'collection today and embrace the beauty of natural materials']}
                                                loop={5}
                                                cursor
                                                cursorStyle='_'
                                                typeSpeed={70}
                                                deleteSpeed={50}
                                                delaySpeed={1000}
                                            />
                                        </span>
                                    </h1>

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
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2022/09/29/17/15/halloween-7487706_1280.jpg)' }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="max-w-md ">
                                <h1 className="mb-1 text-5xl font-extrabold text-white">New Product Arrived 10% Discount</h1>
                                <p className=" text-xl font-semibold text-green-200" style={{ padding: '1rem', margin: 'auto 0', fontWeight: 'normal' }}>
                                    <span className="" style={{ color: 'yellow', fontWeight: 'bold' }}>
                                        {/* Style will be inherited from the parent element */}
                                        <Typewriter
                                            words={['Wooden Furniture & Sculptures', 'Wooden Home Decor', 'Wooden Utensils and Kitchenware', 'Jute Home Decor', 'Jute and wooden jewellery']}
                                            loop={5}
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </p>
                                <div className='lg:flex text-center justify-center gap-4'>
                                    <button className="btn btn-primary">Get Offer now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2024/03/27/14/16/ai-generated-8659230_640.jpg)' }}>
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
            </div>
        </>
    );
}