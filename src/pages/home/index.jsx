import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Carousel from "bootstrap/js/dist/carousel";

import BannerSection from "./banner";
import LifeSection from "./life";

import { useMediaQuery } from "../../lib/media-query-utils";

import {
  ArrowLeftSvg,
  ArrowRightSvg,
  ArrowRightPrimarySvg,

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
  CardHots11Png,
  CardHots12Png,
  CardHots13Png,
  CardHots14Png,
  CardHots1SmPng,
  CardHots2SmPng,
  CardHots3SmPng,
  CardHots4SmPng,
  CardHots5SmPng,
} from "../../assets/images";

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

const articleData = [
  {
    id: 1,
    title: "私人島嶼的露營奇遇記",
    images: {
      sm: CardArticle1SmPng,
      lg: CardArticle1Png,
    },
    description:
      "遠離塵囂,用全新的眼光重塑生活的舒適本味。徜徉在環山綠野間,在這處隱世私家別墅裡,盡情領略池畔優閒時光,任林間微風撫面,聆聽花鳥嘶啞之音,重拾內心深處的寧靜安詳...",
    onlyForMembers: false,
  },
  {
    id: 2,
    title: "窺探米其林三星主廚的絕密手藝",
    images: {
      sm: CardArticle2SmPng,
      lg: CardArticle2Png,
    },
    description:
      "在這間隱世餐廳,來一場味蕾與靈魂的盛宴。幽微燈火下,透過巨匠大師的獨門料理,領略食材中蘊藏的大自然馨香脈絡。營造只屬於你我的私密小宇宙,沉浸其中,品嘗人生至臻至美的風味...",
    onlyForMembers: true,
  },
];

const hotsData = [
  {
    id: 1,
    title: "酒精路跑地圖",
    descriptions: [
      "城市酒吧人氣榜,盤點當紅熱門酒吧",
      "你要的調酒師在這裡！五月全台酒...",
      "台南老宅手工酒藏,尋味百年人文釀意",
    ],
    images: {
      sm: CardHots1SmPng,
      lg: [CardHots11Png, CardHots12Png, CardHots13Png, CardHots14Png],
    },
    tags: ["#夜貓行程", "#barhopping", "#全台酒吧"],
  },
  {
    id: 2,
    title: "台北拉麵圖鑑",
    descriptions: [
      "城市酒吧人氣榜,盤點當紅熱門酒吧",
      "你要的調酒師在這裡！五月全台酒...",
      "台南老宅手工酒藏,尋味百年人文釀意",
    ],
    images: {
      sm: CardHots2SmPng,
      lg: [CardHots11Png, CardHots12Png, CardHots13Png, CardHots14Png],
    },
    tags: ["#雞白湯", "#拉麵", "#台北美食"],
  },
  {
    id: 3,
    title: "海島自由行",
    descriptions: [
      "私島慢活島嶼生活 - 在熱帶天堂品...",
      "海島漂流記 - 在陽光、沙灘和比基...",
      "島嶼蹤跡 - 揭開加勒比海上世外桃...",
    ],
    images: {
      sm: CardHots3SmPng,
      lg: [CardHots11Png, CardHots12Png, CardHots13Png, CardHots14Png],
    },
    tags: ["#熱帶國家", "#海邊", "#無敵海景"],
  },
  {
    id: 4,
    title: "短天數出國推薦",
    descriptions: [
      "72小時東京遊走 - 當個時尚東京通",
      "48小時曼谷遊玩全攻略",
      "三天兩夜賞櫻微醺東京",
    ],
    images: {
      sm: CardHots4SmPng,
      lg: [CardHots11Png, CardHots12Png, CardHots13Png, CardHots14Png],
    },
    tags: ["#說走就走", "#出國玩", "#東亞"],
  },
  {
    id: 5,
    title: "週末露營趣",
    descriptions: [
      "週末說走就走露營記",
      "城市野營日記",
      "和寵物去露營 - 大自然之旅的雙倍...",
    ],
    images: {
      sm: CardHots5SmPng,
      lg: [CardHots11Png, CardHots12Png, CardHots13Png, CardHots14Png],
    },
    tags: ["#戶外", "#露營控", "#凹豆"],
  },
];

const PREFIX_CLASS = "home";

export default function Home() {
  const [hotIndex, setHotIndex] = useState(0);
  const [articleIndex, setArticleIndex] = useState(0);
  const articlesCarouselRef = useRef(null);
  const bootstrapArticlesCarouselRef = useRef(null);
  const hotsCarouselRef = useRef(null);
  const bootstrapHotsCarouselRef = useRef(null);

  const isLargeScreen = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    if (articlesCarouselRef.current) {
      bootstrapArticlesCarouselRef.current = new Carousel(
        articlesCarouselRef.current,
        {
          touch: false,
        }
      );
    }

    if (hotsCarouselRef.current) {
      bootstrapHotsCarouselRef.current = new Carousel(hotsCarouselRef.current, {
        touch: true,
      });
    }
    return () => {
      if (bootstrapArticlesCarouselRef.current) {
        bootstrapArticlesCarouselRef.current.dispose();
      }

      if (bootstrapHotsCarouselRef.current) {
        bootstrapHotsCarouselRef.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      if (bootstrapHotsCarouselRef.current) {
        bootstrapHotsCarouselRef.current.to(0);
        setHotIndex(0);
      }
    }
  }, [isLargeScreen]);

  useEffect(() => {
    if (bootstrapArticlesCarouselRef.current) {
      bootstrapArticlesCarouselRef.current.to(articleIndex);
    }
  }, [articleIndex]);

  function _renderHotImages({ id, images, title }) {
    if (isLargeScreen) {
      const lastImage = images.lg.length - 1;

      return (
        <div className="d-flex">
          {images.lg.map((image, index) => (
            <img
              key={`${id}-${index + 1}`}
              src={image}
              className={clsx(
                "card-img",
                index === 0 && "rounded-start-6",
                index === lastImage && "rounded-end-6"
              )}
              alt={`${id}-${index + 1}`}
            />
          ))}
        </div>
      );
    }

    return <img src={images.sm} className="card-img rounded-1" alt={title} />;
  }

  return (
    <div className={PREFIX_CLASS}>
      <BannerSection />
      <section className="py-12 py-lg-20">
        <div className="container">
          <h2 className="mb-6">熱門主題</h2>
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
                  <div className="card-img-overlay d-flex align-items-center justify-content-center">
                    <h3 className="card-title h5-lg fs-6 mb-0">{title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 py-lg-20 | featured-article">
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
                  {articleIndex + 1}{" "}
                  <span className="text-tertiary d-inline-block mx-1">/</span>{" "}
                  {articleData.length}
                </span>
                <div className="d-flex align-items-center column-gap-5">
                  <button
                    type="button"
                    className="btn border rounded-pill border-secondary py-1 px-4"
                    onClick={() => {
                      const prevArticleId =
                        articleIndex - 1 < 0 ? 0 : articleIndex - 1;

                      setArticleIndex(prevArticleId);
                    }}
                    disabled={isLargeScreen}>
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
                    className="btn border rounded-pill border-secondary py-1 px-4"
                    onClick={() => {
                      const nextArticleId =
                        articleIndex + 1 === articleData.length
                          ? articleIndex
                          : articleIndex + 1;

                      setArticleIndex(nextArticleId);
                    }}
                    disabled={isLargeScreen}>
                    <img src={ArrowRightSvg} alt="next" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div ref={articlesCarouselRef} className="carousel slide">
                <div className="carousel-inner d-lg-flex">
                  {articleData.map(
                    (
                      { id, title, images, description, onlyForMembers },
                      index
                    ) => (
                      <div
                        className={clsx(
                          !isLargeScreen && "carousel-item px-4",
                          !isLargeScreen && index === 0 && "active",
                          isLargeScreen && index === 0 && "me-12"
                        )}
                        key={id}>
                        <div className="card border-0 bg-transparent pb-6 border-bottom rounded-bottom-0 border-dark">
                          <picture>
                            <source
                              srcSet={`${images.lg} 404w`}
                              media="(min-width: 992px)"
                            />
                            <img
                              src={images.sm}
                              className="card-img-top mb-6"
                              alt=""
                            />
                          </picture>
                          <div className="card-body p-0">
                            <h5 className="card-title fw-bolder">{title}</h5>
                            <p className="card-text text-secondary fw-semibold mb-6">
                              {description}
                            </p>
                            <a
                              href="#"
                              className="btn custom-btn custom-btn-only-text px-0 py-2 justify-content-between">
                              <span className="fw-bold fs-5 letter-spacing-headings">
                                Read More
                              </span>
                              {onlyForMembers && (
                                <span className="badge bg-coffee text-gray fs-6 py-1 px-2 rounded-1">
                                  會員專屬
                                </span>
                              )}
                            </a>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
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
      <section className="container py-12 py-lg-20 | hots">
        <h2 className="mb-6 mb-lg-10">大家都在看</h2>
        <section className="row">
          <div className="d-none d-lg-block col-lg-3">
            <div className="bg-white h-100 rounded-4 shadow">
              <div className="list-group p-6 d-flex flex-column row-gap-6 fs-5">
                {hotsData.map(({ id, title }, index) => (
                  <button
                    key={id}
                    type="button"
                    className={clsx(
                      "list-group-item list-group-item-action border-0 p-4 fw-bolder rounded-1",
                      hotIndex === index && "bg-honeydew"
                    )}
                    aria-current={hotIndex === index}
                    onClick={() => {
                      bootstrapHotsCarouselRef.current.to(index);
                      setHotIndex(index);
                    }}>
                    {title}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div ref={hotsCarouselRef} className="carousel slide">
              <div className="carousel-inner">
                {hotsData.map(
                  ({ id, title, descriptions, images, tags }, index) => (
                    <div
                      className={clsx(
                        "carousel-item px-1",
                        index === 0 && "active"
                      )}
                      key={id}>
                      <div className="card p-4 rounded-4 border-0 shadow p-lg-10">
                        <div className="card-body p-0 px-lg-6 pt-lg-6">
                          <h5 className="card-title text-primary mb-3 fs-4 fw-bolder mb-lg-6">
                            {title}
                          </h5>
                          <ul className="card-list list-style-none p-0 mb-lg-10">
                            {descriptions.map((description) => (
                              <li
                                key={description}
                                className="d-flex align-items-end mb-2 mb-lg-5">
                                <p className="card-text fw-bold lh-lg-sm">
                                  {description}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="px-lg-4 mb-6 mb-lg-4">
                          {_renderHotImages({ id, images, title })}
                        </div>
                        <div className="d-flex flex-column flex-lg-row row-gap-6 justify-content-lg-between align-items-lg-center p-lg-6">
                          <div className="card-tags d-flex justify-content-between column-gap-lg-4">
                            {tags.map((tag) => (
                              <span
                                key={tag}
                                className="badge bg-coffee text-gray rounded-1 fs-lg-6">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <NavLink
                            to={`/hots/${id}`}
                            className="btn custom-btn justify-content-center fw-bold text-primary pe-lg-0">
                            View More
                            <img
                              src={ArrowRightPrimarySvg}
                              alt=""
                              className="ms-3"
                            />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </section>
      <LifeSection />
    </div>
  );
}
