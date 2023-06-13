import { Link } from "react-router-dom";
import "./Categories.scss";

export default function Categories() {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img src="image/men-style-3.jpg" alt="" />
          <button>
            <Link className="link" to="/products/1">
              test
            </Link>
          </button>
        </div>
        <div className="row">
          <img src="image/bag-category.jpg" alt="" />
          <button>
            <Link className="link" to="/products/1">
              test
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src="/image/men-styles-3.jpg" alt="" />
          <button>
            <Link className="link" to="/products/1">
              test
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
                <Link className="link" to="/products/1">
                  test
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img src="image/men-category.jpg" alt="" />
              <button>
                <Link className="link" to="/products/1">
                  test
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src="image/kids collection4.jpg" alt="" />
          <button>
            <Link className="link" to="/products/1">
              test
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
