import React from "react";
import macbook from "../assets/products/macbook.png";
import sake from "../assets/products/sake.png";
import sake100ml from "../assets/products/sake100ml.png";
import n5chanel from "../assets/products/n5chanel.png";
import cocochanel from "../assets/products/cocochanel.png";

function HotDeals({ title, top, left, top2, top3 }) {
  return (
    <div className="hotDeals" style={{ top: `${top}`, left: `${left}` }}>
      {title && <p className="title">{title}</p>}
      <div className="nextIcon">
        {/* <FontAwesomeIcon className="next__icon" icon={faChevronRight} /> */}
        <svg
          className="next__icon"
          width="13"
          height="26"
          viewBox="0 0 13 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.36499 24.88L11.145 15.1C12.3 13.945 12.3 12.055 11.145 10.9L1.36499 1.12"
            stroke="#292D32"
            stroke-opacity="0.7"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="hotDeals--products" style={{ top: `${top2}` }}>
        <div className="hotDeals--product hotDeals--product1">
          <div className="img-container">
            <img className="product-img" src={macbook} alt="" />
          </div>
          <div className="product-name product-name1">
            <p>
              APPLE 16-INCH MACBOOK PRO: APPLE M1 PRO CHIP WITH 10‑CORE CPU AND
              16‑CORE GPU, 512GB SSD (SPACE GREY)
            </p>
          </div>
          <p className="product-price1">68.000.000 VND</p>
        </div>

        <div className="hotDeals--product hotDeals--product2">
          <div className="img-container">
            <img className="product-img" src={sake} alt="" />
          </div>
          <div className="product-name product-name2">
            <p>RƯỢU SAKE NHẬT</p>
          </div>
          <div className="product-price2">
            <p>680.000 VND</p>
          </div>
        </div>

        <div className="hotDeals--product hotDeals--product3">
          <div className="img-container">
            <img className="product-img" src={sake100ml} alt="" />
          </div>
          <div className="product-name product-name3">
            <p>RƯỢU SAKE 100ml NHẬT</p>
          </div>
          <div className="product-price3">
            <p>540.000 VND</p>
          </div>
        </div>

        <div className="hotDeals--product hotDeals--product4">
          <div className="img-container">
            <img className="product-img" src={n5chanel} alt="" />
          </div>
          <div className="product-name product-name4">
            <p>NƯỚC HOA N5 CHANEL</p>
          </div>
          <div className="product-price4">
            <p>5.000.000 VND</p>
          </div>
        </div>

        <div className="hotDeals--product hotDeals--product5">
          <div className="img-container">
            <img className="product-img" src={cocochanel} alt="" />
          </div>
          <div className="product-name product-name5">
            <p>NƯỚC HOA COCO CHANEL P</p>
          </div>
          <div className="product-price5">
            <p>5.900.000 VND</p>
          </div>
        </div>
      </div>

      <button style={{ top: `${top3}` }}>
        <p>Xem thêm</p>
      </button>
    </div>
  );
}

export default HotDeals;
