import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import Carousel from "bootstrap/js/dist/carousel";

import {
  ArrowRightWhiteSvg,
  PlaySvg,
  CardProjects1Png,
  CardProjects2Png,
  CardProjects3Png,
  CardProjects4Png,
} from "../../../assets/images";

const ProjectsData = [
  {
    id: 1,
    image: CardProjects1Png,
    title: "人氣行程",
    slogan: "親子露營要帶什麼？",
  },
  {
    id: 2,
    image: CardProjects2Png,
    title: "編輯推薦",
    slogan: "質感房間改造攻略！",
  },
  {
    id: 3,
    image: CardProjects3Png,
    title: "編輯推薦",
    slogan: "山女孩的健行筆記",
  },
  {
    id: 4,
    image: CardProjects4Png,
    title: "熱門文章",
    slogan: "適合溜小孩的海邊景點推薦",
  },
];

const propTypes = {
  isLargeScreen: PropTypes.bool.isRequired,
};

ProjectsSection.propTypes = propTypes;

export default function ProjectsSection({ isLargeScreen }) {
  const carouselRef = useRef(null);
  const bootstrapCarouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current && !isLargeScreen) {
      bootstrapCarouselRef.current = new Carousel(carouselRef.current, {
        pause: "hover",
        interval: 2000,
        touch: true,
      });
      bootstrapCarouselRef.current.cycle();
    }

    return () => {
      if (bootstrapCarouselRef.current) {
        bootstrapCarouselRef.current.dispose();
      }
    };
  }, [isLargeScreen]);

  return (
    <section className="bg-latte">
      <div className="container py-12 py-lg-20">
        <div className="row justify-content-lg-between">
          <div className="d-flex flex-column align-items-center align-items-lg-start justify-content-lg-center col-lg-auto mb-12 mb-lg-0">
            <p className="fs-lg-5 fw-bolder text-secondary">
              今天又不知道要去哪裡了嗎？
            </p>
            <h2 className="fs-4 fs-lg-2 fw-bolder d-lg-flex mb-6 mb-lg-9 text-center">
              <p className="mb-2 mb-lg-0 me-lg-2">Vivre</p>
              <p className="mb-0">給你意想不到生活風格提案</p>
            </h2>
            <NavLink
              to="/subscribe"
              className="btn custom-btn-primary custom-btn rounded-pill">
              馬上訂閱
              <img src={ArrowRightWhiteSvg} alt="" />
            </NavLink>
          </div>
          <div className="col-lg-6">
            <div ref={carouselRef} className="carousel slide">
              <div className="carousel-inner pt-4">
                <div className="row gy-9">
                  {ProjectsData.map(({ id, image, title, slogan }, index) => (
                    <div
                      key={id}
                      className={clsx(
                        !isLargeScreen && "carousel-item px-5",
                        !isLargeScreen && index === 0 && "active",
                        isLargeScreen && "col-lg-6",
                        isLargeScreen && index === 0 && "mt-lg-20",
                        isLargeScreen &&
                          index === ProjectsData.length - 1 &&
                          "mt-lg-n2",
                        isLargeScreen && index % 2 && "order-1"
                      )}>
                      <div className="card text-bg-dark border-0 rounded-bottom-0">
                        <img src={image} className="card-img" alt={title} />
                        <div className="card-img-overlay">
                          <h3 className="card-title text-primary bg-white py-2 px-3 position-absolute top-0 fs-6 fw-bolder border border-honeydew rounded-1 mb-0 mt-n4 d-flex align-items-center">
                            <img src={PlaySvg} alt="" className="me-2" />
                            {title}
                          </h3>
                          <NavLink className="stretched-link text-milk position-absolute bottom-0 text-decoration-none start-0 end-0 px-3 pb-4 d-flex justify-content-between fw-bold gradient">
                            {slogan}
                            <img src={ArrowRightWhiteSvg} alt="" />
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
