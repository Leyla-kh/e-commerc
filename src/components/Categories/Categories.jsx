import { Link } from "react-router-dom";
import "./Categories.scss";

export default function Categories() {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="image/women2-category.jpg" alt="" />
          <button>
            <Link className="link" to="/products/women">
              Women
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="image/bag-category.jpg" alt="" />
          <button>
            <Link className="link" to="/products/women">
              Bags
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="/image/men-styles-3.jpg" alt="" />
          <button>
            <Link className="link" to="/products/men">
              Men
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src="image/footwear.jpg" alt="" />
              <button>
                <Link className="link" to="/products/shoes-accessory">
                  Shoes
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="image/acc-collection1.jpg" alt="" />
              <button>
                <Link className="link" to="/products/shoes-accessory">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="image/kidsCollection4.jpg" alt="" />
          <button>
            <Link className="link" to="/products/kids">
              Children
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
