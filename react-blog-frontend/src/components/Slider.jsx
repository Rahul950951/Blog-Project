import React from 'react';
import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

function Slider() {
    const images = [
        'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg',
        'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg',
        'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg',
        'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
        'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg'
    ];

    return (
        <div className='mt-10 mb-5 md:mt10 md:mb-10'>
            <section> {/* Ensure the slider starts below the navbar */}
                <Swiper
                    modules={[Autoplay, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <a>
                                <img
                                    src={img}
                                    alt={`slide-${index + 1}`}
                                    className="w-full h-[300px] object-cover mx-auto select-none"
                                />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    );
}

export default Slider;
