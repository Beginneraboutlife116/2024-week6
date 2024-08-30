import { NavLink } from "react-router-dom";

import {
  ArrowRightPrimarySvg,
  CardLife1Png,
  CardLife1SmPng,
  CardLife2Png,
  CardLife2SmPng,
  CardLife3Png,
  CardLife3SmPng,
} from "../../../assets/images";

const LifeData = {
  eat: {
    images: {
      sm: CardLife1SmPng,
      lg: CardLife1Png,
    },
    descriptions: [
      "米其林三星主廚的那些絕活傳奇",
      "探秘成都的地道川味秘技與魅力",
      "義大利釀酒師對於酒的堅持執著",
    ],
  },
  art: {
    images: {
      sm: CardLife2SmPng,
      lg: CardLife2Png,
    },
    descriptions: [
      "解構教主級時裝設計大師的獨...",
      "當代攝影師鏡頭中的光影離奇",
      "帶你穿縮中世紀，夏季文藝復興展",
    ],
  },
  travel: {
    images: {
      sm: CardLife3SmPng,
      lg: CardLife3Png,
    },
    descriptions: [
      "專賣奇珍異寶的東歐地下夜市",
      "東京深度六區,帶你細品極簡魅力",
      "遠離喧囂,偶探巴塔哥尼亞終界",
    ],
  },
};

const TitleMap = {
  eat: "食",
  art: "藝",
  travel: "旅",
};

const PREFIX_CLASS = "life";

export default function LifeSection() {
  return (
    <section className={`container py-12 py-lg-20 | ${PREFIX_CLASS}`}>
      <div className="row mb-6 mb-lg-10 d-flex justify-content-between">
        <div className="col-auto">
          <h2 className="fs-4 fs-lg-2 fw-bolder">品味生活</h2>
        </div>
        <div className="col-auto d-none d-lg-block">
          <div className="decoration">
            <div></div>
          </div>
        </div>
      </div>
      <div className="row gy-6">
        {Object.entries(LifeData).map(([key, { images, descriptions }]) => (
          <div key={key} className="col-lg-4">
            <div className="card border-0 bg-transparent">
              <h3 className="card-title fs-1 text-gray mb-6 fs-lg-0 mb-lg-9">
                {TitleMap[key]}.
              </h3>
              <picture>
                <source
                  srcSet={`${images.lg} 392w`}
                  media="(min-width: 992px)"
                />
                <img
                  src={images.sm}
                  className="card-img rounded-1 object-fit-cover"
                  alt={TitleMap[key]}
                />
              </picture>
              <div className="card-body p-0 pt-6 pt-lg-9">
                <ul className="card-list list-style-none p-0 mb-6 mb-lg-9">
                  {descriptions.map((description) => (
                    <li key={description} className="mb-5">
                      <p className="card-text fw-bolder lh-lg-sm fs-lg-5">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
                <NavLink
                  to={`/life/${key}`}
                  className="btn custom-btn justify-content-center py-2 fw-bold link-primary">
                  View More
                  <img
                    src={ArrowRightPrimarySvg}
                    alt="View More"
                    className="ms-3"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
