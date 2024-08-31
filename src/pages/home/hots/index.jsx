import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";
import Carousel from "bootstrap/js/dist/carousel";

import {
  ArrowRightPrimarySvg,
  CardHots11Png,
  CardHots12Png,
  CardHots13Png,
  CardHots14Png,
  CardHots1SmPng,
  CardHots2SmPng,
  CardHots3SmPng,
  CardHots4SmPng,
  CardHots5SmPng,
} from "../../../assets/images";

const hotsData = [
  {
    id: 1,
    title: "酒精路跑地圖",
    descriptions: [
      { id: 1, slogan: "城市酒吧人氣榜,盤點當紅熱門酒吧" },
      { id: 2, slogan: "你要的調酒師在這裡！五月全台酒..." },
      { id: 3, slogan: "台南老宅手工酒藏,尋味百年人文釀意" },
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
      { id: 4, slogan: "城市酒吧人氣榜,盤點當紅熱門酒吧" },
      { id: 5, slogan: "你要的調酒師在這裡！五月全台酒..." },
      { id: 6, slogan: "台南老宅手工酒藏,尋味百年人文釀意" },
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
      { id: 7, slogan: "私島慢活島嶼生活 - 在熱帶天堂品..." },
      { id: 8, slogan: "海島漂流記 - 在陽光、沙灘和比基..." },
      { id: 9, slogan: "島嶼蹤跡 - 揭開加勒比海上世外桃..." },
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
      { id: 10, slogan: "72小時東京遊走 - 當個時尚東京通" },
      { id: 11, slogan: "48小時曼谷遊玩全攻略" },
      { id: 12, slogan: "三天兩夜賞櫻微醺東京" },
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
      { id: 13, slogan: "週末說走就走露營記" },
      { id: 14, slogan: "城市野營日記" },
      { id: 15, slogan: "和寵物去露營 - 大自然之旅的雙倍..." },
    ],
    images: {
      sm: CardHots5SmPng,
      lg: [CardHots11Png, CardHots12Png, CardHots13Png, CardHots14Png],
    },
    tags: ["#戶外", "#露營控", "#凹豆"],
  },
];

const propTypes = {
  isLargeScreen: PropTypes.bool,
};

HotsSection.propTypes = propTypes;

export default function HotsSection({ isLargeScreen = false }) {
  const [hotIndex, setHotIndex] = useState(0);
  const carouselRef = useRef(null);
  const bootstrapCarouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      bootstrapCarouselRef.current = new Carousel(carouselRef.current, {
        pause: "hover",
        interval: 2000,
        touch: true,
      });
      bootstrapCarouselRef.current.to(0);

      if (!isLargeScreen) {
        bootstrapCarouselRef.current.cycle();
      }
    }
    return () => {
      if (bootstrapCarouselRef.current) {
        bootstrapCarouselRef.current.dispose();
        setHotIndex(0);
      }
    };
  }, [isLargeScreen]);

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
    <section className="container py-12 py-lg-20 | hots">
      <h2 className="fs-4 fs-lg-2 fw-bolder mb-6 mb-lg-10">大家都在看</h2>
      <section className="row">
        <div className="d-none d-lg-block col-lg-3">
          <div className="list-group p-6 d-flex flex-column row-gap-6 fs-5 bg-white h-100 rounded-4 shadow">
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
                  bootstrapCarouselRef.current.to(index);
                  setHotIndex(index);
                }}>
                {title}
              </button>
            ))}
          </div>
        </div>
        <div className="col-lg-9">
          <div ref={carouselRef} className="carousel slide">
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
                        <h5 className="card-title text-primary mb-3 fs-5 fw-bolder mb-lg-6 fs-lg-4">
                          {title}
                        </h5>
                        <ul className="card-list list-unstyled p-0 mb-lg-10">
                          {descriptions.map((description) => (
                            <li key={description.id} className="mb-2 mb-lg-5">
                              <NavLink
                                to={`/hots/${id}/${description.id}`}
                                className="card-text fw-semibold fw-lg-bold lh-lg-sm text-decoration-none text-dark text-primary-hover">
                                {description.slogan}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="px-lg-4 mb-6 mb-lg-10">
                        {_renderHotImages({ id, images, title })}
                      </div>
                      <div className="d-flex flex-column flex-lg-row row-gap-6 justify-content-lg-between align-items-lg-center px-lg-6">
                        <div className="card-tags d-flex justify-content-between column-gap-lg-4">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className="badge bg-coffee text-gray rounded-1 fs-lg-6 lh-sm">
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
  );
}
