import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import "bootstrap/js/dist/collapse";

import { LogoLgPng, LogoSmPng, AccentSearchSvg } from "../assets/images";

export default function Layout() {
  const { pathname } = useLocation();
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed-top bg-milk">
        <div className="container-fluid container-lg bg-milk">
          <nav
            className={clsx(
              "navbar navbar-expand-lg py-lg-9 pt-2 pb-1 border-bottom-lg border-tertiary",
              isMenuOpen && "min-vh-100 align-content-start"
            )}>
            {!isMenuOpen && (
              <NavLink className="navbar-brand me-9" to="/">
                <img
                  src={LogoLgPng}
                  alt="Vivre"
                  srcSet={`${LogoSmPng} 576w, ${LogoLgPng} 992w`}
                  sizes="(max-width: 992px) 576px, 992px"
                />
              </NavLink>
            )}
            <button
              className="navbar-toggler border-0 py-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-lg-between"
              id="navbarSupportedContent">
              <form role="search" className="my-6 my-lg-0 | search-bar">
                <div className="input-group border border-light ps-5 py-3 rounded-pill bg-white">
                  <span
                    className={clsx(
                      "input-group-text",
                      isSearchFocused && "text-gunmetal"
                    )}>
                    搜尋文章
                  </span>
                  <input
                    className="form-control px-3 text-gunmetal-focus"
                    type="search"
                    aria-label="Search"
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                  <button className="btn btn-white p-0 pe-5" type="submit">
                    <img src={AccentSearchSvg} alt="搜尋文章" />
                  </button>
                </div>
              </form>
              <ul className="navbar-nav align-items-lg-center column-gap-5 row-gap-6 lh-sm">
                <li className="nav-item">
                  <NavLink
                    className="nav-link px-3 px-lg-5"
                    aria-current={pathname === "/articles"}
                    to="/articles">
                    所有文章
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link px-3 px-lg-5"
                    aria-current={pathname === "/subscribe"}
                    to="/subscribe">
                    訂閱方案
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link px-3 px-lg-5"
                    aria-current={pathname === "/about-us"}
                    to="/about-us">
                    關於我們
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="btn custom-btn-primary custom-btn fs-6 mt-10 mt-lg-0 w-100 w-lg-auto"
                    aria-current={pathname === "/login"}
                    to="/login">
                    登入 / 註冊
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="container-lg py-5 py-lg-6 text-center border-top">
        <span>©Vivre 2024 All right Reserved</span>
      </footer>
    </>
  );
}
