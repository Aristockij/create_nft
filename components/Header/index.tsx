"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const anchor = ["Discover", "creators", "Sell", "stats"];
  const soc = ["insta.svg", "linkedin.svg", "facebook.svg", "twitter.svg"];

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
  const [isOpen, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);
    const body = document.querySelector("body");

    if (body) {
      body.style.overflow = "hidden";
    }
  };
  const closeMenu = () => {
    setOpen(false);
    const body = document.querySelector("body");

    if (body) {
      body.style.overflow = "inherit";
    }
  };

  return (
    <>
      <header className='container'>
        <div className='header header-desktop'>
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
          <button className='btn'>Connect Wallet</button>
        </div>
        <div className='header header-mob'>
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
            <span>DiveSea</span>
          </div>
          <div onClick={openMenu}>
            <Image
              className='header__burger'
              src='/burger.svg'
              alt='burger'
              width={40}
              height={40}
            />
          </div>
        </div>
      </header>
      <div className={`header__mob ${isOpen ? "open" : ""}`}>
        <div>
          <div className='header header__mob-title'>
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
              <span>DiveSea</span>
            </div>
            <div onClick={closeMenu}>
              <Image
                className='header__burger'
                src='/close.svg'
                alt='burger'
                width={40}
                height={40}
              />
            </div>
          </div>
          <div>
            <ul>
              {anchor.map((el, index) => (
                <li key={index}>
                  <Link href={`#${el}`}>{el}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={"header__soc"}>
            <ul>
              {soc.map((el, index) => (
                <li key={index}>
                  <Link href={`#${el}`}>
                    <img src={`/icons/header/${el}`} alt={el} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className='btn btn__header'>Connect Wallet</button>
      </div>
    </>
  );
};
export default Index;
