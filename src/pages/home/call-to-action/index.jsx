import { NavLink } from "react-router-dom";

const PREFIX_CLASS = "call-to-action";

export default function CallToActionSection() {
  return (
    <section className={`bg-latte | ${PREFIX_CLASS}`}>
      <div
        className="
          container
          d-flex
          flex-column
          align-items-center
          py-12
          py-lg-20
          | cartoons
          ">
        <h2
          className="
            text-primary
            fs-6
            fw-bolder
            mb-3
            text-lg-gray
            fs-lg-4
            mb-lg-5
          ">
          \ 母親節強檔活動 /{" "}
        </h2>
        <h3
          className="
            mb-6
            fs-4
            fw-bolder
            mb-lg-5
            fs-lg-2
        ">
          家庭訂閱方案限時 7 折
        </h3>
        <ul className="text-secondary fw-semibold list-style-none ps-0 mb-6 mb-lg-10">
          <li>
            <span>每月最新文章無限閱讀</span>
          </li>
          <li>
            <span>專屬會員限定內容</span>
          </li>
          <li>
            <span>定期電子報</span>
          </li>
          <li>
            <span>年度精選禮物</span>
          </li>
          <li>
            <span>24 /7 優先客戶服務</span>
          </li>
          <li>
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
  );
}
