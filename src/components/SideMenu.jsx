import React from "react";
import "./SideMenu.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function SideMenu({ items, onlyPnaier }) {
  const [isSideMenuOpen, setIsSideMenuOpen] = React.useState(false);

  let timeOut;

  function handleMouseEnter() {
    const sideBarEl = document.querySelector(".side-menu");
    sideBarEl.style.width = "10px";
    timeOut = setTimeout(() => {
      sideBarEl.style.width = "0px";
    }, 1000);
  }
  function handleMouseLeave() {
    const sideBarEl = document.querySelector(".side-menu");
    clearTimeout(timeOut);
    sideBarEl.style.width = "0px";
  }

  return onlyPnaier ? (
    <div className="side-menu-content">
      <h1 style={{ color: "#000" }}>Panier</h1>
      <div className="panier" style={{ color: "#000" }}>
        <ul>
          {items.map((item, index) => {
            return (
              <li className="li" key={index}>
                <span className="item">
                  {item.itemName}&emsp;&emsp;
                  {item.quantity > 1 && `x${item.quantity}`}
                </span>
                <span className="price">{item.price} DZD</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className="panier"
        style={{
          alignSelf: "end",
          color: "#000",
        }}
      >
        <li className="total li">
          <p className="item">Totale:</p>
          <p className="price">
            {items.reduce((prev, curr) => {
              return prev + curr.price * curr.quantity;
            }, 0)}{" "}
            DZD
          </p>
        </li>
      </div>

      <button className="buy-button bg-[#666]">Acheter</button>
    </div>
  ) : (
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
            onClick={() => {
              setIsSideMenuOpen(true);
              clearTimeout(timeOut);
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </button>

      <div className="side-menu-content">
        <h1>Panier</h1>

        <div className="panier">
          <ul>
            {items.map((item, index) => {
              return (
                <li className="li" key={index}>
                  <span className="item">
                    {item.itemName}&emsp;&emsp;
                    {item.quantity > 1 && `x${item.quantity}`}
                  </span>
                  <span className="price">{item.price} DZD</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          className="panier"
          style={{
            alignSelf: "end",
          }}
        >
          <li className="total li">
            <p className="item">Totale:</p>
            <p className="price">
              {items.reduce((prev, curr) => {
                return prev + curr.price * curr.quantity;
              }, 0)}{" "}
              DZD
            </p>
          </li>
        </div>

        <button className="buy-button">Acheter</button>
      </div>
    </div>
  );
}

export default SideMenu;
