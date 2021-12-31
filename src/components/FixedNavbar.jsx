import React from "react";

function FixedNavbar() {
  return (
    <div className="fixed">
      <div className="fixed-navbar">
        <div className="new">
          <div className="new-wrapper-wrapper">
            <div className="new-wrapper">
              <p className="new-text">SẢN PHẨM MỚI</p>
            </div>
            <div className="new-arrow">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.74 15.53L14.26 12L10.74 8.47"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="hot">
          <div className="hot-wrapper-wrapper">
            <div className="hot-wrapper">
              <p>SẢN PHẨM BÁN CHẠY</p>
            </div>
            <div className="hot-arrow">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.74 15.53L14.26 12L10.74 8.47"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="fixed-cart">
          <div className="cart-wrapper-wrapper">
            <div className="cart-wrapper">
              <p>GIỎ HÀNG</p>
            </div>
            <div className="cart-arrow">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.74 15.53L14.26 12L10.74 8.47"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed-answer">
        <div className="fixed-question">
          <p>Bạn có câu hỏi ?</p>
        </div>
        <div className="fixed-message">
          <div className="message-vecto-container">
            <div className="message-vecto-wrapper">
              <svg
                className="message-vecto"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 17H6C2 17 0 16 0 11V6C0 2 2 0 6 0H14C18 0 20 2 20 6V11C20 15 18 17 14 17H13.5C13.19 17 12.89 17.15 12.7 17.4L11.2 19.4C10.54 20.28 9.46 20.28 8.8 19.4L7.3 17.4C7.14 17.18 6.77 17 6.5 17Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed-scrollToTop">
        <div className="fixed-scroll-wrapper">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.92 15.05L13.4 8.53001C12.63 7.76001 11.37 7.76001 10.6 8.53001L4.07996 15.05"
              stroke="white"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default FixedNavbar;
