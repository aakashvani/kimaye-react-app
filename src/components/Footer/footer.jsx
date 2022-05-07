import React from "react";
import "./footer.css";
const footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="big-div">
          <div className="left-footer">
            <ul>
              <li>FAQ's</li>
              <li>Contact Us</li>
              <li>Shipping & Return Policy</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="right-footer">
            <h5>Follow us on</h5>
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/fb-icon.png?v=1599571756"
                alt="facebook.png"
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/insta-icon.png?v=1599571756"
                alt="instagram.png"
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/twitter-icon.png?v=1599571756"
                alt="twitter.png"
              />
            </div>
          </div>
        </div>

        <hr style={{ width: "100%", color: "black" }} />
        <p style={{ margin: "auto", textAlign: "center" }}>
          copyright &copy; 2020 All rights reserved.
        </p>
      </div>
    </>
  );
};

export default footer;
