import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CategoryIcon from "@mui/icons-material/Category";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import classNames from "classnames";
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
MainMenu.propTypes = {};

function MainMenu(props) {
  const location = useLocation();
  const tab = location.pathname;

  return (
    <nav className="navbar-default navbar-side" role="navigation">
      <div className="sidebar-collapse">
        <ul className="nav" id="main-menu" style={{ display: "block" }}>
          <li className="text-center">
            <img
              src="/assets/img/find_user.png"
              className="user-image img-responsive"
            />
          </li>
          <li>
            <NavLink
              className={classNames({
                "active-menu": tab.includes("/admin/products"),
              })}
              to="/admin/products"
            >
              <Inventory2Icon sx={{ marginRight: 2 }} />
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classNames({
                "active-menu": tab.includes("/admin/accounts"),
              })}
              to="/admin/accounts"
            >
              <AccountBoxIcon sx={{ marginRight: 2 }} />
              Accounts
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classNames({
                "active-menu": tab.includes("/admin/orders"),
              })}
              to="/admin/orders"
            >
              <LocalMallIcon sx={{ marginRight: 2 }} />
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classNames({
                "active-menu": tab.includes("/admin/menu"),
              })}
              to="/admin/menu"
            >
              <CategoryIcon sx={{ marginRight: 2 }} />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              className={classNames({
                "active-menu": tab.includes("/admin/partner"),
              })}
              to="/admin/partner"
            >
              <MonetizationOnIcon sx={{ marginRight: 2 }} />
              Partner
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainMenu;
