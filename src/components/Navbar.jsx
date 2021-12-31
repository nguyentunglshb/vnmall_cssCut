import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar--Header">
        <div className="navbar--Rectangle1">
          <div className="navbar--Logo">
            <img src={logo} alt="" />
          </div>

          <p className="navbar--yourAddress">Khu vực của bạn :</p>
          <select className="navbar--address" name="address" id="">
            <option className="hanoi" value="hn">
              Hà Nội
            </option>
          </select>

          <div className="navbar--category">
            <ul className="navbar--menu">
              <li>DANH MỤC SẢN PHẨM</li>
              <li>THƯƠNG HIỆU</li>
              <li>ƯU ĐÃI</li>
              <li>CẢM HỨNG</li>
            </ul>

            <div className="navbar--customer">
              <div>
                <input type="text" placeholder="Tìm kiếm" />
                {/* <FontAwesomeIcon className="icon--search" icon={faSearch} /> */}
                <svg
                  className="icon--search"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z"
                    stroke="#292D32"
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 16.5L15 15"
                    stroke="#292D32"
                    stroke-opacity="0.5"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div className="bag">
                {/* <FontAwesomeIcon className="icon--cart" icon={faShoppingCart} /> */}
                <svg
                  className="icon--cart"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 7.67V6.7C7.5 4.45 9.31 2.24 11.56 2.03C14.24 1.77 16.5 3.88 16.5 6.51V7.89"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.00001 22H15C19.02 22 19.74 20.39 19.95 18.43L20.7 12.43C20.97 9.99 20.27 8 16 8H8.00001C3.73001 8 3.03001 9.99 3.30001 12.43L4.05001 18.43C4.26001 20.39 4.98001 22 9.00001 22Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.4955 12H15.5045"
                    stroke="#292D32"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.49451 12H8.50349"
                    stroke="#292D32"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="profile">
                {/* <FontAwesomeIcon className="icon-profile" icon={faUser} /> */}
                <svg
                  className="icon-profile"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.45 10.79 7.56 8.84 7.56 6.44C7.56 3.99 9.54 2 12 2C14.45 2 16.44 3.99 16.44 6.44C16.43 8.84 14.54 10.79 12.16 10.87Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar--Block">
          <div className="vietnamAirLines">
            <div className="vietnamAirLinesBlock1">
              <p className="navbar--vietnamAirLines">
                VIETNAM AIRLINES MALL SUPER SALE
              </p>
              <p className="navbar--vietnamAirLines__desc">
                Mua 2 sản phẩm giảm 15% // Mua 3 sản phẩm giảm 22%. Kết thúc :
              </p>
            </div>
            <div className="vietnamAirLinesBlock2">
              <div className="date time">
                <p className="count">00</p>
                <p className="time--date">Ngày</p>
              </div>
              <div className="hour time">
                <p className="count">20</p>
                <p className="time--hour">Giờ</p>
              </div>
              <div className="min time">
                <p className="count">39</p>
                <p className="time--min">Phút</p>
              </div>
              <div className="sec time">
                <p className="count">18</p>
                <p className="time--sec">Giây</p>
              </div>
            </div>
            <div className="vietnamAirLinesBlock3">
              <p>SHOP NOW</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
