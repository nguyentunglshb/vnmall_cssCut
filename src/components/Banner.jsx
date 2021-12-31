import React from "react";

function Banner({ title, top, width, img }) {
  return (
    <div className="banner" style={{ top: `${top}` }}>
      <p className="banner--title" style={{ width: `${width}` }}>
        {title}
      </p>

      <img src={img} alt="" />
    </div>
  );
}

export default Banner;
