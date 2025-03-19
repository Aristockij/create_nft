import Link from "next/link";
import Image from "next/image";

const index = () => {
  const anchor = ["Discover", "creators", "Sell", "stats"];
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
export default index;
