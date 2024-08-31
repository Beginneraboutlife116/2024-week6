import { useRef } from "react";
import { Form, NavLink } from "react-router-dom";
import clsx from "clsx";

import {
  ArrowRightWhiteSvg,
  GooglePng,
  FacebookPng,
} from "../../assets/images";

import { action } from "./utils";

const PREFIX_CLASS = "signup";

Signup.action = action;

export default function Signup() {
  const formRef = useRef(null);

  function _handleSubmit(e) {
    const form = formRef.current;

    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }
    form.classList.add("was-validated");
  }

  return (
    <section className={clsx("py-15 py-lg-25", PREFIX_CLASS)}>
      <div className="container-fluid container-lg">
        <div className="row justify-content-center">
          <div className="p-6 p-lg-10 col-lg-6 bg-white rounded-lg-4">
            <Form
              ref={formRef}
              method="post"
              className="needs-validation"
              onSubmit={_handleSubmit}
              noValidate>
              <h1 className="text-primary fs-4 fw-bolder mb-6 mb-lg-10">
                註冊
              </h1>
              <div className="mb-4">
                <label htmlFor="account" className="form-label fw-bold">
                  會員帳號
                </label>
                <input
                  name="account"
                  type="text"
                  className="form-control px-4 py-3 bg-smoke rounded-3"
                  id="account"
                  placeholder="請輸入會員帳號"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label fw-bold">
                  密碼
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control px-4 py-3 bg-smoke rounded-3"
                  id="password"
                  placeholder="請輸入密碼"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label fw-bold">
                  電子信箱
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control px-4 py-3 bg-smoke rounded-3"
                  id="password"
                  placeholder="請輸入電子信箱"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn custom-btn custom-btn-primary my-6 my-lg-10 w-100 justify-content-center align-items-end">
                立即註冊
                <img src={ArrowRightWhiteSvg} alt="" className="ms-3" />
              </button>
            </Form>
            <p className="decoration mb-6">或以其他方式登入</p>
            <div className="d-grid row-gap-2 mb-6 mb-lg-10">
              <NavLink
                to="#"
                className="btn btn-smoke py-3 rounded-pill d-flex align-items-center justify-content-center">
                <img src={GooglePng} alt="" className="me-3" />
                請使用 Google 登入
              </NavLink>
              <NavLink
                to="#"
                className="btn btn-smoke py-3 rounded-pill d-flex align-items-center justify-content-center">
                <img src={FacebookPng} alt="" className="me-3" />
                請使用 Facebook 登入
              </NavLink>
            </div>
            <p className="mb-0 text-center">
              已經是會員了？
              <NavLink to="/login" className="d-inline-block ms-3">
                點此登入
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
