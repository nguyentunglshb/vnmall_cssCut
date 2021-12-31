import React from "react";
import cyberMonday from "../assets/cyberMonday.png";

function Slide() {
  return (
    <div className="slide">
      <div className="main--slide">
        <div className="slide--background">
          <img src={cyberMonday} alt="" />
        </div>
        <div className="arrowLeft">
          <div>
            {/* <FontAwesomeIcon className="arrowIcon" icon={faChevronLeft} /> */}
            <svg
              className="arrowIcon"
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.36 20.4133L1.97333 11L11.36 1.58667"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="arrowRight">
          <div>
            {/* <FontAwesomeIcon className="arrowIcon" icon={faChevronRight} /> */}
            <svg
              className="arrowIcon"
              width="13"
              height="22"
              viewBox="0 0 13 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.64001 1.58666L11.0267 11L1.64001 20.4133"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="slide--navigate">
        <div className="retangle retangle2"></div>
        <div className="retangle retangle3"></div>
        <div className="retangle retangle4"></div>
        <div className="retangle retangle5"></div>
        <div className="retangle retangle6"></div>
      </div>
    </div>
  );
}

export default Slide;
