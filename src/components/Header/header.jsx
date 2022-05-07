import React from "react";
import "./header.css";
import {
  MdLocationOn,
  MdOutlineSearch,
  MdAccountCircle,
  MdOutlineShoppingBag,
} from "react-icons/md";

import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

const header = () => {
  return (
    <>
      <div className="navbar-container">
        {/* left menu-bar  */}
        <div className="left-menu">
          <ul className="menu">
            <li>
              <Button>
                <ColorModeSwitcher />
              </Button>
            </li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/allfruits"
            >
              <li>SHOP</li>
            </Link>
            <li>LEARN</li>
            <li>GROW</li>
          </ul>
        </div>

        {/* logo  */}
        <div className="logo">
          <img
            src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204"
            alt="kimaye logo"
          />
        </div>

        {/* right menu-bar */}
        <div className="right-menu">
          <ul className="menu">
            <li>
              <MdLocationOn />
            </li>
            <li>
              <MdOutlineSearch />
            </li>

            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/SignPage"
            >
              <li>
                <MdAccountCircle />
              </li>
            </Link>

            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/CartPage"
            >
              <li>
                <MdOutlineShoppingBag />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default header;
