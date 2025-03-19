"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const anchor = ["Discover", "creators", "Sell", "stats"];

  useEffect(() => {
    const bodyHeight = document.querySelector("body")?.scrollHeight;

    gsap.timeline({
      scrollTrigger: {
        trigger: "header",
        pin: true,
        start: "top top",
        end: bodyHeight,
        // markers: true,
        pinSpacing: false,
      },
    });
  }, []);

  return (
    <header className='container'>
      <div className='header'>
        <div className='header__left'>
          <Link href='/'>
            <Image
              className='header__logo'
              src='/Wave.svg'
              alt='logo'
              width={53}
              height={53}
            />
          </Link>
          <ul>
            {anchor.map((el, index) => (
              <li key={index}>
                <Link href={`#${el}`}>{el}</Link>
              </li>
            ))}
          </ul>
        </div>
        <button className='btn card-btn'>Connect Wallet</button>
      </div>
    </header>
  );
};
export default Index;
