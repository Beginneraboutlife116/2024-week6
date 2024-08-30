import { NavLink } from "react-router-dom";

import {
  BannerSmPng,
  BannerPng,
  ArrowRightWhiteSvg,
} from "../../../assets/images";

const PREFIX_CLASS = "banner";

export default function HomeBanner() {
  return (
    <section className={`container py-lg-20 ${PREFIX_CLASS}`}>
      <div
        className="
        card
        text-bg-dark
        border-0
        rounded-0
        mx-n3
        mx-md-0">
        <picture>
          <source srcSet={`${BannerPng} 1296w`} media="(min-width: 992px)" />
          <img src={BannerSmPng} className="card-img rounded-0" alt="" />
        </picture>
        <div
          className="
            card-img-overlay
            d-flex
            flex-column
            align-items-center
            justify-content-end
            align-items-lg-start
            justify-content-lg-center
            pb-12
            py-lg-0
            ps-lg-15
            ">
          <h1 className="card-title text-center text-lg-start">
            <p className="h6 h5-lg mb-2 mb-lg-3">獻給新世代的生活風格誌</p>
            <p className="h3 h1-lg mb-3 mb-lg-4">一起探索生活的無限可能</p>
          </h1>
          <NavLink
            to="/subscribe"
            className="btn custom-btn custom-btn-primary">
            馬上訂閱
            <img src={ArrowRightWhiteSvg} alt="" className="ms-3" />
          </NavLink>
        </div>
      </div>
    </section>
  );
}
