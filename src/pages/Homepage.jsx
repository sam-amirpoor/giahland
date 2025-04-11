import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <main>
          <Intro />
          <Support />
          <PlanetsImages />
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

function Support() {
  return (
    <section className="support">
      <div className="item">
        <div className="cover">
          <svg
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.1666 6.66667H7.49996C5.64996 6.66667 4.18329 8.15 4.18329 10L4.16663 30C4.16663 31.85 5.64996 33.3333 7.49996 33.3333H34.1666C36.0166 33.3333 37.5 31.85 37.5 30V10C37.5 8.15 36.0166 6.66667 34.1666 6.66667ZM34.1666 30H7.49996V20H34.1666V30ZM34.1666 13.3333H7.49996V10H34.1666V13.3333Z"
              fill="#417F56"
            />
          </svg>
        </div>
        <h2>پرداخت درب منزل</h2>
        <p>
          برای ایجاد اطمینان خاطر مشتریان،علاوه بر پرداخت آنلاین امکان پرداخت
          درب منزل وجود دارد
        </p>
      </div>
      <div className="item">
        <div className="cover">
          <svg
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.8333 19.9833L34.7667 15.3333L35.3333 9.18333L29.3167 7.81667L26.1667 2.5L20.5 4.93333L14.8333 2.5L11.6833 7.81667L5.66667 9.16667L6.23334 15.3333L2.16667 19.9833L6.23334 24.6333L5.66667 30.8L11.6833 32.1667L14.8333 37.5L20.5 35.05L26.1667 37.4833L29.3167 32.1667L35.3333 30.8L34.7667 24.65L38.8333 19.9833ZM32.25 22.45L31.3167 23.5333L31.45 24.95L31.75 28.2L27.1833 29.2333L26.45 30.4667L24.8 33.2667L21.8333 31.9833L20.5 31.4167L19.1833 31.9833L16.2167 33.2667L14.5667 30.4833L13.8333 29.25L9.26667 28.2167L9.56667 24.95L9.7 23.5333L8.76667 22.45L6.61667 20L8.76667 17.5333L9.7 16.45L9.55 15.0167L9.25 11.7833L13.8167 10.75L14.55 9.51667L16.2 6.71667L19.1667 8L20.5 8.56667L21.8167 8L24.7833 6.71667L26.4333 9.51667L27.1667 10.75L31.7333 11.7833L31.4333 15.0333L31.3 16.45L32.2333 17.5333L34.3833 19.9833L32.25 22.45Z"
              fill="#417F56"
            />
            <path
              d="M17.3167 22.9167L13.45 19.0333L10.9833 21.5167L17.3167 27.8667L29.55 15.6L27.0833 13.1167L17.3167 22.9167Z"
              fill="#417F56"
            />
          </svg>
        </div>
        <h2>ضمانت محصول</h2>
        <p>
          به مدت دو هفته پس از دریافت محصول در صورت وجود مشکل میتوانید مرجوع
          کنید
        </p>
      </div>
      <div className="item">
        <div className="cover">
          <svg
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.5 13.3333H28.5V6.66667H5.16671C3.33337 6.66667 1.83337 8.16667 1.83337 10V28.3333H5.16671C5.16671 31.1 7.40004 33.3333 10.1667 33.3333C12.9334 33.3333 15.1667 31.1 15.1667 28.3333H25.1667C25.1667 31.1 27.4 33.3333 30.1667 33.3333C32.9334 33.3333 35.1667 31.1 35.1667 28.3333H38.5V20L33.5 13.3333ZM32.6667 15.8333L35.9334 20H28.5V15.8333H32.6667ZM10.1667 30C9.25004 30 8.50004 29.25 8.50004 28.3333C8.50004 27.4167 9.25004 26.6667 10.1667 26.6667C11.0834 26.6667 11.8334 27.4167 11.8334 28.3333C11.8334 29.25 11.0834 30 10.1667 30ZM13.8667 25C12.95 23.9833 11.65 23.3333 10.1667 23.3333C8.68337 23.3333 7.38337 23.9833 6.46671 25H5.16671V10H25.1667V25H13.8667ZM30.1667 30C29.25 30 28.5 29.25 28.5 28.3333C28.5 27.4167 29.25 26.6667 30.1667 26.6667C31.0834 26.6667 31.8334 27.4167 31.8334 28.3333C31.8334 29.25 31.0834 30 30.1667 30Z"
              fill="#417F56"
            />
          </svg>
        </div>
        <h2>تحویل درب منزل</h2>
        <p>
          با ایجاد آدرس منزل خود در پروفایل کاربری،محصول خود را درب منزل تحویل
          بگیرید
        </p>
      </div>
    </section>
  );
}

function PlanetsImages() {
  return (
    <div className="planet-images">
      <img
        src="/images/planet1.png"
        alt="planet"
      />
      <img
        src="/images/planet2.png"
        alt="planet"
      />
    </div>
  );
}
