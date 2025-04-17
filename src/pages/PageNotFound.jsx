import Navbar from "../components/Navbar/Navbar";

import "../assets/css/PageNotFound.css";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <Navbar />
      <div className="content">
        <img
          src="/images/page-not-found.png"
          alt="page not found"
        />
        <p>صفحه مورد نظر شما یافت نشد!</p>
        <Link
          to="/"
          className="link-primary"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </>
  );
}

export default PageNotFound;
