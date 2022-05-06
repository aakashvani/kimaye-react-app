import React from "react";
import "./header.css"

const header = () => {
  return (
    <>
      <div className="navbar-container">
        {/* left menu-bar  */}
        <div>left menu-bar</div>

        {/* logo  */}
        <div className="logo">
          <img
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204"
            alt="kimaye logo"
          />
        </div>

        {/* right menu-bar */}
        <div>right menu-bar</div>
      </div>
    </>
  );
};

export default header;
