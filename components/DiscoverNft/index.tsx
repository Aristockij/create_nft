"use client";
import s from "./index.module.scss";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "trigger-container",
          start: "top 50%",
          // markers: true,
          pinSpacing: false,
        },
      })
      .to(".trigger-el", {
        opacity: 1,
        stagger: 0.3,
        transition: 0.3,
      })
      .to(
        ".img-trigger",
        {
          opacity: 1,
          stagger: 0.3,
          translateX: 0,
        },
        "-=1"
      )
      .to(".arr-trigger", {
        opacity: 1,
      });
  }, []);

  const info = [
    { title: "430K+", subtitle: "Art Works" },
    { title: "159K+", subtitle: "Creators" },
    { title: "87K+", subtitle: "Collections" },
  ];

  return (
    <section className={`container trigger-container ${s.content}`}>
      <div className={s.left}>
        <h1 className='trigger-el'>Discover And Create NFTs</h1>
        <p className='trigger-el'>
          Discover, Create and Sell NFTs On Our NFT Marketplace
          <br /> With Over Thousands Of NFTs And Get a{" "}
          <strong>$20 bonus.</strong>
        </p>
        <div className={s.btns}>
          <button className='btn large trigger-el'>Explore More</button>
          <button className='btn large transparent trigger-el'>
            create NFT
          </button>
        </div>
        <div className={s.info}>
          {info.map((el, index) => (
            <div key={index} className='trigger-el'>
              <div className={s.info__title}>{el.title}</div>
              <div className={s.info__subtitle}>{el.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={s.right}>
        <div className={`img-trigger ${s.rect_1}`}>
          <Image
            src='/assets/rect_1.jpeg'
            width={391}
            height={395}
            alt={"img-assets-1"}
          />
        </div>
        <div className={`img-trigger ${s.rect_2}`}>
          <Image
            src='/assets/rect_2.jpeg'
            width={391}
            height={395}
            alt={"img-assets-2"}
          />
        </div>
        <div className={`arr-trigger ${s.arrow}`}>
          <Image
            src='/assets/arrow.svg'
            width={128}
            height={128}
            alt={"img-arrow-2"}
          />
        </div>
        <div className={`img-trigger ${s.dots}`}>
          <Image
            src='/assets/dots.png'
            width={173}
            height={399}
            alt={"img-assets-3"}
          />
        </div>
      </div>
    </section>
  );
};
export default Index;
