import { NavLink } from "react-router-dom";

import {
  BannerSmPng,
  BannerPng,
  ArrowLeftSvg,
  ArrowRightSvg,
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

  // cards
  CardArticle1Png,
  CardArticle1SmPng,
  CardArticle2Png,
  CardArticle2SmPng,
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

const articleData = [
  {
    id: 1,
    title: "私人島嶼的露營奇遇記",
    imageUrl: {
      sm: CardArticle1SmPng,
      lg: CardArticle1Png,
    },
    description:
      "遠離塵囂,用全新的眼光重塑生活的舒適本味。徜徉在環山綠野間,在這處隱世私家別墅裡,盡情領略池畔優閒時光,任林間微風撫面,聆聽花鳥嘶啞之音,重拾內心深處的寧靜安詳...",
  },
  {
    id: 2,
    title: "窺探米其林三星主廚的絕密手藝",
    imageUrl: {
      sm: CardArticle2SmPng,
      lg: CardArticle2Png,
    },
    description:
      "在這間隱世餐廳,來一場味蕾與靈魂的盛宴。幽微燈火下,透過巨匠大師的獨門料理,領略食材中蘊藏的大自然馨香脈絡。營造只屬於你我的私密小宇宙,沉浸其中,品嘗人生至臻至美的風味...",
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
      <section className="py-12 py-lg-20">
        <div className="container">
          <div className="row justify-content-between position-relative pb-17 pb-lg-0">
            <div className="col-lg-auto d-flex flex-column">
              <h2 className="mb-6 mb-lg-auto">精選文章</h2>
              <div
                className="
                d-flex
                flex-lg-column
                row-gap-8
                position-absolute
                position-lg-relative
                bottom-0
                start-0
                end-0
                w-lg-auto
                justify-content-between
                px-3
                px-lg-0
                ">
                <span>
                  1 <span className="text-tertiary d-inline-block mx-1">/</span>{" "}
                  5
                </span>
                <div className="d-flex align-items-center column-gap-5">
                  <button
                    type="button"
                    className="btn border rounded-pill border-secondary py-1 px-4">
                    <img src={ArrowLeftSvg} alt="prev" />
                  </button>
                  <div
                    className="inline-size flex-grow-1 flex-lg-shrink-0 block-size bg-dark"
                    style={{
                      "--inline-size": "80px",
                      "--block-size": "1px",
                    }}></div>
                  <button
                    type="button"
                    className="btn border rounded-pill border-secondary py-1 px-4">
                    <img src={ArrowRightSvg} alt="next" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex column-gap-6 column-gap-lg-12 overflow-x-auto">
              {articleData.map(({ id, title, imageUrl, description }) => (
                <div
                  className="card rounded-bottom-0 border-0 border-bottom border-dark bg-transparent w-100 w-lg-auto flex-shrink-0 flex-lg-shrink-1"
                  key={id}>
                  <picture>
                    <source
                      srcSet={`${imageUrl.lg} 404w`}
                      media="(min-width: 992px)"
                    />
                    <img src={imageUrl.sm} className="card-img-top" alt="" />
                  </picture>
                  <div className="card-body px-0 pt-6 pb-7">
                    <h5 className="card-title fw-bolder">{title}</h5>
                    <p className="card-text mb-6 text-secondary fw-semibold">
                      {description}
                    </p>
                    <a
                      href="#"
                      className="btn custom-btn-only-text p-0 d-flex justify-content-between align-items-start">
                      <span className="fw-bold fs-5 letter-spacing-headings">
                        Read More
                      </span>
                      <span className="badge bg-coffee text-gray fs-6 py-1 px-2">
                        會員專屬
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-latte | call-to-action">
        <div className="container d-flex flex-column align-items-center py-12 py-lg-20 | call-to-action--cartoons">
          <h2 className="fs-6 fs-lg-4 text-primary text-lg-gray fw-bolder mb-3 mb-lg-5">
            \ 母親節強檔活動 /{" "}
          </h2>
          <h3 className="h2 fw-bolder mb-6 mb-lg-5">家庭訂閱方案限時 7 折</h3>
          <ul className="text-secondary fw-semibold list-style-none ps-0 mb-6">
            <li className="d-flex mb-4">
              <span>每月最新文章無限閱讀</span>
            </li>
            <li className="d-flex mb-4">
              <span>專屬會員限定內容</span>
            </li>
            <li className="d-flex mb-4">
              <span>定期電子報</span>
            </li>
            <li className="d-flex mb-4">
              <span>年度精選禮物</span>
            </li>
            <li className="d-flex mb-4">
              <span>24 /7 優先客戶服務</span>
            </li>
            <li className="d-flex mb-lg-4">
              <span>為每個成員量身打造專屬行程</span>
            </li>
          </ul>
          <NavLink
            to="/subscribe"
            className="btn custom-btn-primary rounded-pill custom-btn">
            我想了解
          </NavLink>
        </div>
      </section>
    </>
  );
}
