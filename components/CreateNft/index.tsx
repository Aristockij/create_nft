import Image from "next/image";
import s from "./index.module.scss";

const index = () => {
  return (
    <section className={`container ${s.container}`}>
      <div className={s.card}>
        <div>
          <h2>Create and Sell NFTs</h2>
          <span>World’s Largest NFT Place</span>
          <div className={s.btns}>
            <button className={"btn big black"}>Explore More</button>
            <button className={"btn big transparent-white"}>
              Sell Artwork
            </button>
          </div>
        </div>
        <div className={s.card__img}>
          <Image src={"/card.jpeg"} width={369} height={249} alt={"card-img"} />
        </div>
      </div>
    </section>
  );
};
export default index;
