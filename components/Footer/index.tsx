import s from "./index.module.scss";

const index = () => {
  const links = ["Privacy Policy", "Term & Conditions", "About Us", "Contact"];
  const soc = ["insta.svg", "linkedin.svg", "facebook.svg", "twitter.svg"];

  return (
    <footer className={` ${s.footer}`}>
      <div className='container'>
        <div className={s.footer__top}>
          <div className={s.icon}>
            <img src='/Wave-white.svg' alt='footer-icon' />
            <span>DiveSea</span>
          </div>
          <ul>
            {links.map((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
        </div>
        <div className={s.footer__bottom}>
          <div>© 2003</div>
          <div className={s.soc}>
            <ul>
              {soc.map((el, index) => (
                <li key={index}>
                  <img src={`/icons/${el}`} alt={`icon-${el}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={s.mob}>© 2023 DiveSea All Rights Reserved.</div>
    </footer>
  );
};
export default index;
