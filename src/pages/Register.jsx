import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Auth.css";
import { useState } from "react";
import Alert from "../components/Alert.jsx/Alert";

function Register() {
  const navigate = useNavigate();

  // Input value states
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [message, setMessage] = useState("");

  // Input type states
  const [inputType1, setInputType1] = useState("password");
  const [inputType2, setInputType2] = useState("password");

  function validation() {
    const phoneNumberRegex =
      /^[\u06F0\u06F9][\u06F0-\u06F90-9]{10}$|^[0][9][0-9]{9}$/;
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isValidMobileNumber = phoneNumberRegex.test(phoneNumber);
    const isValidEmail = emailRegex.test(email.toLowerCase());
    if (!isValidMobileNumber) {
      setMessage("لطفا شماره تلفن خود را به درستی وارد کنید");
    } else if (!isValidEmail) {
      setMessage("لطفا آدرس ایمیل خود را به درستی وارد کنید");
    } else if (password.length < 8) {
      setMessage("رمزعبور باید حداقل ۸ کاراکتر باشد");
    } else if (password !== repeatPassword) {
      setMessage("رمزعبور با تکرار آن مطابقت ندارد");
    } else {
      setPhoneNumber("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
      setMessage("اطلاعات شما با موفقیت ثبت شد");
    }
  }

  function switchType(setType) {
    setType((type) => {
      if (type === "password") return "text";
      return "password";
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    validation();
  }

  return (
    <>
      <div className="auth">
        <div className="content">
          <form
            className="form"
            onSubmit={submitHandler}
          >
            <h5>ثبت نام</h5>
            <div className="inputs">
              <div className="input-box">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                >
                  <path
                    d="M17.4859 1.41669H8.31924C7.31091 1.41669 6.48591 2.24169 6.48591 3.25002V6.00002H8.31924V4.16669H17.4859V18.8334H8.31924V17H6.48591V19.75C6.48591 20.7584 7.31091 21.5834 8.31924 21.5834H17.4859C18.4942 21.5834 19.3192 20.7584 19.3192 19.75V3.25002C19.3192 2.24169 18.4942 1.41669 17.4859 1.41669ZM6.49507 12.8475L4.15757 10.51L2.99341 11.6742L6.48591 15.1667L13.0767 8.57585L11.9126 7.41169L6.49507 12.8475Z"
                    fill="#717171"
                  />
                </svg>

                <input
                  type="text"
                  className="input"
                  placeholder="شماره موبایل (مثال: ۰۹۱۲۲۲۲۲۲۲۲)"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="input-box">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                >
                  <path
                    d="M18.4895 4.16669H3.82284C2.8145 4.16669 1.99867 4.99169 1.99867 6.00002L1.9895 17C1.9895 18.0084 2.8145 18.8334 3.82284 18.8334H18.4895C19.4978 18.8334 20.3228 18.0084 20.3228 17V6.00002C20.3228 4.99169 19.4978 4.16669 18.4895 4.16669ZM18.4895 17H3.82284V7.83335L11.1562 12.4167L18.4895 7.83335V17ZM11.1562 10.5834L3.82284 6.00002H18.4895L11.1562 10.5834Z"
                    fill="#717171"
                  />
                </svg>

                <input
                  type="email"
                  className="input"
                  placeholder="ایمیل"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-box password">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                >
                  <path
                    d="M19.4063 9.66667H11.7522C11.0005 7.53083 8.9655 6 6.573 6C3.53883 6 1.073 8.46583 1.073 11.5C1.073 14.5342 3.53883 17 6.573 17C8.9655 17 11.0005 15.4692 11.7522 13.3333H12.073L13.9063 15.1667L15.7397 13.3333L17.573 15.1667L21.2397 11.4633L19.4063 9.66667ZM6.573 14.25C5.0605 14.25 3.823 13.0125 3.823 11.5C3.823 9.9875 5.0605 8.75 6.573 8.75C8.0855 8.75 9.323 9.9875 9.323 11.5C9.323 13.0125 8.0855 14.25 6.573 14.25Z"
                    fill="#717171"
                  />
                </svg>

                <input
                  type={inputType1}
                  className="input"
                  placeholder="تعریف رمز عبور"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="eye"
                  onClick={() => switchType(setInputType1)}
                >
                  <path
                    d="M10 4.97918C13.1584 4.97918 15.975 6.75418 17.35 9.56251C16.8584 10.5792 16.1667 11.4542 15.3417 12.1625L16.5167 13.3375C17.675 12.3125 18.5917 11.0292 19.1667 9.56251C17.725 5.90418 14.1667 3.31251 10 3.31251C8.94171 3.31251 7.92504 3.47918 6.96671 3.78751L8.34171 5.16251C8.88337 5.05418 9.43337 4.97918 10 4.97918ZM9.10837 5.92918L10.8334 7.65418C11.3084 7.86251 11.6917 8.24584 11.9 8.72084L13.625 10.4458C13.6917 10.1625 13.7417 9.86251 13.7417 9.55418C13.75 7.48751 12.0667 5.81251 10 5.81251C9.69171 5.81251 9.40004 5.85418 9.10837 5.92918ZM1.67504 3.20418L3.90837 5.43751C2.55004 6.50418 1.47504 7.92084 0.833374 9.56251C2.27504 13.2208 5.83337 15.8125 10 15.8125C11.2667 15.8125 12.4834 15.5708 13.6 15.1292L16.45 17.9792L17.625 16.8042L2.85004 2.02084L1.67504 3.20418ZM7.92504 9.45418L10.1 11.6292C10.0667 11.6375 10.0334 11.6458 10 11.6458C8.85004 11.6458 7.91671 10.7125 7.91671 9.56251C7.91671 9.52084 7.92504 9.49584 7.92504 9.45418ZM5.09171 6.62084L6.55004 8.07918C6.35837 8.53751 6.25004 9.03751 6.25004 9.56251C6.25004 11.6292 7.93337 13.3125 10 13.3125C10.525 13.3125 11.025 13.2042 11.475 13.0125L12.2917 13.8292C11.5584 14.0292 10.7917 14.1458 10 14.1458C6.84171 14.1458 4.02504 12.3708 2.65004 9.56251C3.23337 8.37084 4.08337 7.38751 5.09171 6.62084Z"
                    fill="#717171"
                  />
                </svg>
              </div>
              <div className="input-box password">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                >
                  <path
                    d="M19.4063 9.66667H11.7522C11.0005 7.53083 8.9655 6 6.573 6C3.53883 6 1.073 8.46583 1.073 11.5C1.073 14.5342 3.53883 17 6.573 17C8.9655 17 11.0005 15.4692 11.7522 13.3333H12.073L13.9063 15.1667L15.7397 13.3333L17.573 15.1667L21.2397 11.4633L19.4063 9.66667ZM6.573 14.25C5.0605 14.25 3.823 13.0125 3.823 11.5C3.823 9.9875 5.0605 8.75 6.573 8.75C8.0855 8.75 9.323 9.9875 9.323 11.5C9.323 13.0125 8.0855 14.25 6.573 14.25Z"
                    fill="#717171"
                  />
                </svg>

                <input
                  type={inputType2}
                  className="input"
                  placeholder="تکرار رمز عبور"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="eye"
                  onClick={() => switchType(setInputType2)}
                >
                  <path
                    d="M10 4.97918C13.1584 4.97918 15.975 6.75418 17.35 9.56251C16.8584 10.5792 16.1667 11.4542 15.3417 12.1625L16.5167 13.3375C17.675 12.3125 18.5917 11.0292 19.1667 9.56251C17.725 5.90418 14.1667 3.31251 10 3.31251C8.94171 3.31251 7.92504 3.47918 6.96671 3.78751L8.34171 5.16251C8.88337 5.05418 9.43337 4.97918 10 4.97918ZM9.10837 5.92918L10.8334 7.65418C11.3084 7.86251 11.6917 8.24584 11.9 8.72084L13.625 10.4458C13.6917 10.1625 13.7417 9.86251 13.7417 9.55418C13.75 7.48751 12.0667 5.81251 10 5.81251C9.69171 5.81251 9.40004 5.85418 9.10837 5.92918ZM1.67504 3.20418L3.90837 5.43751C2.55004 6.50418 1.47504 7.92084 0.833374 9.56251C2.27504 13.2208 5.83337 15.8125 10 15.8125C11.2667 15.8125 12.4834 15.5708 13.6 15.1292L16.45 17.9792L17.625 16.8042L2.85004 2.02084L1.67504 3.20418ZM7.92504 9.45418L10.1 11.6292C10.0667 11.6375 10.0334 11.6458 10 11.6458C8.85004 11.6458 7.91671 10.7125 7.91671 9.56251C7.91671 9.52084 7.92504 9.49584 7.92504 9.45418ZM5.09171 6.62084L6.55004 8.07918C6.35837 8.53751 6.25004 9.03751 6.25004 9.56251C6.25004 11.6292 7.93337 13.3125 10 13.3125C10.525 13.3125 11.025 13.2042 11.475 13.0125L12.2917 13.8292C11.5584 14.0292 10.7917 14.1458 10 14.1458C6.84171 14.1458 4.02504 12.3708 2.65004 9.56251C3.23337 8.37084 4.08337 7.38751 5.09171 6.62084Z"
                    fill="#717171"
                  />
                </svg>
              </div>
            </div>
            <button
              type="submit"
              className="submit"
            >
              ثبت نام
            </button>
            <p className="text">
              حساب کاربری دارید؟<Link to="/login">ورود</Link> کنید
            </p>
          </form>
        </div>
        <div className="background"></div>
      </div>
      <Alert
        message={message}
        onClick={() => {
          if (message === "اطلاعات شما با موفقیت ثبت شد") navigate("/");
          setMessage("");
        }}
      />
    </>
  );
}

export default Register;
