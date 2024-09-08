// Import Swiper styles
'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'

import Image from 'next/image'

export default function Banner() {
  const [imageUrls, setImageUrls] = useState(['/banner-1.jpg', '/banner-2.jpg'])

  useEffect(() => {
    const updateImageUrls = () => {
      if (window.innerWidth < 768) {
        setImageUrls(['/banner-1.jpg', '/banner-2.jpg'])
      } else {
        setImageUrls(['/banner-1.jpg', '/banner-2.jpg'])
      }
    }

    updateImageUrls()
    window.addEventListener('resize', updateImageUrls)

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', updateImageUrls)
    }
  }, [])

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true,
          type: 'fraction'
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5
        }}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        className="h-full w-full"
      >
        {imageUrls.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`winner ${index + 1}`}
              width={0}
              height={0}
              sizes="100%"
              className="w-full flex-1 rounded-md object-contain"
            />
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}
