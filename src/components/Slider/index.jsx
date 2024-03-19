import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

import 'swiper/css';

const Slider = ({ children }) => {
    return (
        <Swiper
            spaceBetween={16}
            slidesPerView={1.8}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {React.Children.map(children, child => (
                <SwiperSlide>{child}</SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;