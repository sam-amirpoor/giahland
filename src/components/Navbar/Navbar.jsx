import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

function Navbar() {
  const [isHideLinks, setIsHideLinks] = useState(true);

  function handleClick() {
    setIsHideLinks((bool) => !bool);
  }

  return (
    <div className="container">
      <nav className={styles.nav}>
        <div className={styles.rightNav}>
          <h2>گیاه لند</h2>
          <ul>
            <li>
              <NavLink to="/">صفحه اصلی</NavLink>
            </li>
            <li>
              <NavLink to="/link2">گیاه پزشک</NavLink>
            </li>
            <li>
              <NavLink to="/weblog">وبلاگ</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">تماس با ما</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">درباره ما</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.leftNav}>
          {/* Search Button */}

          <button className="btn-primary">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.755 14.255H14.965L14.685 13.985C15.665 12.845 16.255 11.365 16.255 9.755C16.255 6.165 13.345 3.255 9.755 3.255C6.165 3.255 3.255 6.165 3.255 9.755C3.255 13.345 6.165 16.255 9.755 16.255C11.365 16.255 12.845 15.665 13.985 14.685L14.255 14.965V15.755L19.255 20.745L20.745 19.255L15.755 14.255ZM9.755 14.255C7.26501 14.255 5.255 12.245 5.255 9.755C5.255 7.26501 7.26501 5.255 9.755 5.255C12.245 5.255 14.255 7.26501 14.255 9.755C14.255 12.245 12.245 14.255 9.755 14.255Z"
                fill="#417F56"
              />
            </svg>
          </button>

          {/* Profile link */}

          <Link
            to="#"
            className="link-primary"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5463 11C15.2963 11 15.9563 10.59 16.2963 9.97L19.8763 3.48C20.2463 2.82 19.7663 2 19.0063 2H4.20628L3.26628 0H-0.00372314V2H1.99628L5.59628 9.59L4.24628 12.03C3.51628 13.37 4.47628 15 5.99628 15H17.9963V13H5.99628L7.09628 11H14.5463ZM5.15628 4H17.3063L14.5463 9H7.52628L5.15628 4ZM5.99628 16C4.89628 16 4.00628 16.9 4.00628 18C4.00628 19.1 4.89628 20 5.99628 20C7.09628 20 7.99628 19.1 7.99628 18C7.99628 16.9 7.09628 16 5.99628 16ZM15.9963 16C14.8963 16 14.0063 16.9 14.0063 18C14.0063 19.1 14.8963 20 15.9963 20C17.0963 20 17.9963 19.1 17.9963 18C17.9963 16.9 17.0963 16 15.9963 16Z"
                fill="#417F56"
              />
            </svg>
          </Link>

          {/* Login link */}

          <Link
            to="#"
            className="link-primary"
          >
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 4L7.6 5.4L10.2 8H0V10H10.2L7.6 12.6L9 14L14 9L9 4ZM18 16H10V18H18C19.1 18 20 17.1 20 16V2C20 0.9 19.1 0 18 0H10V2H18V16Z"
                fill="#417F56"
              />
            </svg>

            <span>ورود / ثبت نام</span>
          </Link>
        </div>
      </nav>
      <nav className={styles.mobileNav}>
        <div className={styles.topNav}>
          <div className={styles.rightNav}>
            <div className={styles.links}>
              <button onClick={handleClick}>
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 15H17.5V13.3333H2.5V15ZM2.5 10.8333H17.5V9.16667H2.5V10.8333ZM2.5 5V6.66667H17.5V5H2.5Z"
                    fill="#121212"
                  />
                </svg>
              </button>
              <ul className={`${isHideLinks ? "" : styles.active}`}>
                <li>
                  <NavLink to="/">صفحه اصلی</NavLink>
                </li>
                <li>
                  <NavLink to="/link2">گیاه پزشک</NavLink>
                </li>
                <li>
                  <NavLink to="/weblog">وبلاگ</NavLink>
                </li>
                <li>
                  <NavLink to="/contactus">تماس با ما</NavLink>
                </li>
                <li>
                  <NavLink to="/aboutus">درباره ما</NavLink>
                </li>
              </ul>
            </div>
            <h2>گیاه لند</h2>
          </div>
          <div className={styles.leftNav}>
            {/* Profile link */}

            <Link
              to="#"
              className="link-primary"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5463 11C15.2963 11 15.9563 10.59 16.2963 9.97L19.8763 3.48C20.2463 2.82 19.7663 2 19.0063 2H4.20628L3.26628 0H-0.00372314V2H1.99628L5.59628 9.59L4.24628 12.03C3.51628 13.37 4.47628 15 5.99628 15H17.9963V13H5.99628L7.09628 11H14.5463ZM5.15628 4H17.3063L14.5463 9H7.52628L5.15628 4ZM5.99628 16C4.89628 16 4.00628 16.9 4.00628 18C4.00628 19.1 4.89628 20 5.99628 20C7.09628 20 7.99628 19.1 7.99628 18C7.99628 16.9 7.09628 16 5.99628 16ZM15.9963 16C14.8963 16 14.0063 16.9 14.0063 18C14.0063 19.1 14.8963 20 15.9963 20C17.0963 20 17.9963 19.1 17.9963 18C17.9963 16.9 17.0963 16 15.9963 16Z"
                  fill="#417F56"
                />
              </svg>
            </Link>

            {/* Login link */}

            <Link
              to="#"
              className="link-primary"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.75 14.1667L17.9166 10L13.75 5.83333L12.575 7.00833L14.725 9.16667H7.08331V10.8333H14.725L12.575 12.9917L13.75 14.1667Z"
                  fill="#417F56"
                />
                <path
                  d="M15.4166 15.8333H3.74998V4.16667H15.4166V5.83333H17.0833V4.16667C17.0833 3.25 16.3416 2.5 15.4166 2.5H3.74998C2.83331 2.5 2.08331 3.25 2.08331 4.16667V15.8333C2.08331 16.75 2.83331 17.5 3.74998 17.5H15.4166C16.3416 17.5 17.0833 16.75 17.0833 15.8333V14.1667H15.4166V15.8333Z"
                  fill="#417F56"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className={styles.navSearch}>
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1292 11.8792H12.4709L12.2375 11.6542C13.0542 10.7042 13.5459 9.47086 13.5459 8.12919C13.5459 5.13752 11.1209 2.71252 8.12919 2.71252C5.13752 2.71252 2.71252 5.13752 2.71252 8.12919C2.71252 11.1209 5.13752 13.5459 8.12919 13.5459C9.47086 13.5459 10.7042 13.0542 11.6542 12.2375L11.8792 12.4709V13.1292L16.0459 17.2875L17.2875 16.0459L13.1292 11.8792ZM8.12919 11.8792C6.05419 11.8792 4.37919 10.2042 4.37919 8.12919C4.37919 6.05419 6.05419 4.37919 8.12919 4.37919C10.2042 4.37919 11.8792 6.05419 11.8792 8.12919C11.8792 10.2042 10.2042 11.8792 8.12919 11.8792Z"
                fill="#717171"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="جستجو گیاه"
          />
        </div>
      </nav>

      {!isHideLinks && (
        <div
          className={styles.screenOverlay}
          onClick={handleClick}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
