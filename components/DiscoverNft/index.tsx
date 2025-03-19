import s from "./index.module.scss";
import Image from "next/image";

const index = () => {
  const info = [
    { title: "430K+", subtitle: "Art Works" },
    { title: "159K+", subtitle: "Creators" },
    { title: "87K+", subtitle: "Collections" },
  ];
  return (
    <section className={`container ${s.content}`}>
      <div className={s.left}>
        <h1>Discover And Create NFTs</h1>
        <p>
          Discover, Create and Sell NFTs On Our NFT Marketplace
          <br /> With Over Thousands Of NFTs And Get a{" "}
          <strong>$20 bonus.</strong>
        </p>
        <div className={s.btns}>
          <button className='btn large'>Explore More</button>
          <button className='btn large transparent'>create NFT</button>
        </div>
        <div className={s.info}>
          {info.map((el, index) => (
            <div key={index}>
              <div className={s.info__title}>{el.title}</div>
              <div className={s.info__subtitle}>{el.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={s.right}>
        <div className={s.rect_1}>
          <Image
            src='/assets/rect_1.jpeg'
            width={391}
            height={395}
            alt={"img-assets-1"}
          />
        </div>
        <div className={s.rect_2}>
          <Image
            src='/assets/rect_2.jpeg'
            width={391}
            height={395}
            alt={"img-assets-2"}
          />
        </div>
        <div className={s.arrow}>
          <Image
            src='/assets/arrow.svg'
            width={128}
            height={128}
            alt={"img-arrow-2"}
          />
        </div>
        <div className={s.dots}>
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
export default index;
