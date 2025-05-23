import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import PlantSlider from "../components/PlantSlider/PlantSlider";
import MiniSlider from "../components/MiniSlider/MiniSlider";
import Footer from "../components/Footer/Footer";

import "../assets/css/Homepage.css";

const plantData = [
  {
    id: 1,
    title: "گیاه طبیعی بابا آدم",
    price: 852000,
    cover: "/images/plants/plant1.png",
  },
  {
    id: 2,
    title: "گیاه طبیعی یوکا",
    price: 860000,
    cover: "/images/plants/plant2.png",
  },
  {
    id: 3,
    title: "گیاه طبیعی سانسوریا سبز",
    price: 250000,
    cover: "/images/plants/plant3.png",
  },
  {
    id: 4,
    title: "گیاه طبیعی ساکولنت",
    price: 57000,
    cover: "/images/plants/plant4.png",
  },
  {
    id: 5,
    title: "گیاه طبیعی بابا آدم",
    price: 852000,
    cover: "/images/plants/plant1.png",
  },
  {
    id: 6,
    title: "گیاه طبیعی یوکا",
    price: 860000,
    cover: "/images/plants/plant2.png",
  },
  {
    id: 7,
    title: "گیاه طبیعی سانسوریا سبز",
    price: 250000,
    cover: "/images/plants/plant3.png",
  },
  {
    id: 8,
    title: "گیاه طبیعی ساکولنت",
    price: 57000,
    cover: "/images/plants/plant4.png",
  },
];

const plantData2 = [
  {
    id: 9,
    title: "گیاه بونسای",
    cover: "/images/plants/plant5.png",
  },
  {
    id: 10,
    title: "گیاه سانسوریا",
    cover: "/images/plants/plant6.png",
  },
  {
    id: 11,
    title: "گیاه پتوس",
    cover: "/images/plants/plant7.png",
  },
  {
    id: 12,
    title: "گیاه پاچیرا",
    cover: "/images/plants/plant8.png",
  },
];

const plantData3 = [
  {
    id: 13,
    title: "گیاه طبیعی کراسولا",
    price: 90000,
    cover: "/images/plants/plant9.png",
  },
  {
    id: 14,
    title: "گیاه یشم",
    price: 1500000,
    cover: "/images/plants/plant10.png",
  },
  {
    id: 15,
    title: "گیاه طبیعی بونسای پاچیرا",
    price: 880000,
    cover: "/images/plants/plant11.png",
  },
  {
    id: 16,
    title: "گیاه کراسولا خرفه ای",
    price: 169000,
    cover: "/images/plants/plant12.png",
  },
  {
    id: 17,
    title: "گیاه طبیعی کراسولا",
    price: 90000,
    cover: "/images/plants/plant9.png",
  },
  {
    id: 18,
    title: "گیاه یشم",
    price: 1500000,
    cover: "/images/plants/plant10.png",
  },
  {
    id: 19,
    title: "گیاه طبیعی بونسای پاچیرا",
    price: 880000,
    cover: "/images/plants/plant11.png",
  },
  {
    id: 20,
    title: "گیاه کراسولا خرفه ای",
    price: 169000,
    cover: "/images/plants/plant12.png",
  },
];

const plantData4 = [
  {
    id: 21,
    title: "گیاه رزماری",
    cover: "/images/plants/plant13.png",
  },
  {
    id: 22,
    title: "گیاه آدنیوم",
    cover: "/images/plants/plant14.png",
  },
  {
    id: 23,
    title: "گیاه آشیانتوس",
    cover: "/images/plants/plant15.png",
  },
  {
    id: 24,
    title: "گیاه آناناسی",
    cover: "/images/plants/plant16.png",
  },
];

const plantData5 = [
  {
    id: 25,
    title: "گیاه طبیعی بنت قنسول گلیتال",
    price: 176000,
    cover: "/images/plants/plant17.png",
  },
  {
    id: 26,
    title: "گیاه طبیعی آنتوریوم",
    price: 459000,
    cover: "/images/plants/plant18.png",
  },
  {
    id: 27,
    title: "گیاه طبیعی بونسای پاچیرا",
    price: 880000,
    cover: "/images/plants/plant19.png",
  },
  {
    id: 28,
    title: "گیاه طبیعی آنتوریوم",
    price: 498000,
    cover: "/images/plants/plant20.png",
  },
  {
    id: 29,
    title: "گیاه طبیعی بنت قنسول گلیتال",
    price: 176000,
    cover: "/images/plants/plant17.png",
  },
  {
    id: 30,
    title: "گیاه طبیعی آنتوریوم",
    price: 459000,
    cover: "/images/plants/plant18.png",
  },
  {
    id: 31,
    title: "گیاه طبیعی بونسای پاچیرا",
    price: 880000,
    cover: "/images/plants/plant19.png",
  },
  {
    id: 32,
    title: "گیاه طبیعی آنتوریوم",
    price: 498000,
    cover: "/images/plants/plant20.png",
  },
];

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <main>
          <Fade
            direction="down"
            triggerOnce
          >
            <Intro />
          </Fade>
          <Support />
          <Fade triggerOnce>
            <PlantsImages />
          </Fade>
          <Fade
            direction="down"
            triggerOnce
          >
            <PlantSlider
              sliderData={plantData}
              title="گیاهان آپارتمانی"
            />
          </Fade>
          <Fade
            direction="down"
            triggerOnce
          >
            <MiniSlider plants={plantData2} />
          </Fade>
          <Fade triggerOnce>
            <PlantClinicServices />
          </Fade>
          <Fade
            direction="down"
            triggerOnce
          >
            <PlantSlider
              sliderData={plantData3}
              title="گیاهان تزئینی"
            />
          </Fade>
          <Fade
            direction="down"
            triggerOnce
          >
            <MiniSlider plants={plantData4} />
          </Fade>
          <Fade
            direction="down"
            triggerOnce
          >
            <PlantSlider
              sliderData={plantData5}
              title="گیاهان کادویی"
            />
          </Fade>
        </main>
      </div>
      <Fade>
        <Footer />
      </Fade>
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
          alt="plant"
          className="header-desktop"
        />
        <img
          src="/images/header-mobile.png"
          alt="plant"
          className="header-mobile"
        />
      </div>
    </section>
  );
}

function Support() {
  return (
    <section className="support">
      <Fade
        direction="up"
        triggerOnce
      >
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
      </Fade>
      <Fade
        direction="down"
        triggerOnce
      >
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
      </Fade>
      <Fade
        direction="up"
        triggerOnce
      >
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
      </Fade>
    </section>
  );
}

function PlantsImages() {
  return (
    <div className="plant-images">
      <img
        src="/images/plant1.png"
        alt="plant"
      />
      <img
        src="/images/plant2.png"
        alt="plant"
      />
    </div>
  );
}

function PlantClinicServices() {
  return (
    <div className="plant-clinic-service">
      <div>
        <h2>خدمات گیاه پزشکی</h2>
      </div>
      <div className="content">
        <Fade>
          <ClinicServiceItem
            title="چک کردن اسید خاک"
            des="با استفاده از ابزار مخصوص اسید خاک گیاه چک میشود"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.9973 3.99996V6.66663C27.9973 9.14198 27.014 11.516 25.2637 13.2663C23.5133 15.0166 21.1394 16 18.664 16H17.3307V17.3333H23.9973V26.6666C23.9973 27.3739 23.7164 28.0521 23.2163 28.5522C22.7162 29.0523 22.0379 29.3333 21.3307 29.3333H10.664C9.95676 29.3333 9.27848 29.0523 8.77838 28.5522C8.27829 28.0521 7.99733 27.3739 7.99733 26.6666V17.3333H14.664V13.3333C14.664 10.8579 15.6473 8.48397 17.3977 6.73363C19.148 4.98329 21.522 3.99996 23.9973 3.99996H27.9973ZM7.33067 2.66663C8.93063 2.66533 10.5075 3.04847 11.9285 3.78379C13.3495 4.51912 14.573 5.58509 15.496 6.89196C14.0878 8.74373 13.327 11.0069 13.3307 13.3333V14.6666H12.664C10.0118 14.6666 7.4683 13.6131 5.59293 11.7377C3.71757 9.86233 2.664 7.31879 2.664 4.66663V2.66663H7.33067Z"
                fill="#417F56"
              />
            </svg>
          </ClinicServiceItem>
        </Fade>
        <Fade>
          <ClinicServiceItem
            title="برسی مواد معدنی خاک"
            des="یکی از موارد مهم خاک، مقدار مواد معدنی آن است که با دقت برسی میشود"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.824 6.67196C16.9493 6.88974 17.0573 7.11641 17.148 7.35196C18.9947 6.3693 21.036 6.23996 22.812 6.92263C25.652 8.01596 27.42 11.032 26.6413 14.928C26.6031 15.1199 26.523 15.3011 26.4069 15.4586C26.2907 15.6161 26.1413 15.7461 25.9692 15.8394C25.7972 15.9327 25.6067 15.987 25.4113 15.9984C25.2159 16.0097 25.0204 15.978 24.8387 15.9053L18.54 13.3853C19.3867 16.4106 19.4733 19.4893 19.3307 21.912C19.227 23.6163 18.9925 25.3102 18.6293 26.9786C18.5551 27.2674 18.3881 27.5238 18.1539 27.7083C17.9198 27.8928 17.6314 27.9953 17.3333 28H14C13.7729 28 13.5495 27.9419 13.3511 27.8314C13.1527 27.7209 12.9858 27.5615 12.8663 27.3684C12.7468 27.1752 12.6786 26.9548 12.6681 26.7279C12.6577 26.501 12.7054 26.2752 12.8067 26.072C13.412 24.8586 13.812 23.512 14.1187 22.1973C14.6253 20.0253 14.9133 17.264 14.2627 14.4906L7.04 19.1306C6.85179 19.2513 6.63626 19.3227 6.41325 19.3382C6.19023 19.3538 5.96687 19.313 5.76373 19.2197C5.56059 19.1264 5.38417 18.9834 5.25072 18.8041C5.11726 18.6247 5.03104 18.4147 5 18.1933C4.49867 14.6026 5.95467 11.4053 8.42667 9.72396C8.54044 9.64663 8.656 9.57241 8.77333 9.5013L6.21867 8.5893C6.00683 8.51371 5.81756 8.38577 5.66846 8.21737C5.51937 8.04898 5.41529 7.8456 5.36592 7.62617C5.31655 7.40674 5.3235 7.17839 5.3861 6.96236C5.44871 6.74634 5.56495 6.54966 5.724 6.39063C8.06133 4.0533 11.2507 3.39996 13.7547 4.23463C15.016 4.65596 16.1373 5.4693 16.824 6.67196Z"
                fill="#417F56"
              />
            </svg>
          </ClinicServiceItem>
        </Fade>
        <Fade>
          <ClinicServiceItem
            title="مشاهده بهترین دما"
            des="از موارد مهم برای گیاه مقدار دمای محیط است که باید اندازه گیری شود"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.2053 28.0001L8.35866 20.6667H23.5893L21.744 28.0001H10.2053ZM15.9733 10.8201C15.9733 9.0085 16.6613 7.46628 18.0373 6.19339C19.4133 4.91872 21.016 4.19606 22.8453 4.02539C22.6569 5.70095 21.9893 7.16095 20.8427 8.40539C19.696 9.64983 18.2951 10.4361 16.64 10.7641V14.0254H26.6667V19.5894H5.33333V14.0267H15.3067V10.7641C13.6533 10.4352 12.2529 9.65295 11.1053 8.41739C9.95777 7.18184 9.29022 5.71828 9.10266 4.02672C10.9142 4.19739 12.5124 4.92406 13.8973 6.20672C15.2822 7.4885 15.9747 9.02717 15.9747 10.8227"
                fill="#417F56"
              />
            </svg>
          </ClinicServiceItem>
        </Fade>
        <Fade>
          <ClinicServiceItem
            title="برسی آسیب های احتمالی"
            des="تمامی آسیب های احتمالی برسی میگردد تا از وقوع مشکلات آینده جلوگیری شود"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6666 24L21.3333 17.3333H25.3333L20 10.6666H22.6666L16 2.66663L9.33331 10.6666H12L6.66665 17.3333H10.6666L5.33331 24H14.6666V29.3333H17.3333V24H26.6666Z"
                fill="#417F56"
              />
            </svg>
          </ClinicServiceItem>
        </Fade>
        <Fade>
          <ClinicServiceItem
            title="از بین بردن عناصر آلوده خاک"
            des="با استفاده از روش های نوین،عناصر آلوده از خاک گیاهان شما جمع آوری میشوند"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.1714 20.7068C17.6474 22.6651 17.6332 24.2982 18.1292 25.6062C19.0406 28.0108 22.2434 28.7028 22.3943 29.3331C22.5452 29.9639 18.1292 30.2857 15.6332 30.2857C13.1377 30.2857 10.0766 29.8097 10.0766 29.3331C10.0766 28.8571 12.9817 28.2251 13.8646 25.5617C14.3789 24.0091 14.3229 22.2257 13.6954 20.2125C13.5392 20.2614 13.3763 20.2861 13.2126 20.2857C12.532 20.2857 11.9652 19.8685 11.8429 19.3177C11.3732 19.6262 10.7846 19.8091 10.1463 19.8091C8.76916 19.8091 7.62573 18.9565 7.39944 17.8354C7.20338 17.8816 7.00259 17.9048 6.80116 17.9045C5.56973 17.9045 4.57144 17.0519 4.57144 15.9999C4.57144 15.2897 5.0263 14.6702 5.70116 14.3428C5.3543 14.1262 5.12916 13.7759 5.12916 13.3811C5.12916 13.2439 5.15601 13.1119 5.2063 12.9891C4.82401 12.8194 4.57144 12.5257 4.57144 12.1902C4.57144 11.7748 4.96116 11.4217 5.50401 11.2914C4.93544 10.9428 4.57144 10.4079 4.57144 9.80966C4.57144 8.85938 5.48744 8.07252 6.68516 7.92795C6.40271 7.58626 6.24689 7.15754 6.24401 6.71423C6.24401 5.5308 7.36687 4.57138 8.75258 4.57138C8.89201 4.57138 9.02916 4.58109 9.16287 4.59995C9.49716 3.75252 10.4354 3.1428 11.54 3.1428C11.8469 3.1428 12.1406 3.18966 12.4126 3.27595C12.6012 2.38795 13.512 1.71423 14.6057 1.71423C15.7246 1.71423 16.6514 2.41823 16.8114 3.33538C17.22 2.92623 17.8286 2.6668 18.5086 2.6668C19.74 2.6668 20.7383 3.51938 20.7383 4.57138C20.7383 4.92566 20.6246 5.25766 20.4274 5.54223C20.5286 5.53023 20.6326 5.52395 20.7383 5.52395C21.8846 5.52395 22.8297 6.2628 22.9543 7.21423C23.305 7.04033 23.6914 6.95072 24.0829 6.95252C25.3149 6.95252 26.3132 7.80509 26.3132 8.85709C26.3132 9.57423 25.8492 10.1988 25.1634 10.5239C25.8492 10.8485 26.3132 11.4731 26.3132 12.1902C26.3132 12.8131 25.9629 13.3668 25.4217 13.7142C25.6309 13.9531 25.7554 14.2497 25.7554 14.5714C25.7554 14.6948 25.7372 14.8142 25.7029 14.9279C26.7314 15.4154 27.428 16.3525 27.428 17.4285C27.428 19.0062 25.9309 20.2857 24.0829 20.2857C23.622 20.287 23.1647 20.205 22.7332 20.0434C22.2269 20.4868 21.52 20.7617 20.7383 20.7617C20.1403 20.7663 19.5538 20.5976 19.0497 20.2759C18.8097 20.4799 18.5086 20.6308 18.1714 20.7068Z"
                fill="#417F56"
              />
            </svg>
          </ClinicServiceItem>
        </Fade>
        <Fade>
          <ClinicServiceItem
            title="برسی ظاهر"
            des="ظاهر گیاه بیانگر مسائل مهمی هست.میتوان با مشاهده ظاهر گیاه آفات و ... را متوجه شد"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 7.19995C12.0008 6.63794 12.12 6.0824 12.3499 5.56956C12.5798 5.05671 12.9152 4.59806 13.3342 4.2235C13.7532 3.84895 14.2464 3.56689 14.7817 3.39572C15.3171 3.22455 15.8824 3.16811 16.441 3.23008C16.9996 3.29204 17.5389 3.47102 18.0236 3.75535C18.5084 4.03968 18.9279 4.42298 19.2546 4.88026C19.5813 5.33754 19.808 5.85854 19.9199 6.4093C20.0318 6.96007 20.0264 7.52823 19.904 8.07675C20.4795 8.20623 21.008 8.49227 21.4312 8.90326C21.8543 9.31426 22.1556 9.83422 22.3018 10.4057C22.448 10.9772 22.4333 11.578 22.2595 12.1417C22.0857 12.7054 21.7594 13.21 21.3168 13.6C21.8043 14.0299 22.1493 14.5981 22.3059 15.229C22.4625 15.8598 22.4233 16.5234 22.1935 17.1314C21.9637 17.7394 21.5541 18.263 21.0194 18.6326C20.4846 19.0021 19.85 19.2 19.2 19.2H16.8V26.0688L21.8336 21.0336C21.908 20.9592 21.9963 20.9002 22.0935 20.8599C22.1906 20.8197 22.2948 20.7989 22.4 20.7989C22.5052 20.7989 22.6093 20.8197 22.7065 20.8599C22.8037 20.9002 22.892 20.9592 22.9664 21.0336C23.0408 21.1079 23.0998 21.1962 23.14 21.2934C23.1803 21.3906 23.201 21.4948 23.201 21.6C23.201 21.7051 23.1803 21.8093 23.14 21.9065C23.0998 22.0037 23.0408 22.092 22.9664 22.1664L16.8 28.3312V29.6C16.8 29.8121 16.7157 30.0156 16.5657 30.1656C16.4157 30.3157 16.2122 30.4 16 30.4C15.7878 30.4 15.5843 30.3157 15.4343 30.1656C15.2843 30.0156 15.2 29.8121 15.2 29.6V28.3312L9.0336 22.1664C8.88338 22.0161 8.79899 21.8124 8.79899 21.6C8.79899 21.3875 8.88338 21.1838 9.0336 21.0336C9.18382 20.8833 9.38756 20.7989 9.6 20.7989C9.81244 20.7989 10.0162 20.8833 10.1664 21.0336L15.2 26.0688V19.2H12.8C12.15 19.2 11.5154 19.0021 10.9806 18.6326C10.4459 18.263 10.0363 17.7394 9.80651 17.1314C9.57668 16.5234 9.53746 15.8598 9.69407 15.229C9.85068 14.5981 10.1957 14.0299 10.6832 13.6C10.2406 13.21 9.9143 12.7054 9.74048 12.1417C9.56666 11.578 9.55203 10.9772 9.69821 10.4057C9.84439 9.83422 10.1457 9.31426 10.5688 8.90326C10.992 8.49227 11.5205 8.20623 12.096 8.07675C12.032 7.79409 12 7.50182 12 7.19995Z"
                fill="#417F56"
              />
            </svg>
          </ClinicServiceItem>
        </Fade>
        <Fade>
          <ClinicServiceItem
            title="اندازه گیری EC "
            des="این اندازه گیری نشانی از مقدار کل مواد مغذی موجود برای گیاهان می‌دهد"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_12653_887)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.9333 9.6C14.9333 7.05392 15.9448 4.61212 17.7451 2.81178C19.5455 1.01143 21.9873 0 24.5333 0L32 0V7.46667C32 10.0127 30.9886 12.4545 29.1882 14.2549C27.3879 16.0552 24.9461 17.0667 22.4 17.0667H17.0667V32H14.9333V23.4667H9.6C7.05392 23.4667 4.61212 22.4552 2.81178 20.6549C1.01143 18.8545 0 16.4127 0 13.8667L0 6.4H7.46667C10.4832 6.4 13.1733 7.79093 14.9333 9.9648V9.6ZM17.3781 13.1115L23.7781 6.71147L25.2885 8.22187L18.8885 14.6219L17.3781 13.1115ZM13.1115 21.0219L6.71147 14.6219L8.22187 13.1115L14.6219 19.5115L13.1115 21.0219Z"
                  fill="#417F56"
                />
              </g>
              <defs>
                <clipPath id="clip0_12653_887">
                  <rect
                    width="32"
                    height="32"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
          </ClinicServiceItem>
        </Fade>
        <Fade>
          <ClinicServiceItem
            title="ارائه مکمل "
            des="برای رشد بهتر گیاهان و رفع آفات از مکمل ها میتوان استفاده کرد"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 17.3334C4 20.516 5.26428 23.5682 7.51472 25.8187C9.76515 28.0691 12.8174 29.3334 16 29.3334C16 22.6667 10.6267 17.3334 4 17.3334ZM16 7.33337C16.8841 7.33337 17.7319 7.68456 18.357 8.30968C18.9821 8.93481 19.3333 9.78265 19.3333 10.6667C19.3333 11.5508 18.9821 12.3986 18.357 13.0237C17.7319 13.6489 16.8841 14 16 14C15.1159 14 14.2681 13.6489 13.643 13.0237C13.0179 12.3986 12.6667 11.5508 12.6667 10.6667C12.6667 9.78265 13.0179 8.93481 13.643 8.30968C14.2681 7.68456 15.1159 7.33337 16 7.33337ZM7.46667 13.6667C7.46667 14.5508 7.81786 15.3986 8.44298 16.0237C9.0681 16.6489 9.91595 17 10.8 17C11.5067 17 12.16 16.7734 12.6667 16.4134V16.6667C12.6667 17.5508 13.0179 18.3986 13.643 19.0237C14.2681 19.6489 15.1159 20 16 20C16.8841 20 17.7319 19.6489 18.357 19.0237C18.9821 18.3986 19.3333 17.5508 19.3333 16.6667V16.4134C19.84 16.7734 20.4933 17 21.2 17C22.0841 17 22.9319 16.6489 23.557 16.0237C24.1821 15.3986 24.5333 14.5508 24.5333 13.6667C24.5333 12.3334 23.7467 11.2 22.6267 10.6667C23.7467 10.1334 24.5333 8.98671 24.5333 7.66671C24.5333 6.78265 24.1821 5.93481 23.557 5.30968C22.9319 4.68456 22.0841 4.33337 21.2 4.33337C20.4933 4.33337 19.84 4.54671 19.3333 4.92004V4.66671C19.3333 3.78265 18.9821 2.93481 18.357 2.30968C17.7319 1.68456 16.8841 1.33337 16 1.33337C15.1159 1.33337 14.2681 1.68456 13.643 2.30968C13.0179 2.93481 12.6667 3.78265 12.6667 4.66671V4.92004C12.16 4.54671 11.5067 4.33337 10.8 4.33337C9.91595 4.33337 9.0681 4.68456 8.44298 5.30968C7.81786 5.93481 7.46667 6.78265 7.46667 7.66671C7.46667 8.98671 8.25333 10.1334 9.37333 10.6667C8.25333 11.2 7.46667 12.3334 7.46667 13.6667ZM16 29.3334C19.1826 29.3334 22.2348 28.0691 24.4853 25.8187C26.7357 23.5682 28 20.516 28 17.3334C21.3333 17.3334 16 22.6667 16 29.3334Z"
                fill="#417F56"
              />
            </svg>
          </ClinicServiceItem>
        </Fade>
      </div>
    </div>
  );
}

function ClinicServiceItem({ title, des, children }) {
  return (
    <div className="clinic-service-item">
      <div className="cover">{children}</div>
      <div className="content">
        <h6>{title}</h6>
        <p>{des}</p>
      </div>
    </div>
  );
}
