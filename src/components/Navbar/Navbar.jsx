import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";
import ShopCart from "../ShopCart/ShopCart";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/4">
              Shoes & Accessories
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            MYSTORE
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contacts
            </Link>
          </div>
          <div className="icons">
            <SearchIcon className="icon" />
            <PersonOutlineIcon className="icon" />
            <FavoriteBorderIcon className="icon" />
            <div className="cardIcon" onClick={(e) => setOpen(!open)}>
              <ShoppingCartOutlinedIcon className="icon" />
              <span className="shoppingBadge">{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <ShopCart setOpen={setOpen} />}
    </div>
  );
}
