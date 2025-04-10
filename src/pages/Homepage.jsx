import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <main>
          <Intro />
        </main>
      </div>
    </>
  );
}

function Intro() {
  return (
    <section className="intro">
      <div className="intro-right">
        <h1>
          خرید راحت گیاه،با <span>گیاه لند!</span>
        </h1>
        <p className="des">
          با گیاه لند،آنلاین گیاه خودت رو سفارش بده و از تخفیف های ویژه استفاده
          کن.علاوه بر اینها میتونی به صورت رایگان از گیاه پزشک سایت مشاوره
          بگیری.
        </p>

        <div className="buttons">
          <Link
            to="#"
            className="link-btn"
          >
            گیاهان تخفیف دار
          </Link>
          <Link
            to="#"
            className="link-btn2"
          >
            <span>مشاوره با گیاه پزشک</span>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.75 11.5H8.58L14.17 5.91L12.75 4.5L4.75 12.5L12.75 20.5L14.16 19.09L8.58 13.5H20.75V11.5Z"
                fill="#417F56"
              />
            </svg>
          </Link>
        </div>

        <div className="values">
          <div>
            <span>۹۴۳+</span>
            <p>گیاه خانگی</p>
          </div>
          <div>
            <span>۲۳۴+</span>
            <p>گیاه تزئینی</p>
          </div>
          <div>
            <span>۱۲۸+</span>
            <p>گیاه کادویی</p>
          </div>
        </div>
      </div>
      <div className="intro-left">
        <img
          src="/images/header-desktop.png"
          alt="planet"
          className="header-desktop"
        />
        <img
          src="/images/header-mobile.png"
          alt="planet"
          className="header-mobile"
        />
      </div>
    </section>
  );
}
