import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Carousel from "bootstrap/js/dist/carousel";

import {
  ArrowLeftSvg,
  ArrowRightSvg,
  CardArticle1Png,
  CardArticle1SmPng,
  CardArticle2Png,
  CardArticle2SmPng,
} from "../../../assets/images";

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

const propTypes = {
  isLargeScreen: PropTypes.bool,
};

FeaturedArticlesSection.propTypes = propTypes;

export default function FeaturedArticlesSection({ isLargeScreen = false }) {
  const [articleIndex, setArticleIndex] = useState(0);
  const articlesCarouselRef = useRef(null);
  const bootstrapArticlesCarouselRef = useRef(null);

  useEffect(() => {
    if (articlesCarouselRef.current) {
      bootstrapArticlesCarouselRef.current = new Carousel(
        articlesCarouselRef.current,
        {
          touch: false,
        }
      );
    }

    return () => {
      if (bootstrapArticlesCarouselRef.current) {
        bootstrapArticlesCarouselRef.current.dispose();
      }
    };
  }, []);

  useEffect(() => {
    if (bootstrapArticlesCarouselRef.current) {
      bootstrapArticlesCarouselRef.current.to(articleIndex);
    }
  }, [articleIndex]);

  return (
    <section className="container py-12 py-lg-20 | featured-articles">
      <div
        className="
        row
        justify-content-between
        position-relative
        pb-18
        pb-lg-0
        ">
        <div className="col-lg-auto d-flex flex-column">
          <h2
            className="
            fs-4
            fs-lg-2
            fw-bolder
            mb-6
            mb-lg-auto
            ">
            精選文章
          </h2>
          <div
            className="
                d-flex
                align-items-center
                justify-content-between
                position-absolute
                bottom-0
                start-0
                end-0
                position-lg-relative
                flex-lg-column
                align-items-lg-start
                px-3
                px-lg-0
                ">
            <span>
              {articleIndex + 1}{" "}
              <span className="text-tertiary d-inline-block mx-1">/</span>{" "}
              {articleData.length}
            </span>
            <div className="d-flex align-items-center mt-lg-8">
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
              <div className="decoration"></div>
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
        <div className="col-lg-8 pb-lg-4">
          <div ref={articlesCarouselRef} className="carousel slide">
            <div className="carousel-inner d-lg-flex">
              {articleData.map(
                ({ id, title, images, description, onlyForMembers }, index) => (
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
    </section>
  );
}
