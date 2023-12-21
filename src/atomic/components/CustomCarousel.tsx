import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

import { images } from '@/constants';

const CustomCarousel = () => {
 const progressCircle = useRef<any>(null);
 const progressContent = useRef<any>(null);
 const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
  progressCircle.current.style.setProperty('--progress', 1 - progress);
  progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
 };
 return (
  <>
   <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
     delay: 2500,
     disableOnInteraction: false,
    }}
    pagination={{
     clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    onAutoplayTimeLeft={onAutoplayTimeLeft}
    className="h-[20vmax] lg:h-[40vmax]"
    style={{ marginTop: 0 }}
   >
    <SwiperSlide className="h-auto">
     <Image src={images.banners.prostaEros.src} alt="" className="max-w-full object-contain" fill />
    </SwiperSlide>
    <SwiperSlide className="h-auto">
     <Image src={images.banners.prostaEros.src} alt="" className="max-w-full object-contain" fill />
    </SwiperSlide>
    <SwiperSlide className="h-auto">
     <Image src={images.banners.prostaEros.src} alt="" className="max-w-full object-contain" fill />
    </SwiperSlide>
    <SwiperSlide className="h-auto">
     <Image src={images.banners.prostaEros.src} alt="" className="max-w-full object-contain" fill />
    </SwiperSlide>
    <SwiperSlide className="h-auto">
     <Image src={images.banners.prostaEros.src} alt="" className="max-w-full object-contain" fill />
    </SwiperSlide>
    <SwiperSlide className="h-auto">
     <Image src={images.banners.prostaEros.src} alt="" className="max-w-full object-contain" fill />
    </SwiperSlide>
    <SwiperSlide className="h-auto">
     <Image src={images.banners.prostaEros.src} alt="" className="max-w-full object-contain" fill />
    </SwiperSlide>
    <SwiperSlide className="h-auto">
     <Image src={images.banners.prostaEros.src} alt="" className="max-w-full object-contain" fill />
    </SwiperSlide>
    <SwiperSlide className="h-auto">
     <Image src={images.banners.prostaEros.src} alt="" className="max-w-full object-contain" fill />
    </SwiperSlide>
    <div className="autoplay-progress" slot="container-end">
     <svg viewBox="0 0 48 48" ref={progressCircle}>
      <circle cx="24" cy="24" r="20"></circle>
     </svg>
     <span ref={progressContent}></span>
    </div>
   </Swiper>
  </>
 );
};
export { CustomCarousel };
