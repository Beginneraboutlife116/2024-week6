import { NavLink } from "react-router-dom";

import {
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
} from "../../../assets/images";

const themeData = [
  {
    id: 1,
    title: "城市漫遊者",
    images: {
      sm: Theme1SmPng,
      lg: Theme1Png,
    },
  },
  {
    id: 2,
    title: "秘境尋蹤人",
    images: {
      sm: Theme2SmPng,
      lg: Theme2Png,
    },
  },
  {
    id: 3,
    title: "品味設計家",
    images: {
      sm: Theme3SmPng,
      lg: Theme3Png,
    },
  },
  {
    id: 4,
    title: "美食探險記",
    images: {
      sm: Theme4SmPng,
      lg: Theme4Png,
    },
  },
  {
    id: 5,
    title: "美學建築誌",
    images: {
      sm: Theme5SmPng,
      lg: Theme5Png,
    },
  },
  {
    id: 6,
    title: "慢活生活行",
    images: {
      sm: Theme6SmPng,
      lg: Theme6Png,
    },
  },
  {
    id: 7,
    title: "工藝匠心賞",
    images: {
      sm: Theme7SmPng,
      lg: Theme7Png,
    },
  },
  {
    id: 8,
    title: "時尚先鋒派",
    images: {
      sm: Theme8SmPng,
      lg: Theme8Png,
    },
  },
];

const PREFIX_CLASS = "theme";

export default function ThemeSection() {
  return (
    <section className={`container py-12 py-lg-20 | ${PREFIX_CLASS}`}>
      <h2
        className="
        fs-4
        fs-lg-2
        fw-bolder
        mb-6
        ">
        熱門主題
      </h2>
      <div className="row gy-2 gy-lg-6">
        {themeData.map(({ id, title, images }) => (
          <div key={id} className="col-lg-3">
            <div className="card text-bg-dark border-0 rounded-x-6 rounded-y-0">
              <picture>
                <source
                  srcSet={`${images.lg} 306w`}
                  media="(min-width: 992px)"
                />
                <img
                  src={images.sm}
                  className="card-img rounded-x-6 rounded-y-0"
                  alt=""
                />
              </picture>
              <div
                className="
                  card-img-overlay
                  d-flex
                  align-items-center
                  justify-content-center
                  ">
                <h3 className="mb-0">
                  <NavLink
                    to={`/theme/${id}`}
                    className="card-title fs-6 fs-lg-5 fw-bolder text-decoration-none stretched-link">
                    <span>{title}</span>
                  </NavLink>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
