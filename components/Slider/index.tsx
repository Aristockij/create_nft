"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import Image from "next/image";
import s from "./index.module.scss";

import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const Index = () => {
  const swiperParams: SwiperOptions = {
    spaceBetween: 30,
    loop: true,
    slidesPerView: "auto",
    modules: [Navigation],
    navigation: {
      prevEl: ".prevBtn",
      nextEl: ".nextBtn",
    },
    pagination: { clickable: true },
  };

  const sliderInfo = [
    {
      title: "Sun-Glass",
      src: "/slider/1.jpeg",
      current: 1.75,
      time: "07h 09m 12s",
    },
    {
      title: "Sun-Glass",
      src: "/slider/2.jpeg",
      current: 1.75,
      time: "07h 09m 12s",
    },
    {
      title: "Sun-Glass",
      src: "/slider/3.jpeg",
      current: 1.75,
      time: "07h 09m 12s",
    },
    {
      title: "Sun-Glass",
      src: "/slider/4.jpeg",
      current: 1.75,
      time: "07h 09m 12s",
    },
    {
      title: "Sun-Glass",
      src: "/slider/5.jpeg",
      current: 1.75,
      time: "07h 09m 12s",
    },
    {
      title: "Sun-Glass",
      src: "/slider/1.jpeg",
      current: 1.75,
      time: "07h 09m 12s",
    },
    {
      title: "Sun-Glass",
      src: "/slider/2.jpeg",
      current: 1.75,
      time: "07h 09m 12s",
    },
    {
      title: "Sun-Glass",
      src: "/slider/3.jpeg",
      current: 1.75,
      time: "07h 09m 12s",
    },
    {
      title: "Sun-Glass",
      src: "/slider/4.jpeg",
      current: 1.75,
      time: "07h 09m 12s",
    },
    {
      title: "Sun-Glass",
      src: "/slider/5.jpeg",
      current: 1.75,
      time: "07h 09m 12s",
    },
  ];

  const [curSliderInfo, setSliderInfo] = useState(sliderInfo);
  const getRandomValue = (min: number, max: number): number => {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
  };

  useEffect(() => {
    const updatedSliderInfo = curSliderInfo.map((item) => ({
      ...item,
      current: getRandomValue(1.05, 1.75),
    }));

    setSliderInfo(updatedSliderInfo);
  }, []);

  return (
    <section className={s.container}>
      <h2>Weekly - Top NFT</h2>

      <Swiper {...swiperParams} className={s.slider}>
        {curSliderInfo.map((el, index) => (
          <SwiperSlide key={index} className={s.slide}>
            <div className={s.slide__img}>
              <span>{el.time}</span>
              <Image src={el.src} width={253} height={253} alt={"slide_img"} />
            </div>
            <div className={s.slide__title}>{el.title}</div>
            <div className={s.slide__info}>
              <div>
                <div className={s.slide__info__title}>Current bid</div>
                <div className={s.slide__info__cur}>{el.current}</div>
              </div>
              <button className='btn small'>PLACE BID</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={s.btns}>
        <button className='prevBtn'>
          <img src='/prev.svg' alt='prev-btn' />
        </button>
        <button className='nextBtn'>
          <img src='/next.svg' alt='next-btn' />
        </button>
      </div>
    </section>
  );
};
export default Index;
