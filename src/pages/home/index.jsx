import { NavLink } from "react-router-dom";

import {
  BannerSmPng,
  BannerPng,
  ArrowRightWhiteSvg,

  // themes
  Theme1Png,
  Theme1SmPng,
  Theme2Png,
  Theme2SmPng,
  Theme3Png,
  Theme3SmPng,
  Theme4Png,
  Theme4SmPng,
  Theme5Png,
  Theme5SmPng,
  Theme6Png,
  Theme6SmPng,
  Theme7Png,
  Theme7SmPng,
  Theme8Png,
  Theme8SmPng,
} from "../../assets/images";

const themeData = [
  {
    id: 1,
    title: "城市漫遊者",
    imageUrl: {
      sm: Theme1SmPng,
      lg: Theme1Png,
    },
  },
  {
    id: 2,
    title: "秘境尋蹤人",
    imageUrl: {
      sm: Theme2SmPng,
      lg: Theme2Png,
    },
  },
  {
    id: 3,
    title: "品味設計家",
    imageUrl: {
      sm: Theme3SmPng,
      lg: Theme3Png,
    },
  },
  {
    id: 4,
    title: "美食探險記",
    imageUrl: {
      sm: Theme4SmPng,
      lg: Theme4Png,
    },
  },
  {
    id: 5,
    title: "美學建築誌",
    imageUrl: {
      sm: Theme5SmPng,
      lg: Theme5Png,
    },
  },
  {
    id: 6,
    title: "慢活生活行",
    imageUrl: {
      sm: Theme6SmPng,
      lg: Theme6Png,
    },
  },
  {
    id: 7,
    title: "工藝匠心賞",
    imageUrl: {
      sm: Theme7SmPng,
      lg: Theme7Png,
    },
  },
  {
    id: 8,
    title: "時尚先鋒派",
    imageUrl: {
      sm: Theme8SmPng,
      lg: Theme8Png,
    },
  },
];

export default function Home() {
  return (
    <>
      <section className="container py-lg-20">
        <div className="card text-bg-dark border-0 rounded-0 mx-n3 mx-md-0">
          <picture>
            <source srcSet={`${BannerPng} 1296w`} media="(min-width: 992px)" />
            <img src={BannerSmPng} className="card-img rounded-0" alt="" />
          </picture>
          <div
            className="
            card-img-overlay
            d-flex
            flex-column
            justify-content-end
            justify-content-lg-center
            align-items-center
            align-items-lg-start
            ps-lg-15
            pb-12
            pb-lg-4
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
      <section className="py-12 py-lg-20">
        <div className="container">
          <h2 className="mb-6">熱門主題</h2>
          <div className="row gy-2 gy-lg-6">
            {themeData.map(({ id, title, imageUrl }) => (
              <div key={id} className="col-lg-3">
                <div className="card text-bg-dark border-0 rounded-x-6 rounded-y-0">
                  <picture>
                    <source
                      srcSet={`${imageUrl.lg} 306w`}
                      media="(min-width: 992px)"
                    />
                    <img
                      src={imageUrl.sm}
                      className="card-img rounded-x-6 rounded-y-0"
                      alt=""
                    />
                  </picture>
                  <div className="card-img-overlay d-flex align-items-center justify-content-center">
                    <h3 className="card-title h5-lg fs-6 mb-0">{title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
