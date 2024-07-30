import React from "react";
import "../styles/SideMenu.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function SideMenu() {
  const [isSideMenuOpen, setIsSideMenuOpen] = React.useState(false);

  return (
    <>
      <div
        className="side-menu"
        style={{ width: isSideMenuOpen ? "20vw" : "0px" }}
      >
        <button
          className="open-close-sidebar-button"
          style={{ right: isSideMenuOpen ? "-13px" : "-27px" }}
        >
          {isSideMenuOpen ? (
            <XMarkIcon
              className="h-6 w-6"
              strokeWidth={2}
              onClick={() => setIsSideMenuOpen(false)}
            />
          ) : (
            <Bars3Icon
              className="h-6 w-6"
              strokeWidth={2}
              onClick={() => setIsSideMenuOpen(true)}
            />
          )}
        </button>
        <div className="side-menu-content">
          <h1>Panier</h1>
          <div className="panier">
            <ul>
              {/* 
              <li>
                <span className="item">{itemName}</span>
                <span className="price">{price} DZD</span>
              </li>
             */}
              <li>
                <span className="item">Keys</span>
                <span className="price">300 DZD</span>
              </li>
              <li>
                <p className="item">pen</p>
                <p className="price">40 DZD</p>
              </li>
            </ul>
            <li className="total">
              <p className="item">Totale:</p>
              <p className="price">340 DZD</p>
              {/*<p className="price">{totalPrice} DZD</p> */}
            </li>
          </div>
          <button className="buy-button">Acheter</button>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
